import { MailOutlined } from '@ant-design/icons';
import { Form, Input } from 'antd';
import { email_input } from './EmailInput.style';
import { AuthType } from '../../../types';

const EmailInput = () => {
  return (
    <>
      <Form.Item<AuthType>
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input
          style={email_input}
          prefix={<MailOutlined style={{ color: '#9F9C9C' }} />}
          placeholder="이메일을 입력해주세요"
        />
      </Form.Item>
    </>
  );
};

export default EmailInput;
