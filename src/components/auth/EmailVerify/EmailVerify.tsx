import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../../../common/constants';
import useVerifyToken from '../hooks/useVerifyToken';
import useRetryEmail from '../hooks/useRetryEmail';
import { EMAIL_TOKEN_COMMENT } from '../../../common/constants/auth';
import useVerifyInputOnChange from '../hooks/useVerifyInputOnChange';
import {
  CharcoalBtn,
  MemoedEmailVerifyInputs,
  Popup,
  YellowBtn,
} from '../../../common/components';
import {
  emailVerify_comment,
  emailVerify_container,
  emailVerify_inputs,
  emailVerify_inputs_check,
  emailVerify_retry_underline,
  emailVerify_showPopup,
  emailVerify_title,
  emailVerify_wrapper,
} from './EmailVerify.style';
import useVerifyInputRef from '../hooks/useVerifyInputRef';

const EmailVerify = () => {
  const location = useLocation();
  const navigatedData = location.state.data;
  const [navigatedEmail, setNavigatedEmail] = useState(navigatedData['email']);
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

  return (
    <>
      {showPopup && <div style={emailVerify_showPopup}></div>}
      <div style={emailVerify_container}>
        <div style={emailVerify_wrapper}>
          <div style={emailVerify_title}>비밀번호 재설정</div>
          <div style={emailVerify_comment}>
            입력하신{' '}
            <span style={{ textDecoration: 'underline' }}>
              {navigatedEmail}
            </span>
            으로 인증번호가 {retry && '재'}전송되었습니다.
          </div>
          <div style={emailVerify_inputs_check}>{checkEmailToken}</div>
          <div style={emailVerify_inputs}>
            <MemoedEmailVerifyInputs
              onChange={onChangeInputValue}
              emailVerifyInputInfos={emailVerifyInput(6)}
            />
          </div>
          <div style={emailVerify_comment}>{EMAIL_TOKEN_COMMENT}</div>
          <div style={emailVerify_retry_underline}>
            <Link
              to={ROUTES.RESET_PASSWORD.PATH}
              style={emailVerify_retry_underline}
            >
              다른 이메일로 인증
            </Link>
          </div>
          <div>
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
        </div>
      </div>
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

export default EmailVerify;
