import { ChangeEvent, RefObject, memo } from 'react';
import EmailVerifyInput from './EmailVerifyInput';

type InputRefs = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  emailVerifyInputInfos: {
    prevInputRef: RefObject<HTMLInputElement> | null;
    currentInputRef: RefObject<HTMLInputElement> | null;
    nextInputRef: RefObject<HTMLInputElement> | null;
  }[];
};

const EmailVerifyInputs = ({ emailVerifyInputInfos, onChange }: InputRefs) => {
  return (
    <>
      {emailVerifyInputInfos.map((emailVerifyInputInfo, idx) => (
        <EmailVerifyInput
          key={idx}
          onChange={onChange}
          currentInputRef={emailVerifyInputInfo.currentInputRef}
          emailVerifyInputInfo={emailVerifyInputInfo}
        />
      ))}
    </>
  );
};

const MemoedEmailVerifyInputs = memo(EmailVerifyInputs);

export default MemoedEmailVerifyInputs;
