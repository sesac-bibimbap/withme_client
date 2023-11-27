import {
  completeProfile_wrapper,
  completeProfile_comment,
  completeProfile_yellowBtn,
  completeProfile_title,
  completeProfile_container,
  completeProfile_contents,
  completeProfile_comment_title,
  completeProfile_comment_contents,
  completeProfile_btn_wrapper,
  completeProfile_contents_wrapper,
  completeProfile_contents_techStacks,
  completeProfile_contents_email,
  completeProfile_contents_techStacks_wrapper,
} from './CompleteProfile.style';
import { useNavigate } from 'react-router-dom';
import { TechStackHashtag, YellowBtn } from '../../../../common/components';
import { API } from '../../../../common/utils/axiosInstance';
import { ROUTES } from '../../../../common/constants';
import '../../../../global.style.css';

const CompleteProfile = ({ navigatedEmail, profileFormData }: any) => {
  const navigate = useNavigate();
  const completeProfileContents = [
    {
      title: '닉 네 임',
      contents: profileFormData?.nickname,
    },
    {
      title: '성   별',
      contents: profileFormData?.gender ? '남자' : '여자',
    },
    {
      title: '주요직무',
      contents: profileFormData?.job?.category,
    },
    {
      title: '개발경력',
      contents: profileFormData?.devCareer?.category,
    },
  ];

  const onClickUpdateProfile = () => {
    try {
      (async () => {
        await API({
          method: 'patch',
          url: 'users/req-user',
          data: profileFormData,
        });
        alert('WithMe 가입을 환영합니다!');
        setTimeout(() => {
          navigate(ROUTES.MAIN.PATH);
        }, 1000);
      })();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div style={completeProfile_container}>
        <div style={completeProfile_title}>모든 설정이 완료되었습니다.</div>
        <div
          className="completeProfile_wrapper_scroll"
          style={completeProfile_wrapper}
        >
          <div style={completeProfile_contents_wrapper}>
            <div style={completeProfile_contents_email}>
              <div style={completeProfile_comment_title}>인증메일</div>
              <div style={completeProfile_comment_contents}>
                {navigatedEmail}
              </div>
            </div>
            {completeProfileContents.map(({ title, contents }) => (
              <div key={title} style={completeProfile_contents}>
                <div style={completeProfile_comment_title}>{title}</div>
                <div style={completeProfile_comment_contents}>{contents}</div>
              </div>
            ))}
            <div style={completeProfile_contents_techStacks}>
              <div style={completeProfile_comment_title}>기술스택</div>
              <div style={completeProfile_contents_techStacks_wrapper}>
                {profileFormData?.techStacks?.map(({ stackName }: any) => (
                  <TechStackHashtag
                    key={stackName}
                    buttonStyle={{ borderRadius: '5px' }}
                  >
                    {stackName}
                  </TechStackHashtag>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div style={completeProfile_comment}>
          저장 이후에는 프로필에서 수정이 가능합니다.
        </div>
      </div>
      <div style={completeProfile_btn_wrapper}>
        {/* <CharcoalBtn
          buttonStyle={completeProfile_charcoal_btn}
          onClick={() => setCurrent((prev: number) => prev - 1)}
        >
          이전
        </CharcoalBtn> */}
        <YellowBtn
          buttonStyle={completeProfile_yellowBtn}
          onClick={onClickUpdateProfile}
        >
          시작하기
        </YellowBtn>
      </div>
    </>
  );
};

export default CompleteProfile;
