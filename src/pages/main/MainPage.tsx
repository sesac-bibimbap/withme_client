import { Link } from 'react-router-dom';
import { ROUTES } from '../../common/constants';
import useSocketConnect from '../../common/hooks/useSocketConnect';
import useFetchNotifications from '../../components/notification/hooks/useFetchNotifications';

const MainPage = () => {
  useSocketConnect();
  useFetchNotifications(); // FIXME: 수정 필요할 수도 있음

  return (
    <>
      <Link to={ROUTES.LOGIN.PATH}>로그인으로 뿅</Link>
      <Link to={ROUTES.NOTIFICATION.PATH}>알림으로</Link>
    </>
  );
};

export default MainPage;
