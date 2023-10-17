const ROUTES = {
  MAIN: {
    PATH: '/',
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
    NAME: 'RESET_PASSWORD',
  },
  RESET_PASSWORD_CHECK: {
    PATH: 'check',
    NAME: 'RESET_PASSWORD_CHECK',
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
    PATH: '/study/deatil/:studyId',
    NAME: 'StudyDetail',
  },
};

export default ROUTES;
