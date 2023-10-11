import { Button, Checkbox, Form, Space } from 'antd';
import { useMutation } from '@tanstack/react-query';
import {
  backgroundForm,
  wrapper,
  register_text_ment,
  register_text_title,
  register_form_base,
  register_text_reg,
  button_back,
  button_signup,
  register_checkbox_ment,
  register_checkbox_box,
  register_button_bundle,
  register_input_passwd,
} from './RegisterForm.style';
import { AuthType } from '../../../types';
import useRegister from '../hooks/useRegister';
import { EmailInput, PasswdInput, YellowBtn } from '../../../common/components';

const RegisterForm = () => {
  const { handleRegisterSubmit } = useRegister();

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
              비밀번호는 하나 이상의 특수문자 포함, 8~20자 이내여야 합니다.
            </p>

            <Form.Item<AuthType>
              name="personalInfo"
              valuePropName="checked"
              style={register_checkbox_box}
            >
              <Checkbox style={register_checkbox_ment}>
                개인정보 수집 및 이용에 동의합니다.
              </Checkbox>
            </Form.Item>
            <Form.Item>
              <Space wrap style={register_button_bundle}>
                <Button type="primary" style={button_back}>
                  돌아가기
                </Button>
                <YellowBtn
                  htmlType="submit"
                  buttonText="로그인"
                  buttonStyle={button_signup}
                  // disabled={isLoading}
                />
              </Space>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
