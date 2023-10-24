import { Layout } from './common/components';
import PAGE_LIST from './pages';
import { useRoutes } from 'react-router-dom';

const App = () => {
  const routes = useRoutes(PAGE_LIST);
  const url = routes?.props?.match?.pathname;

  return (
    <>
      {url === '/login' ||
      url === '/register' ||
      url === '/reset-password' ||
      url === '/reset-password/check' ||
      url === '/profile' ? (
        routes
      ) : (
        <Layout>{routes}</Layout>
      )}
    </>
  );
};

export default App;
