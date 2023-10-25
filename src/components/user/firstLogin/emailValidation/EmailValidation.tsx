import { Suspense, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import {
  CharcoalBtn,
  MemoedEmailVerifyInputs,
  Popup,
  YellowBtn,
} from '../../../../common/components';
import useVerifyInputRef from '../../../auth/hooks/useVerifyInputRef';
import useVerifyToken from '../../../auth/hooks/useVerifyToken';
import useVerifyInputOnChange from '../../../auth/hooks/useVerifyInputOnChange';
import useRetryEmail from '../../../auth/hooks/useRetryEmail';
import {
  emailVerify_inputs_check,
  // emailVerify_retry_underline,
  emailVerify_showPopup,
} from '../../../auth/EmailVerify/EmailVerify.style';
import {
  EmailValidationBtn_wrapper,
  emailValidation_comment,
  emailValidation_container,
  emailValidation_inputs,
  // emailValidation_otherEmail,
  emailValidation_title,
} from './emailValidation.style';
import Spinner from '../../../../common/components/loading/Spinner';
// import OtherEmail from '../otherEmail/OtherEmail';

const EmailValidation = () => {
  const cache = useQueryClient();
  const user = cache.getQueryData<AuthType>(['login-user']);

  // const location = useLocation();
  const navigatedData: navigatedDataType = {
    statusCode: 200,
    email: user?.email as string,
  };
  const [navigatedEmail, setNavigatedEmail] = useState(user?.email as string);
  const [checkEmailToken, setCheckEmailToken] = useState('');
  const [retry, setRetry] = useState(false);

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
  } = useVerifyToken({ setCheckEmailToken });

  const { onClickRetrySendEmail } = useRetryEmail({
    setNavigatedEmail,
    setRetry,
  });

  const { emailVerifyInput } = useVerifyInputRef();

  // const { isSuccess: verifySuccess, mutate: sendCode } = useVerifiedEmail(
  //   user?.email,
  //   {
  //     onSuccess: () => {
  //       setEmailError('');
  //     },
  //     onError: () => {
  //       setEmailError('코드 전송이 실패했습니다. 다시 한번 확인해주세요.');
  //     },
  //   },
  // );

  //프론트에서 코드요청을 해야하는 것인지 회원가입과 동시에 firstLogin으로 페이지 넘겨질 때 백쪽에서
  //자동으로 메일을 보내주는지 질문

  // const checkCodeHandler = () => {
  //   sendCode();
  // };

  return (
    <>
      <Suspense fallback={<Spinner />}>
        {showPopup && <div style={emailVerify_showPopup}></div>}
        <div style={emailValidation_container}>
          <div style={emailValidation_title}>인증번호 입력</div>
          {/* <div style={emailVerify_comment}>
        로그인하신 {user?.email}로 인증번호를 전송하였습니다.
      </div> */}
          <div style={emailValidation_comment}>
            로그인하신{' '}
            <span style={{ textDecoration: 'underline' }}>
              {navigatedEmail}
            </span>{' '}
            으로 인증번호가 {retry && '재'}전송되었습니다.
          </div>

          <div style={emailVerify_inputs_check}>{checkEmailToken}</div>
          <div style={emailValidation_inputs}>
            <MemoedEmailVerifyInputs
              onChange={onChangeInputValue}
              emailVerifyInputInfos={emailVerifyInput(6)}
            />
          </div>

          <div style={emailValidation_comment}>
            인증번호 유효시간은 30분이므로, 이 시간 전에 인증을 완료해주세요.
            이후 인증을 시도할 경우에는 이메일 재전송버튼을 눌러주세요.
          </div>
        </div>
        <div style={EmailValidationBtn_wrapper}>
          <CharcoalBtn
            disabled={showPopup}
            onClick={() => onClickRetrySendEmail(navigatedData)}
            buttonStyle={{
              marginRight: '5px',
              fontSize: '14px',
            }}
          >
            이메일 재전송
          </CharcoalBtn>
          <YellowBtn
            disabled={showPopup}
            onClick={() => onClickSendEmailToken(emailTokenData)}
            htmlType="submit"
            buttonStyle={{
              marginLeft: '5px',
              color: '#222121',
              fontWeight: 'bold',
            }}
          >
            확인
          </YellowBtn>
        </div>
      </Suspense>
      {/* <div style={emailValidation_otherEmail}>
        <button style={emailVerify_retry_underline}>
          다른 이메일로 인증하기
        </button>
      </div> */}

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
