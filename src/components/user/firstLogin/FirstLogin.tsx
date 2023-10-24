import { CSSProperties } from 'react';
import StepsPage from './stepsPage/StepsPage';
// import CompleteProfile from './completeProfile/CompleteProfile';
// import EmailValidation from './emailValidation/EmailValidation';
// import OtherEmail from './otherEmail/OtherEmail';
// import SetProfile from './setProfile/SetProfile';
// import SetTechStack from './setTechStack/SetTechStack';
// import { Carousel } from 'antd';
// import type { DotPosition } from 'antd/es/carousel';

const firstLogin_container: CSSProperties = {
  display: 'flex',
  position: 'fixed',
  top: '0',
  left: '0',
  bottom: '0',
  right: '0',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100dvh',
  backgroundColor: '#000000',
};

const firstLogin_wrapper: CSSProperties = {
  width: '500px',
  minWidth: '500px',
  height: '500px',
  backgroundColor: '#454343',
  color: 'white',
  display: 'flex',
  // justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  borderRadius: '10px',
};

const FirstLogin = () => {
  // const dotPosition: DotPosition = 'top';

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
