import { useState } from 'react';
import SelectRejectReason from './SelectRejectReason';
import useRequestAccept from './hooks/useRequestAccept';
import useRequestReject from './hooks/userRequestReject';
import {
  DarkGrayBtn,
  DeepDarkGrayBtn,
  YellowBtn,
} from '../../common/components';
import {
  notification_common,
  notification_contents_common,
  notification_request_common_btn_container,
  notification_request_container,
  notification_request_content,
  notification_request_detail_container,
  notification_request_detail_title,
  notification_request_title,
} from './Notifications.style';

const NotificationRequest = ({ item }: NotificationItemProps) => {
  const { contents, toUserId, fromUser, studyId, studyName } = item;
  const [[, value]] = Object.entries(contents);
  const [rejectTab, setRejectTab] = useState(false);
  const [rejectReason, setRejectReason] = useState<string>('');

  const requestData = { fromUser, toUserId, studyId, studyName };
  const rejectRequestData = { ...requestData, rejectReason };
  const { isAccepted, onClickAccept } = useRequestAccept(requestData);
  const { onClickRejectSend } = useRequestReject(rejectRequestData);

  const onClickReject = () => setRejectTab(true);
  const onClickCancelReject = () => setRejectTab(false);
  const selectRejectReasonChange = ({ value }: RejectReason) =>
    setRejectReason(value);

  return (
    <>
      <div
        style={{
          ...notification_common,
          ...notification_contents_common,
        }}
      >
        <div style={notification_request_container}>
          <div style={notification_request_title}>신청서내용</div>
          <div style={notification_request_content}>{value}</div>
        </div>
        <div style={notification_request_container}>
          <div style={notification_request_title}>신청자정보</div>
          <div style={notification_request_content}>
            <div style={notification_request_detail_container}>
              <div style={notification_request_detail_title}>닉네임</div>
              <div>{fromUser.profile.nickname ?? '신청자'}</div>
            </div>
            <div style={notification_request_detail_container}>
              <div style={notification_request_detail_title}>개발경력</div>
              <div>{fromUser.devCareer || '미등록'}</div>
            </div>
            <div style={notification_request_detail_container}>
              <div style={notification_request_detail_title}>기술스택</div>
              <div></div>
            </div>
          </div>
        </div>
      </div>

      <div style={notification_request_common_btn_container}>
        {isAccepted ? (
          <DeepDarkGrayBtn buttonText="완료된 요청" />
        ) : (
          <>
            <DarkGrayBtn
              onClick={rejectTab ? onClickCancelReject : onClickReject}
            >
              {rejectTab ? '취소' : '거절'}
            </DarkGrayBtn>
            <YellowBtn
              buttonText={rejectTab ? '보내기' : '수락'}
              onClick={rejectTab ? onClickRejectSend : onClickAccept}
            />
            {rejectTab && (
              <SelectRejectReason
                selectRejectReasonChange={selectRejectReasonChange}
              />
            )}
          </>
        )}
      </div>
    </>
  );
};

export default NotificationRequest;
