import { Checkbox, Form, Space } from 'antd';
import {
  login_wrapper,
  login_bg,
  login_btn,
  login_text_ment,
  login_text_title,
  login_form_base,
  login_checkbox_ment,
  login_lost,
  login_text_underline,
  login_checkbox_box,
  login_text_center,
} from './LoginForm.style.ts';
import { useMutation } from '@tanstack/react-query';
import useLogin from '../hooks/useLogin.ts';
import {
  EmailInput,
  PasswdInput,
  Popup,
  YellowBtn,
} from '../../../common/components';
import ROUTES from '../../../common/constants/routes.ts';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const { handleLoginSubmit, showPopup, closePopup, popupTitle, popupText } =
    useLogin();
  const { mutate } = useMutation(handleLoginSubmit);

  return (
    <div style={login_wrapper}>
      <div style={login_bg}>
        <p style={login_text_ment}>이미 회원이신가요?</p>
        <p style={login_text_title}>로그인</p>
        <Form
          style={login_form_base}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={(data) => mutate(data)}
          autoComplete="off"
        >
          <EmailInput />
          <PasswdInput inputname="password" />

          <Form.Item<AuthType>
            name="remember"
            valuePropName="checked"
            style={login_checkbox_box}
          >
            <Checkbox style={login_checkbox_ment}>
              로그인 상태 유지하기
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <YellowBtn htmlType="submit" buttonStyle={login_btn}>
              로그인
            </YellowBtn>
          </Form.Item>
        </Form>
        <Space size={'large'}>
          <Link to={import.meta.env.VITE_NAVER_LOGIN_URL}>
            <img src={'/socialLogin/naver.svg'} alt="네이버" />
          </Link>
          <Link to={import.meta.env.VITE_KAKAO_LOGIN_URL}>
            <img src={'/socialLogin/kakao.svg'} alt="카카오" />
          </Link>
          <Link to={import.meta.env.VITE_GOOGLE_LOGIN_URL}>
            <img src={'/socialLogin/google.svg'} alt="구글" />
          </Link>
          <Link to={import.meta.env.VITE_GITHUB_LOGIN_URL}>
            <img src={'/socialLogin/github.svg'} alt="깃허브" />
          </Link>
        </Space>
        <Space style={login_lost}>
          <div style={login_text_center}>
            <p style={login_text_ment}>아직 회원이 아니신가요?</p>
            <Link to={ROUTES.REGISTER.PATH} style={login_text_underline}>
              회원가입
            </Link>
          </div>
          <div style={login_text_center}>
            <p style={login_text_ment}>비밀번호를 잊으셨나요?</p>
            <Link to={ROUTES.RESET_PASSWORD.PATH} style={login_text_underline}>
              비밀번호 찾기
            </Link>
          </div>
        </Space>
      </div>
      {showPopup && (
        <Popup
          popupTitle={popupTitle}
          popupText={popupText}
          onClose={closePopup}
        />
      )}
    </div>
  );
};

export default LoginForm;
