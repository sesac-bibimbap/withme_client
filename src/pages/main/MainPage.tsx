import { Link } from 'react-router-dom';
import { ROUTES } from '../../common/constants';

const MainPage = () => {
  return (
    <>
      <Link to={ROUTES.LOGIN.PATH}>로그인으로 뿅</Link>
    </>
  );
};

export default MainPage;
