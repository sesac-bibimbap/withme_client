import { ROUTES } from '../common/constants';
import RegisterPage from './register/RegisterPage';
import NotificationPage from './notification/NotificationPage';
import MainPage from './main/MainPage';
import LoginPage from './login/LoginPage';
import StudyPage from './study/list/StudyPage';
import CreateStudyPage from './study/create/CreateStudyPage';
import ResetPasswordPage from './resetPassword/ResetPasswordPage';
import ResetPasswordCheckPage from './resetPassword/check/ResetPasswordCheckPage';
import StudyRoomPage from './study/room/StudyRoomPage';
import EditStudyPage from './study/edit/EditStudyPage';
import LoadingPage from './loading/LoadingPage';
import StudyDetailPage from './study/detail/StudyDetailPage';

interface Route {
  element?: React.ReactNode; // JSX.Element는 React 컴포넌트 인스턴스가 아니며, 구체적인 React 엘리먼트 타입
  path?: string;
  children?: Route[];
}

const PAGE_LIST: Route[] = [
  {
    element: <LoadingPage />,
    path: ROUTES.LOADING.PATH,
  },
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
    element: <CreateStudyPage />,
    path: ROUTES.CREATE_STUDY.PATH,
  },
  {
    path: ROUTES.STUDY.PATH,
    children: [
      {
        element: <StudyPage />,
        path: ROUTES.STUDY.PATH,
      },
      {
        element: <CreateStudyPage />,
        path: ROUTES.CREATE_STUDY.PATH,
      },
      {
        element: <StudyDetailPage />,
        path: ROUTES.STUDY_DETAIL.PATH,
      },
      {
        element: <StudyRoomPage />,
        path: ROUTES.STUDY_ROOM.PATH,
      },
      {
        element: <EditStudyPage />,
        path: ROUTES.STUDY_EDIT.PATH,
      },
    ],
  },
  // {
  //   path: "*",
  //   element:<NotFound />
  // }
];

export default PAGE_LIST;
