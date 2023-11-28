import { useState } from 'react';
import { Steps } from 'antd';
import Celebration from '../celebration/Celebration';
import EmailValidation from '../emailValidation/EmailValidation';
import SetProfile from '../setProfile/SetProfile';
import SetTechStack from '../setTechStack/SetTechStack';
import CompleteProfile from '../completeProfile/CompleteProfile';
import { contentStyle, steps_box, steps_container } from './steps.style';
import './Steps.style.css';

const StepsPage = () => {
  const [current, setCurrent] = useState(0);
  const [profileFormData, setProfileFormData] = useState();
  const [navigatedEmail, setNavigatedEmail] = useState<string>('');

  const steps = [
    {
      title: '1',
      content: (
        <Celebration
          current={current}
          setCurrent={setCurrent}
          setNavigatedEmail={setNavigatedEmail}
        />
      ),
    },
    {
      title: '2',
      content: (
        <EmailValidation
          setCurrent={setCurrent}
          navigatedEmail={navigatedEmail}
          setNavigatedEmail={setNavigatedEmail}
        />
      ),
    },
    {
      title: '3',
      content: (
        <SetProfile
          setCurrent={setCurrent}
          setProfileFormData={setProfileFormData}
        />
      ),
    },
    {
      title: '4',
      content: (
        <SetTechStack
          setCurrent={setCurrent}
          setProfileFormData={setProfileFormData}
        />
      ),
    },
    {
      title: '5',
      content: (
        <CompleteProfile
          navigatedEmail={navigatedEmail}
          profileFormData={profileFormData}
        />
      ),
    },
  ];

  const items = steps.map((_, idx) => ({ key: idx, title: '' }));

  return (
    <>
      <div style={steps_container}>
        <div style={steps_box}>
          <Steps
            progressDot
            current={current}
            items={items}
            type="inline"
            onChange={(value) => {
              // value !== 0 && value !== 4 ?
              setCurrent(value);
              // : alert('선택이 불가합니다. 버튼을 이용해주세요.');
            }}
          />
        </div>

        <div style={contentStyle}>{steps[current].content}</div>
      </div>
    </>
  );
};

export default StepsPage;
