import { ROUTES } from '../common/constants';
import { CreateStudyForm } from '../components';
import RegisterPage from './register/RegisterPage';
import NotificationPage from './notification/NotificationPage';
import MainPage from './main/MainPage';
import LoginPage from './login/LoginPage';

interface Route {
  element: React.ReactNode; // JSX.Element는 React 컴포넌트 인스턴스가 아니며, 구체적인 React 엘리먼트 타입
  path?: string;
  children?: Route[];
}

const PAGE_LIST: Route[] = [
  {
    element: <MainPage />,
    path: ROUTES.MAIN.PATH,
  },
  {
    element: <LoginPage />,
    path: ROUTES.LOGIN.PATH,
  },
  {
    element: <RegisterPage />,
    path: ROUTES.REGISTER.PATH,
  },
  {
    element: <NotificationPage />,
    path: ROUTES.NOTIFICATION.PATH,
  },
  // {
  //   path: "*",
  //   element:<NotFound />
  // },
  {
    element: <CreateStudy />,
    children: [
      {
        path: ROUTES.CREATESTUDY.PATH,
        element: <CreateStudyForm />,
      },
    ],
  },
];

export default PAGE_LIST;
