import { useState } from 'react';
import SelectRejectReason from './SelectRejectReason';
import useRequestAccept from '../../hooks/useRequestAccept';
import useRequestReject from '../../hooks/userRequestReject';
import {
  DarkGrayBtn,
  DeepDarkGrayBtn,
  YellowBtn,
} from '../../../../common/components';
import {
  notification_common,
  notification_contents_common,
  notification_request_common_btn_container,
  notification_request_container,
  notification_request_content,
  notification_request_detail_container,
  notification_request_detail_title,
  notification_request_title,
} from '../Notifications.style';

const NotificationRequest = ({ item }: NotificationItemProps) => {
  const { contents, toUserId, fromUser, studyId, studyName } = item;
  const [[, value]] = Object.entries(contents);
  const [rejectTab, setRejectTab] = useState(false);
  const [rejectReason, setRejectReason] = useState<string>('');
  const [isChecked, setIsChecked] = useState<RequestData | boolean>();
  console.log('✔️  setIsChecked:', setIsChecked);

  const requestData = { fromUser, toUserId, studyId, studyName };
  const rejectRequestData = { ...requestData, rejectReason };
  const { onClickAccept } = useRequestAccept(requestData);
  const { onClickRejectSend } = useRequestReject(rejectRequestData);

  const onClickReject = () => setRejectTab(true);
  const onClickCancelReject = () => setRejectTab(false);
  const selectRejectReasonChange = ({ value }: RejectReason) =>
    setRejectReason(value);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const studyCheck = await acceptAttend(requestData);
  //       setIsChecked(studyCheck);
  //     } catch (err) {
  //       if (err instanceof AxiosError) {
  //         if (err.status === 422) setIsChecked(false);
  //       }
  //     }
  //   })();
  // }, []);

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
              <div>{fromUser.devCareer?.category || '미등록'}</div>
            </div>
            <div style={notification_request_detail_container}>
              <div style={notification_request_detail_title}>기술스택</div>
              <div></div>
            </div>
          </div>
        </div>
      </div>

      <div style={notification_request_common_btn_container}>
        {isChecked ? (
          <DeepDarkGrayBtn buttonStyle={{ cursor: 'default' }}>
            완료된 요청
          </DeepDarkGrayBtn>
        ) : (
          <>
            <DarkGrayBtn
              onClick={rejectTab ? onClickCancelReject : onClickReject}
            >
              {rejectTab ? '취소' : '거절'}
            </DarkGrayBtn>
            <YellowBtn onClick={rejectTab ? onClickRejectSend : onClickAccept}>
              {rejectTab ? '보내기' : '수락'}
            </YellowBtn>
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
