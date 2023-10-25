const ROUTES = {
  LOADING: {
    PATH: '/',
    NAME: 'Loading',
  },
  MAIN: {
    PATH: '/main',
    NAME: 'Main',
  },
  REGISTER: {
    PATH: '/register',
    NAME: 'Register',
  },
  LOGIN: {
    PATH: '/login',
    NAME: 'Login',
  },
  RESET_PASSWORD: {
    PATH: '/reset-password',
    NAME: 'ResetPassword',
  },
  RESET_PASSWORD_CHECK: {
    PATH: 'check',
    NAME: 'ResetPasswordCheck',
  },
  CREATE_STUDY: {
    PATH: '/study/create',
    NAME: 'CreateStudy',
  },
  NOTIFICATION: {
    PATH: '/notification',
    NAME: 'Notification',
  },
  STUDY: {
    PATH: '/study',
    NAME: 'Study',
  },
  STUDY_DETAIL: {
    PATH: '/study/detail/:studyId',
    NAME: 'StudyDetail',
  },
  STUDY_ROOM: {
    PATH: '/study/room/:id',
    NAME: 'StudyRoom',
  },
  STUDY_EDIT: {
    PATH: '/study/edit/:studyId',
    NAME: 'StudyEdit',
  },
  FIRST_LOGIN: {
    PATH: '/firstLogin',
    NAME: 'FirstLogin',
  },
  PROFILE: {
    PATH: '/profile',
    NAME: 'Profile',
  },
};

export default ROUTES;
