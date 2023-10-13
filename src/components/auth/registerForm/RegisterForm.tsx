import { Checkbox, Form, Space } from 'antd';
import { useMutation } from '@tanstack/react-query';
import {
  backgroundForm,
  wrapper,
  register_text_ment,
  register_text_title,
  register_form_base,
  register_text_reg,
  register_button_back,
  register_button_signup,
  register_checkbox_ment,
  register_checkbox_box,
  register_button_bundle,
  register_input_passwd,
} from './RegisterForm.style';
import useRegister from '../hooks/useRegister';
import {
  CharcoalBtn,
  EmailInput,
  PasswdInput,
  Popup,
  YellowBtn,
} from '../../../common/components';
import { ROUTES } from '../../../common/constants';

const RegisterForm = () => {
  const { handleRegisterSubmit, showPopup, closePopup, popupTitle, popupText } =
    useRegister();

  const { mutate } = useMutation(handleRegisterSubmit);

  return (
    <>
      <div style={wrapper}>
        <div style={backgroundForm}>
          <p style={register_text_ment}>
            스터디 관리 어플의 회원이 되어주세요!
          </p>
          <h1 style={register_text_title}>회원가입</h1>
          <Form
            name="basic"
            style={register_form_base}
            onFinish={(data) => {
              mutate(data);
            }}
            autoComplete="off"
          >
            <EmailInput />

            <p style={register_text_reg}>
              사용자 이메일은 반드시 @를 포함하여야 합니다.
            </p>
            <PasswdInput
              inputname="password"
              inputStyle={register_input_passwd}
            />
            <PasswdInput inputname="passwordCheck" />
            <p style={register_text_reg}>
              비밀번호는 영문과 특수문자만 가능하며, 8~30자 이내여야 합니다.
            </p>

            <Form.Item<AuthType>
              name="personalInfo"
              valuePropName="checked"
              style={register_checkbox_box}
              rules={[
                {
                  required: true,
                  message: '개인정보 수집에 동의해주세요',
                },
              ]}
            >
              <Checkbox style={register_checkbox_ment}>
                개인정보 수집 및 이용에 동의합니다.
              </Checkbox>
            </Form.Item>
            <Form.Item>
              <Space wrap style={register_button_bundle}>
                <CharcoalBtn
                  buttonText="돌아가기"
                  buttonStyle={register_button_back}
                  path={ROUTES.LOGIN.PATH}
                />
                <YellowBtn
                  htmlType="submit"
                  buttonText="회원가입"
                  buttonStyle={register_button_signup}
                  // disabled={isLoading}
                />
              </Space>
            </Form.Item>
          </Form>
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

export default RegisterForm;
