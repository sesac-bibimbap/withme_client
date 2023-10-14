import {
  NOTIFICATION_ACTIONS,
  NOTIFICATION_COLORS,
  NOTIFICATION_COMMENTS,
  NOTIFICATION_TYPES,
} from '../../../common/constants/enum/notification.enum';
import { socket } from '../../../common/utils/socket';

const useRequestReject = (rejectRequestData: RejectRequestData) => {
  const onClickRejectSend = () => {
    const { fromUser, toUserId, studyId, studyName, rejectReason } =
      rejectRequestData;

    const requestRejectPayload = {
      type: NOTIFICATION_TYPES.STUDY,
      action: NOTIFICATION_ACTIONS.STUDY_REJECT,
      comment: NOTIFICATION_COMMENTS.STUDY_REJECT,
      contents: { 거부사유: rejectReason },
      toUserId: fromUser.id,
      fromUserId: toUserId,
      studyName,
      studyId,
      time: new Date(),
      status: false,
      color: NOTIFICATION_COLORS.STUDY_REJECT,
    };

    socket.emit('studyRequestReject', requestRejectPayload);
  };
  return { onClickRejectSend };
};

export default useRequestReject;
