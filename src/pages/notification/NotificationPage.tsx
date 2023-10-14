import Notifications from '../../components/notification/Notifications/Notifications';
import { socket } from '../../common/utils/socket';
import { Form } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import {
  NOTIFICATION_ACTIONS,
  NOTIFICATION_COLORS,
  NOTIFICATION_COMMENTS,
  NOTIFICATION_TYPES,
} from '../../common/constants/enum/notification.enum';
import useSocketConnect from '../../common/hooks/useSocketConnect';
import useAddNewNotification from '../../components/auth/hooks/useAddNewNotification';
import { YellowBtn } from '../../common/components';

const NotificationPage = () => {
  useSocketConnect(); // FIXME: 수정 필요할 수도 있음
  useAddNewNotification();

  // 스터디 신청칸 (임시 생성)
  const onSubmitStudyRequest = (contents: Contents) => {
    const payload = {
      type: NOTIFICATION_TYPES.STUDY,
      action: NOTIFICATION_ACTIONS.STUDY_REQUEST,
      comment: NOTIFICATION_COMMENTS.STUDY_REQUEST,
      contents,
      fromUserId: '7c4e25dc-d9ab-41ca-abe5-a39adea43cce', // abc1234
      toUserId: '766073af-2225-48cf-8f23-6afc331082dd', // ttt123
      studyName: '너만오면JS',
      studyId: '4',
      time: new Date(),
      status: false,
      color: NOTIFICATION_COLORS.STUDY_REQUEST,
    };
    socket.emit('studyAttendRequest', payload);
  };

  return (
    <>
      {/* FIXME: 스터디 신청칸 (임시 생성) 위치이동 필요 */}
      <Form onFinish={onSubmitStudyRequest} layout="vertical">
        <Form.Item
          label="가능한 요일과 시간, 스터디에 임하는 각오 적어주세요"
          name={NOTIFICATION_ACTIONS.STUDY_REQUEST}
          rules={[
            { required: true, message: '빈값으로는 제출할 수 없습니다.' },
          ]}
        >
          <TextArea
            showCount
            maxLength={100}
            styles={{
              textarea: {
                backgroundColor: '#222121',
                color: '#ffffff',
                fontSize: '14px',
                padding: '15px',
              },
              count: {
                fontSize: '14px',
                color: '#ffffff',
              },
            }}
            style={{
              height: 120,
              resize: 'none',
            }}
          />
        </Form.Item>
        <YellowBtn htmlType="submit" buttonText="스터디 참여요청" />
      </Form>
      {/* 스터디 신청칸 (임시 생성) */}

      <Notifications />
    </>
  );
};

export default NotificationPage;
