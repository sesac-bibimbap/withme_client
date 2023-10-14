import { Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import useFetchNotifications from '../hooks/useFetchNotifications';
import { notification_collapse } from './Notifications.style';

const Notifications = () => {
  const { getItems } = useFetchNotifications();

  return (
    <>
      {getItems.map((item, idx) => (
        <Collapse
          key={idx}
          items={[item]}
          bordered={false}
          style={notification_collapse(10)}
          expandIcon={({ isActive }) => (
            <CaretRightOutlined
              rotate={isActive ? 180 : 90}
              style={{ color: '#ffffff' }}
            />
          )}
          expandIconPosition="end"
        />
      ))}
    </>
  );
};

export default Notifications;
