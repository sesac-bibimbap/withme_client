import { useRef, useEffect } from 'react';

const useVerifyInputRef = () => {
  const inputRef1 = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);
  const inputRef3 = useRef<HTMLInputElement>(null);
  const inputRef4 = useRef<HTMLInputElement>(null);
  const inputRef5 = useRef<HTMLInputElement>(null);
  const inputRef6 = useRef<HTMLInputElement>(null);

  const inputRefs = [
    inputRef1,
    inputRef2,
    inputRef3,
    inputRef4,
    inputRef5,
    inputRef6,
  ];

  const emailVerifyInput: VerifyInputType = (count: number) => {
    const emailVerifyInputInfos = [];
    for (let i = 1; i <= count; i++) {
      emailVerifyInputInfos.push({
        prevInputRef: i - 2 < 0 ? null : inputRefs[i - 2],
        currentInputRef: inputRefs[i - 1],
        nextInputRef: i >= count ? null : inputRefs[i],
      });
    }
    return emailVerifyInputInfos;
  };

  useEffect(() => {
    if (inputRef1.current) inputRef1.current.focus();
  }, []);

  return { emailVerifyInput };
};

export default useVerifyInputRef;
