import { Form, Space } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import {
  NOTIFICATION_ACTIONS,
  NOTIFICATION_COLORS,
  NOTIFICATION_COMMENTS,
  NOTIFICATION_TYPES,
} from '../../../../common/constants/enum/notification.enum';
import useSocketConnect from '../../../../common/hooks/useSocketConnect';
import useAddNewNotification from '../../../auth/hooks/useAddNewNotification';
import { BlackBtn, YellowBtn } from '../../../../common/components';
import { socket } from '../../../../common/utils/socket';
import {
  studyParticipatePop_back,
  studyParticipatePop_btn,
  studyParticipatePop_container,
  studyParticipatePop_info,
  studyParticipatePop_textarea,
  studyParticipatePop_title,
  studyParticipatePop_wrap,
} from './StudyParticipatePop.style';
import { useProfileQuery } from '../../../auth/hooks/queries/useQueries';
import { useStudyDetail } from '../../hooks/queries/useQueries';

type popOpenType = {
  setIsOpen?: (isOpen: React.SetStateAction<boolean>) => void;
  studyIdAsNumber?: number;
  setShowPopup: (isOpen: React.SetStateAction<boolean>) => void;
};

const StudyParticipatePop = ({
  setIsOpen,
  studyIdAsNumber,
  setShowPopup,
}: popOpenType) => {
  useSocketConnect(); // FIXME: 수정 필요할 수도 있음
  useAddNewNotification();

  const { data: userData } = useProfileQuery();
  // console.log('🦄  userData:', userData);
  const { data: studyData } = useStudyDetail(studyIdAsNumber);
  // console.log('🦄  studyData:', studyData);
  if (!studyData) return;
  const { owner, attendantsLimit, name } = studyData;

  // 스터디 신청칸 (임시 생성)
  const onSubmitStudyRequest = (contents: Contents) => {
    const payload = {
      type: NOTIFICATION_TYPES.STUDY,
      action: NOTIFICATION_ACTIONS.STUDY_REQUEST,
      comment: NOTIFICATION_COMMENTS.STUDY_REQUEST,
      contents,
      fromUserId: userData?.id, // 신청자
      toUserId: owner.id, // 스터디장
      studyName: name,
      studyId: studyIdAsNumber,
      time: new Date(),
      status: false,
      color: NOTIFICATION_COLORS.STUDY_REQUEST,
    };
    socket.emit('studyAttendRequest', payload);
    if (setIsOpen) setIsOpen((prev) => !prev);
    setShowPopup(true);
  };

  return (
    <>
      <div style={studyParticipatePop_back}></div>
      <div style={studyParticipatePop_container}>
        <h3 style={studyParticipatePop_title}>스터디 신청서 작성</h3>
        <div style={studyParticipatePop_info}>
          <p>스터디 명 : {name}</p>
          <p>인원 : {attendantsLimit}</p>
        </div>
        <Form onFinish={onSubmitStudyRequest} layout="vertical">
          <div style={studyParticipatePop_wrap}>
            <div>
              <Form.Item
                name={NOTIFICATION_ACTIONS.STUDY_REQUEST}
                rules={[
                  {
                    required: true,
                    message: '빈값으로는 제출할 수 없습니다.',
                  },
                ]}
              >
                <TextArea
                  showCount
                  maxLength={100}
                  styles={{
                    textarea: {
                      backgroundColor: '#222121',
                      color: '#FFFFFF',
                      fontSize: '14px',
                      padding: '15px',
                    },
                    count: {
                      fontSize: '14px',
                      color: '#ffffff',
                    },
                  }}
                  style={studyParticipatePop_textarea}
                />
              </Form.Item>
            </div>
            <Space>
              <BlackBtn
                setIsOpen={setIsOpen}
                buttonStyle={studyParticipatePop_btn}
              >
                닫기
              </BlackBtn>
              <YellowBtn
                htmlType="submit"
                buttonStyle={studyParticipatePop_btn}
              >
                참여요청
              </YellowBtn>
            </Space>
          </div>
        </Form>
      </div>
    </>
  );
};

export default StudyParticipatePop;
