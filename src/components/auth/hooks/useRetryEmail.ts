import { Dispatch } from 'react';
import { emailCheck } from '../api';

const useRetryEmail = ({
  setNavigatedEmail,
  setRetry,
}: {
  setNavigatedEmail: Dispatch<React.SetStateAction<string>>;
  setRetry: Dispatch<React.SetStateAction<boolean>>;
}) => {
  const onClickRetrySendEmail = async (navigatedData: navigatedDataType) => {
    try {
      const data = await emailCheck(navigatedData);
      setNavigatedEmail(data['email']);
      setRetry(true);
    } catch (err) {
      console.log(err);
    }
  };

  return { onClickRetrySendEmail };
};

export default useRetryEmail;
