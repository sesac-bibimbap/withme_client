import { Button } from 'antd';
import { TechStackFilter } from '../../../../common/components';
import { techStacks } from '../../../../common/constants/fristLogin/techStacks';
import {
  setTechStack_comment,
  setTechStack_container,
  setTechStack_title,
  setTechStack_wrapper,
  setTechStack_yellowBtn,
} from './SetTechStack.style';

const SetTechStack = () => {
  return (
    <>
      <div style={setTechStack_container}>
        <div style={setTechStack_title}>기술 스택 설정</div>
        <div className="techStacks" style={setTechStack_wrapper}>
          {techStacks.map((item, idx) => (
            <TechStackFilter
              key={idx}
              techStackImage={`/techStack/${item.techStackImage}`}
              techStackName={`${item.techStackName}`}
            />
          ))}
        </div>
        <div style={setTechStack_comment}>
          저장 이후에는 프로필에서 수정이 가능합니다.
        </div>
        <Button style={setTechStack_yellowBtn} htmlType="submit">
          저장
        </Button>
      </div>
    </>
  );
};

export default SetTechStack;
