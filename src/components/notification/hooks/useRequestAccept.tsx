import { socket } from '../../../common/utils/socket';
import {
  NOTIFICATION_ACTIONS,
  NOTIFICATION_COLORS,
  NOTIFICATION_COMMENTS,
  NOTIFICATION_TYPES,
} from '../../../common/constants/enum/notification.enum';
import { acceptAttend } from '../api';
import { STUDY_ACCEPT_MESSAGE } from '../../../common/constants/study';

const useRequestAccept = (requestData: RequestData) => {
  const onClickAccept = async () => {
    const { fromUser, toUserId, studyId, studyName } = requestData;
    try {
      acceptAttend(requestData);

      const requestAcceptPayload = {
        type: NOTIFICATION_TYPES.STUDY,
        action: NOTIFICATION_ACTIONS.STUDY_ACCEPT,
        comment: NOTIFICATION_COMMENTS.STUDY_ACCEPT,
        contents: STUDY_ACCEPT_MESSAGE,
        toUserId: fromUser.id,
        fromUserId: toUserId,
        studyName,
        studyId,
        time: new Date(),
        status: false,
        color: NOTIFICATION_COLORS.STUDY_ACCEPT,
      };

      socket.emit('studyRequestAccept', requestAcceptPayload);
    } catch (err) {
      console.log(err);
    }
  };

  return { onClickAccept };
};

export default useRequestAccept;
