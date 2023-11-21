import { useState } from 'react';
import { Button, Steps } from 'antd';
import Celebration from '../celebration/Celebration';
import EmailValidation from '../emailValidation/EmailValidation';
import SetProfile from '../setProfile/SetProfile';
import SetTechStack from '../setTechStack/SetTechStack';
import CompleteProfile from '../completeProfile/CompleteProfile';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import {
  contentStyle,
  next_btn,
  prev_btn,
  steps_box,
  steps_container,
  steps_wrapper,
} from './steps.style';

const StepsPage = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent(current + 1);
  const prev = () => setCurrent(current - 1);

  const steps = [
    {
      title: '1',
      content: <Celebration current={current} setCurrent={setCurrent} />,
    },
    {
      title: '2',
      content: <EmailValidation />,
    },
    {
      title: '3',
      content: <SetProfile />,
    },
    {
      title: '4',
      content: <SetTechStack />,
    },
    {
      title: '5',
      content: <CompleteProfile />,
    },
  ];

  const items = steps.map((_, idx) => ({ key: idx, title: '' }));

  return (
    <>
      <div style={steps_container}>
        <div style={steps_box}>
          <Steps
            current={current}
            items={items}
            style={{
              maxWidth: '300px',
              height: '40px',
            }}
          />
        </div>

        <div style={steps_wrapper}>
          <div
            style={{
              display: 'flex',
              marginTop: '150px',
            }}
          >
            {current > 0 && current !== 5 && (
              <Button style={prev_btn} onClick={() => prev()}>
                <LeftOutlined style={{ fontSize: '3rem' }} />
              </Button>
            )}
          </div>

          <div style={contentStyle}>{steps[current].content}</div>

          {/* 개발이 완료되면 current !== 4로 변경 */}
          <div
            style={{
              display: 'flex',
              marginTop: '150px',
            }}
          >
            {current !== 0 && current < steps.length - 1 && (
              <Button style={next_btn} onClick={() => next()}>
                <RightOutlined style={{ fontSize: '3rem' }} />
              </Button>
            )}
          </div>
          {/* {current === steps.length - 1 && (
          <Button
            type="primary"
            style={success_Btn}
            onClick={() => message.success('WithMe에 오신 걸 환영합니다!')}
          >
            시작하기
          </Button>
        )} */}
        </div>
      </div>
    </>
  );
};

export default StepsPage;
