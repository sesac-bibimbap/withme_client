import { Form } from 'antd';
import { CharcoalBtn, EmailInput, YellowBtn } from '../../../common/components';
import {
  resetPassword_CharcoalBtn,
  resetPassword_btn_wrapper,
  resetPassword_comment,
  resetPassword_comment_error,
  resetPassword_comment_wrapper,
  resetPassword_container,
  resetPassword_title,
  resetPassword_wrapper,
  resetPassword_yellowBtn,
} from './ResetPassword.style';
import useCheckAndSendEmail from '../hooks/useCheckAndSendEmail';
import { RESET_PASSWORD_COMMENT } from '../../../common/constants/auth';

const ResetPassword = () => {
  const { errorMsg, onSubmitCheckAndSendEmail, onChangeEmailInput } =
    useCheckAndSendEmail();

  return (
    <div style={resetPassword_container}>
      <div style={resetPassword_wrapper}>
        <div style={resetPassword_title}>비밀번호 재설정</div>
        <div style={resetPassword_comment}>
          임시 비밀번호를 받을 메일을 입력해주세요.
        </div>
        <Form onFinish={onSubmitCheckAndSendEmail}>
          <EmailInput onChange={onChangeEmailInput} />
          <div style={resetPassword_comment_wrapper}>
            <div style={resetPassword_comment}>{RESET_PASSWORD_COMMENT}</div>
            <div style={resetPassword_comment_error}>{errorMsg}</div>
          </div>
          <div style={resetPassword_btn_wrapper}>
            <CharcoalBtn
              path={'/login'}
              buttonStyle={resetPassword_CharcoalBtn}
            >
              돌아가기
            </CharcoalBtn>
            <YellowBtn htmlType="submit" buttonStyle={resetPassword_yellowBtn}>
              확인
            </YellowBtn>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ResetPassword;
