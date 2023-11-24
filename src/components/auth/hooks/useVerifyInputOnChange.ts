import { ChangeEvent, Dispatch, useEffect, useState } from 'react';

const useVerifyInputOnChange = ({
  navigatedEmail,
  setCheckEmailToken,
}: {
  navigatedEmail: string;
  setCheckEmailToken: Dispatch<React.SetStateAction<string>>;
}) => {
  const [emailToken, setEmailToken] = useState<string[]>([]);
  const [emailTokenData, setEmailTokenData] = useState<EmailTokenData>({
    email: navigatedEmail,
    token: emailToken.join(''),
  });

  const onChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      setEmailToken((prev) => {
        prev.pop();
        setEmailTokenData((prev) => ({ ...prev, token: emailToken.join('') }));
        return prev;
      });
    } else {
      setEmailToken((prev) => [...prev, e.target.value]);
    }
    setCheckEmailToken('');
  };

  useEffect(() => {
    setEmailTokenData({ email: navigatedEmail, token: emailToken.join('') });
  }, [emailToken, navigatedEmail, setEmailToken]);

  return { emailTokenData, emailToken, onChangeInputValue };
};

export default useVerifyInputOnChange;
