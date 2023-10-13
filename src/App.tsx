import { Layout } from './common/components';
import PAGE_LIST from './pages';
import { useRoutes } from 'react-router-dom';

const App = () => {
  const routes = useRoutes(PAGE_LIST);
  // console.log('🦄  routes:', routes);
  // console.log(PAGE_LIST[0]);

  return (
    // <>{PAGE_LIST[0] ? routes : <Layout>{routes}</Layout>}</>
    <>
      <Layout>{routes}</Layout>
    </>
  );
};

export default App;
