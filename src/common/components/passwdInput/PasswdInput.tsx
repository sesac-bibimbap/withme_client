import { Form, Input } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import { passwd_input } from './PasswdInput.style';
import { AuthType } from '../../../types';
import { CSSProperties } from 'react';

type passwdInputType = {
  inputStyle?: CSSProperties;
  inputname?: keyof AuthType;
};

const PasswdInput = ({ inputStyle, inputname }: passwdInputType) => {
  const passwdInputCss = {
    ...passwd_input,
    ...inputStyle,
  };
  return (
    <>
      <Form.Item<AuthType>
        name={inputname}
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password
          style={passwdInputCss}
          prefix={<LockOutlined style={{ color: '#9F9C9C' }} />}
          placeholder="비밀번호를 입력해주세요"
        />
      </Form.Item>
    </>
  );
};

export default PasswdInput;
