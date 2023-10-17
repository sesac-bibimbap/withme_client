import { ChangeEvent, KeyboardEvent, RefObject } from 'react';
import { emailVerify_input } from './EmailVerifyInputs.style';

const EmailVerifyInput = ({
  currentInputRef,
  emailVerifyInputInfo,
  onChange,
}: {
  currentInputRef: RefObject<HTMLInputElement> | null;
  emailVerifyInputInfo: {
    prevInputRef: RefObject<HTMLInputElement> | null;
    nextInputRef: RefObject<HTMLInputElement> | null;
  };
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  const { prevInputRef, nextInputRef } = emailVerifyInputInfo;

  const handleInput = () => {
    if (currentInputRef?.current?.value.length === 1 && nextInputRef?.current) {
      nextInputRef.current.focus();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && nextInputRef?.current === null) {
      prevInputRef?.current?.focus();
    }
    if (e.key === 'Backspace' && currentInputRef?.current?.value.length === 0) {
      prevInputRef?.current?.focus();
    }
  };

  return (
    <input
      onChange={onChange}
      ref={currentInputRef}
      maxLength={1}
      min={1}
      max={9}
      onInput={handleInput}
      onKeyDown={handleKeyDown}
      style={emailVerify_input(currentInputRef?.current?.value.length === 0)}
    />
  );
};

export default EmailVerifyInput;
