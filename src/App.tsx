import { Layout } from './common/components';
import PAGE_LIST from './pages';
import { useRoutes } from 'react-router-dom';

const App = () => {
  const routes = useRoutes(PAGE_LIST);
  // console.log('🦄  routes:', routes);
  // console.log('🦄  routes:111', routes?.props?.match?.pathname);
  // console.log(PAGE_LIST[0]);

  return (
    <>
      {routes?.props?.match?.pathname === '/login' ||
      routes?.props?.match?.pathname === '/register' ? (
        routes
      ) : (
        <Layout>{routes}</Layout>
      )}
    </>
    // <>
    //   <Layout>{routes}</Layout>
    // </>
  );
};

export default App;
