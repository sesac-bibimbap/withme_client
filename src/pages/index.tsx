import { ROUTES } from '../common/constants';
import RegisterPage from './register/RegisterPage';
import NotificationPage from './notification/NotificationPage';
import MainPage from './main/MainPage';
import LoginPage from './login/LoginPage';
import ResetPasswordPage from './resetPassword/ResetPasswordPage';
import ResetPasswordCheckPage from './resetPassword/check/ResetPasswordCheckPage';
// import Study from './study/list/StudyListPage';
import CreateStudy from './study/create/CreateStudyPage';
import FirstLoginPage from './firstLogin/FirstLoginPage';

interface Route {
  element?: React.ReactNode; // JSX.Element는 React 컴포넌트 인스턴스가 아니며, 구체적인 React 엘리먼트 타입
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
    path: ROUTES.RESET_PASSWORD.PATH,
    children: [
      {
        element: <ResetPasswordPage />,
        path: ROUTES.RESET_PASSWORD.PATH,
      },
      {
        element: <ResetPasswordCheckPage />,
        path: ROUTES.RESET_PASSWORD_CHECK.PATH,
      },
    ],
  },
  {
    element: <NotificationPage />,
    path: ROUTES.NOTIFICATION.PATH,
  },
  {
    element: <CreateStudy />,
    path: ROUTES.CREATE_STUDY.PATH,
  },
  {
    element: <FirstLoginPage />,
    path: ROUTES.FIRSTLOGIN.PATH,
  },
  // {
  //   element: <Study />,
  //   path: ROUTES.STUDY.PATH,
  //   children: [
  //     {
  //       element: <CreateStudy />,
  //       path: ROUTES.CREATE_STUDY.PATH,
  //     },
  //   ],
  // },
  // {
  //   path: "*",
  //   element:<NotFound />
  // }
];

export default PAGE_LIST;
