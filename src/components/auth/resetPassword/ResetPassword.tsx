import { useState } from 'react';
import { Form } from 'antd';
import { CharcoalBtn, EmailInput, YellowBtn } from '../../../common/components';
import { API } from '../../../common/utils/axiosInstance';
import {
  resetPassword_btn_wrapper,
  resetPassword_comment,
  resetPassword_comment_error,
  resetPassword_comment_wrapper,
  resetPassword_container,
  resetPassword_title,
  resetPassword_wrapper,
} from './ResetPassword.style';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../common/constants';

const ResetPassword = () => {
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const onSubmitCheckAndSendEmail = async (email: { email: string }) => {
    try {
      const { data } = await API({
        method: 'post',
        url: '/email',
        data: email,
      });
      navigate(ROUTES.RESET_PASSWORD_CHECK.PATH, { state: { data } });
    } catch (err) {
      if (err instanceof AxiosError) setErrorMsg(err.response?.data.message);
    }
  };

  return (
    <div style={resetPassword_container}>
      <div style={resetPassword_wrapper}>
        <div style={resetPassword_title}>비밀번호 재설정</div>
        <div style={resetPassword_comment}>
          임시 비밀번호를 받을 메일을 입력해주세요.
        </div>
        <Form onFinish={onSubmitCheckAndSendEmail}>
          <EmailInput />
          <div style={resetPassword_comment_wrapper}>
            <div style={resetPassword_comment}>
              {`메일로 발송된 임시비밀번호로 로그인 후 
              프로필 수정 페이지에서 새로운 비밀번호를 다시 설정해주세요.`}
            </div>
            <div style={resetPassword_comment_error}>{errorMsg}</div>
          </div>
          <div style={resetPassword_btn_wrapper}>
            <CharcoalBtn path={'/login'} buttonStyle={{ marginRight: '10px' }}>
              돌아가기
            </CharcoalBtn>
            <YellowBtn
              htmlType="submit"
              buttonStyle={{
                marginLeft: '10px',
                color: '#222121',
                fontWeight: 'bold',
              }}
            >
              확인
            </YellowBtn>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ResetPassword;
