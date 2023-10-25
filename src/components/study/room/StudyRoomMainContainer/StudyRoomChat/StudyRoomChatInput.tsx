import { SendOutlined } from '@ant-design/icons';
import { Input } from 'antd';

const StudyRoomChatInput = ({ inputRef }: any) => {
  return (
    // TODO: 버튼 클릭시 전송되도록
    <Input
      ref={inputRef}
      placeholder="채팅방에 메시지 보내기"
      suffix={<SendOutlined />}
      style={{ height: '40px' }}
    />
  );
};

export default StudyRoomChatInput;
