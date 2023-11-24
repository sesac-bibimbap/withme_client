import {
  CharcoalBtn,
  MemoedEmailVerifyInputs,
  YellowBtn,
} from '../../../../../common/components';
import { emailVerify_inputs_check } from '../../../../auth/EmailVerify/EmailVerify.style';
import {
  EmailValidationCheckBtn_wrapper,
  emailValidationCheck_comment,
  emailValidationCheck_container,
  emailValidationCheck_inputs,
  emailValidationCheck_retry_underline,
  emailValidationCheck_title,
} from '../emailValidation.style';

type EmailValidationCheckType = {
  navigatedEmail: any;
  retry: any;
  checkEmailToken: any;
  onChangeInputValue: any;
  emailVerifyInput: any;
  showPopup: any;
  onClickRetrySendEmail: any;
  onClickSendEmailToken: any;
  emailTokenData: any;
  setAnotherEmailValidate: any;
};

const EmailValidationCheck = ({
  navigatedEmail,
  retry,
  checkEmailToken,
  onChangeInputValue,
  emailVerifyInput,
  showPopup,
  onClickRetrySendEmail,
  onClickSendEmailToken,
  emailTokenData,
  setAnotherEmailValidate,
}: EmailValidationCheckType) => {
  const COMMENT = `
  인증번호 유효시간은 30분이므로, 이 시간 전에 인증을 완료해주세요.
  이후 인증을 시도할 경우에는 이메일 재전송버튼을 눌러주세요.
  `;

  return (
    <>
      <div style={emailValidationCheck_container}>
        <div style={emailValidationCheck_title}>인증번호 입력</div>
        <div style={emailValidationCheck_comment}>
          로그인하신{' '}
          <span style={{ textDecoration: 'underline' }}>{navigatedEmail}</span>{' '}
          으로 인증번호가 {retry && '재'}전송되었습니다.
        </div>

        <div style={emailVerify_inputs_check}>{checkEmailToken}</div>
        <div style={emailValidationCheck_inputs}>
          <MemoedEmailVerifyInputs
            onChange={onChangeInputValue}
            emailVerifyInputInfos={emailVerifyInput(6)}
          />
        </div>

        <div style={emailValidationCheck_comment}>{COMMENT}</div>
        <div style={emailValidationCheck_retry_underline}>
          <button
            style={emailValidationCheck_retry_underline}
            onClick={() => setAnotherEmailValidate(true)}
          >
            다른 이메일로 인증
          </button>
        </div>
      </div>
      <div style={EmailValidationCheckBtn_wrapper}>
        <CharcoalBtn
          disabled={showPopup}
          onClick={() => onClickRetrySendEmail({ email: navigatedEmail })}
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
    </>
  );
};

export default EmailValidationCheck;
