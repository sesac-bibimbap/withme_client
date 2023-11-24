import StepsPage from './stepsPage/StepsPage';
import { firstLogin_container, firstLogin_wrapper } from './FirstLogin.style';

const FirstLogin = () => {
  return (
    <>
      <div style={firstLogin_container}>
        <div style={firstLogin_wrapper}>
          <StepsPage />
        </div>
      </div>
    </>
  );
};

export default FirstLogin;
