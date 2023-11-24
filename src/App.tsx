import { Layout } from './common/components';
import { ROUTES } from './common/constants';
import PAGE_LIST from './pages';
import { useRoutes } from 'react-router-dom';

const App = () => {
  const routes = useRoutes(PAGE_LIST);
  const url = routes?.props?.match?.pathname;
  const noLayoutUrls = [
    ROUTES.LOADING.PATH,
    ROUTES.REGISTER.PATH,
    ROUTES.LOGIN.PATH,
    ROUTES.RESET_PASSWORD.PATH,
    ROUTES.RESET_PASSWORD_CHECK.PATH,
    ROUTES.PROFILE.PATH,
    ROUTES.FIRST_LOGIN.PATH,
  ];

  return <>{noLayoutUrls.includes(url) ? routes : <Layout>{routes}</Layout>}</>;
};

export default App;
