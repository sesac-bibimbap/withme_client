import { MailOutlined } from '@ant-design/icons';
import { Form, Input } from 'antd';
import { email_input } from './EmailInput.style';

type EmailInputProps = {
  onChange?: () => void;
};

const EmailInput = ({ onChange }: EmailInputProps) => {
  return (
    <>
      <Form.Item<AuthType>
        name="email"
        rules={[
          { required: true, message: '이메일을 입력해주세요' },
          {
            type: 'email',
            message: '이메일 형식이 올바르지 않습니다.',
          },
        ]}
      >
        <Input
          onChange={onChange}
          style={email_input}
          prefix={<MailOutlined style={{ color: '#9F9C9C' }} />}
          placeholder="이메일을 입력해주세요"
        />
      </Form.Item>
    </>
  );
};

export default EmailInput;
