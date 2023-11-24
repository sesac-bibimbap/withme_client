import { Dispatch } from 'react';
import { retrySendEmail } from '../api';

const useRetryEmail = ({
  setNavigatedEmail,
  setRetry,
}: {
  setNavigatedEmail: Dispatch<React.SetStateAction<string>>;
  setRetry: Dispatch<React.SetStateAction<boolean>>;
}) => {
  const onClickRetrySendEmail = async ({ email }: EmailData) => {
    console.log('✔️  email:', email);
    try {
      await retrySendEmail({ email });
      setNavigatedEmail(email);
      setRetry(true);
      alert('이메일이 재전송 되었습니다.');
    } catch (err) {
      console.log(err);
    }
  };

  return { onClickRetrySendEmail };
};

export default useRetryEmail;
