import { Suspense, useState } from 'react';
import { Popup } from '../../../../common/components';
import useVerifyInputRef from '../../../auth/hooks/useVerifyInputRef';
import useVerifyToken from '../../../auth/hooks/useVerifyToken';
import useVerifyInputOnChange from '../../../auth/hooks/useVerifyInputOnChange';
import useRetryEmail from '../../../auth/hooks/useRetryEmail';
import { emailVerify_showPopup } from '../../../auth/EmailVerify/EmailVerify.style';
import Spinner from '../../../../common/components/loading/Spinner';
import EmailValidationCheck from './emailValidationCheck/EmailValidationCheck';
import AnotherEmailValidate from './anotherEmailValidate/AnotherEmailValidate';

const EmailValidation = ({ setCurrent, user }: any) => {
  const [navigatedEmail, setNavigatedEmail] = useState(user?.email as string);
  const [retry, setRetry] = useState(false);
  const [checkEmailToken, setCheckEmailToken] = useState('');
  const [anotherEmailValidate, setAnotherEmailValidate] = useState(false);

  const { emailTokenData, onChangeInputValue } = useVerifyInputOnChange({
    navigatedEmail,
    setCheckEmailToken,
  });

  const {
    popupTitle,
    popupText,
    showPopup,
    onClickSendEmailToken,
    closePopup,
  } = useVerifyToken({ setCheckEmailToken, firstLogin: true, setCurrent });

  const { onClickRetrySendEmail } = useRetryEmail({
    setNavigatedEmail,
    setRetry,
  });

  const { emailVerifyInput } = useVerifyInputRef();

  return (
    <>
      <Suspense fallback={<Spinner />}>
        {showPopup && <div style={emailVerify_showPopup}></div>}
        {anotherEmailValidate ? (
          <AnotherEmailValidate
            setAnotherEmailValidate={setAnotherEmailValidate}
            setNavigatedEmail={setNavigatedEmail}
          />
        ) : (
          <EmailValidationCheck
            navigatedEmail={navigatedEmail}
            retry={retry}
            checkEmailToken={checkEmailToken}
            onChangeInputValue={onChangeInputValue}
            emailVerifyInput={emailVerifyInput}
            showPopup={showPopup}
            onClickRetrySendEmail={onClickRetrySendEmail}
            onClickSendEmailToken={onClickSendEmailToken}
            emailTokenData={emailTokenData}
            setAnotherEmailValidate={setAnotherEmailValidate}
          />
        )}
      </Suspense>

      {showPopup && (
        <Popup
          popupTitle={popupTitle}
          popupText={popupText}
          onClose={closePopup}
        />
      )}
    </>
  );
};

export default EmailValidation;
