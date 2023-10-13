import { ROUTES } from '../common/constants';
import { CreateStudyForm } from '../components';
import { RegisterForm, LoginForm } from '../components';
import Register from './register/Register';
import { Login } from './login/Login';
import Main from './main/Main';
import CreateStudy from './study/create/CreateStudy';

interface Route {
  element: React.ReactNode; // JSX.Element는 React 컴포넌트 인스턴스가 아니며, 구체적인 React 엘리먼트 타입
  path?: string;
  children?: Route[];
}

const PAGE_LIST: Route[] = [
  {
    element: <Login />,
    children: [
      {
        path: ROUTES.LOGIN.PATH,
        element: <LoginForm />,
      },
    ],
  },
  {
    element: <Register />,
    children: [
      {
        path: ROUTES.REGISTER.PATH,
        element: <RegisterForm />,
      },
    ],
  },
  {
    path: ROUTES.MAIN.PATH,
    element: <Main />,
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
