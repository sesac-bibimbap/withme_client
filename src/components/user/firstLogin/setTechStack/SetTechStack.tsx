import { TechStackFilter, YellowBtn } from '../../../../common/components';
import {
  setTechStack_comment,
  setTechStack_container,
  setTechStack_title,
  setTechStack_wrapper,
  setTechStack_yellow_btn,
} from './SetTechStack.style';
import { useEffect, useState } from 'react';
import { API } from '../../../../common/utils/axiosInstance';
import { setProfile_btn_wrapper } from '../setProfile/setProfile.style';

const SetTechStack = ({ setProfileFormData, setCurrent }: any) => {
  const [selectedTechStacks, setSelectedTechStacks] = useState<
    { id: number }[]
  >([]);

  const [techStacks, setTechStacks] = useState<
    {
      createdAt: string;
      updatedAt: string;
      id: number;
      stackName: string;
      stackImg: string;
    }[]
  >();

  useEffect(() => {
    (async () => {
      const { data } = await API({ url: '/tech-stacks' });
      setTechStacks(data);
    })();
  }, []);

  return (
    <>
      <div style={setTechStack_container}>
        <div style={setTechStack_title}>기술 스택 설정</div>
        <div className="techStacks" style={setTechStack_wrapper}>
          {techStacks?.map((item, idx) => (
            <TechStackFilter
              key={idx}
              techStackImage={`${item.stackImg}`}
              techStackName={`${item.stackName}`}
              setSelectedTechStacks={setSelectedTechStacks}
              id={item.id}
            />
          ))}
        </div>
        <div style={setTechStack_comment}>
          저장 이후에는 프로필에서 수정이 가능합니다.
        </div>
      </div>
      <div style={setProfile_btn_wrapper}>
        {/* <CharcoalBtn
          disabled={false}
          buttonStyle={setTechStack_charcoal_btn}
          onClick={() => setCurrent((prev: number) => prev - 1)}
        >
          이전
        </CharcoalBtn> */}
        <YellowBtn
          disabled={false}
          buttonStyle={setTechStack_yellow_btn}
          onClick={() => {
            setProfileFormData((prev: any) => ({
              ...prev,
              techStacks: selectedTechStacks,
            }));
            setCurrent((prev: number) => prev + 1);
          }}
        >
          저장
        </YellowBtn>
      </div>
    </>
  );
};

export default SetTechStack;
