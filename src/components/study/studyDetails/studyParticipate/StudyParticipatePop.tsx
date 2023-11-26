import { Form, Space } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import {
  NOTIFICATION_ACTIONS,
  NOTIFICATION_COLORS,
  NOTIFICATION_COMMENTS,
  NOTIFICATION_TYPES,
} from '../../../../common/constants/enum/notification.enum';
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
import { SetStateAction, useEffect, useState } from 'react';

type popOpenType = {
  setIsOpen?: (isOpen: SetStateAction<boolean>) => void;
  studyIdAsNumber?: number;
  setShowPopup: (isOpen: SetStateAction<boolean>) => void;
  setPopSuccessTitle?: (title: SetStateAction<string>) => void;
  setPopSuccessText?: (title: SetStateAction<string>) => void;
};

const StudyParticipatePop = ({
  setIsOpen,
  studyIdAsNumber,
  setShowPopup,
  setPopSuccessTitle,
  setPopSuccessText,
}: popOpenType) => {
  const { data: userData } = useProfileQuery();
  const { data: studyData } = useStudyDetail(studyIdAsNumber);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const errorMsgResponse = (err: { statusCode: number; message: string }) => {
      setError(err.message);
      alert(err.message);
    };
    socket.on('attend-duplicate', errorMsgResponse);
    return () => {
      socket.off('attend-duplicate');
    };
  }, []);

  if (!studyData) return;
  const { owner, attendantsLimit, name, recruit, participants } = studyData;

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
    if (error) {
      alert(error);
      return;
    }
    if (setIsOpen) setIsOpen((prev) => !prev);
    if (setPopSuccessTitle) setPopSuccessTitle(`스터디 신청이 완료되었습니다`);
    if (setPopSuccessText)
      setPopSuccessText(`스터디장의 검토 이후
  스터디 참여 여부는
  알림을 통해 전달됩니다.`);
    setShowPopup(true);
  };

  return (
    <>
      <div style={studyParticipatePop_back}></div>
      <div style={studyParticipatePop_container}>
        <h3 style={studyParticipatePop_title}>스터디 신청서 작성</h3>
        <div style={studyParticipatePop_info}>
          <p>스터디 명 : {name}</p>
          <p>
            인원 : {participants.length} / {attendantsLimit}
          </p>
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
                  placeholder={recruit.recruitPlaceholder}
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
