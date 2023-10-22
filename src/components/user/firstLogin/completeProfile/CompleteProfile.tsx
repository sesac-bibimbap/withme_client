import { Button, message } from 'antd';
import { useProfileQuery } from '../../queries/useQueries';
import {
  completeProfile_wrapper,
  completeProfile_comment,
  completeProfile_yellowBtn,
  completeProfile_title,
  completeProfile_container,
} from './CompleteProfile.style';
import { ROUTES } from '../../../../common/constants';
import { useNavigate } from 'react-router-dom';

const CompleteProfile = () => {
  const navigate = useNavigate();
  const { data } = useProfileQuery();

  const navigateMainPage = () => {
    setTimeout(() => navigate(ROUTES.MAIN.PATH), 1000);
  };

  return (
    <>
      <div style={completeProfile_container}>
        <div style={completeProfile_title}>모든 설정이 완료되었습니다.</div>
        <div style={completeProfile_wrapper}>
          <div style={completeProfile_comment}>
            <div style={completeProfile_comment}>
              인증메일
              {data?.emailVerified}
            </div>
            <div style={completeProfile_comment}>닉 네 임 {data?.nickName}</div>
            <div style={completeProfile_comment}>성 별 {data?.gender}</div>
            <div style={completeProfile_comment}>주요직무 {data?.job}</div>
            <div style={completeProfile_comment}>
              개발경력 {data?.devCareer}
            </div>
            <div style={completeProfile_comment}>
              기술스택 {data?.techStacks}
            </div>
          </div>
        </div>

        <div style={completeProfile_comment}>
          저장 이후에는 프로필에서 수정이 가능합니다.
        </div>
        <Button
          style={completeProfile_yellowBtn}
          onClick={() => {
            message.success('WithMe에 오신 걸 환영합니다!');
            navigateMainPage();
          }}
        >
          시작하기
        </Button>
      </div>
    </>
  );
};

export default CompleteProfile;
