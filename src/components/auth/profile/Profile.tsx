import {
  profile_button_wrapper,
  profile_container,
  profile_detail_margin,
  profile_detail_title,
  profile_detail_wrapper,
  profile_image_circle,
  profile_text_name,
  profile_wrapper,
} from './Profile.style';
import {
  CharcoalBtn,
  TechStackHashtag,
  YellowBtn,
} from '../../../common/components';
import { useProfileQuery } from '../hooks/queries/useQueries';

const Profile = () => {
  const { data, isLoading } = useProfileQuery();

  return (
    <>
      {!isLoading ? (
        <>
          <div style={profile_container}>
            <div style={profile_wrapper}>
              <div style={profile_image_circle}>
                <img src={data?.profile.profileImg} alt="userImg" />
              </div>
              <p style={profile_text_name}>{data?.profile.nickname}</p>
              <div style={profile_detail_wrapper}>
                <div style={profile_detail_margin}>
                  <p style={profile_detail_title}>인증메일</p>
                  <p>{data?.emailVerified}</p>
                </div>
                <div style={profile_detail_margin}>
                  <p style={profile_detail_title}>닉네임</p>
                  <p>{data?.profile.nickname}</p>
                </div>
                <div style={profile_detail_margin}>
                  <p style={profile_detail_title}>성별</p>
                  <p>{data?.profile.gender ? '남성' : '여성'}</p>
                </div>
                <div style={profile_detail_margin}>
                  <p style={profile_detail_title}>주요직무</p>
                  <p>{data?.job?.category}</p>
                </div>
                <div style={profile_detail_margin}>
                  <p style={profile_detail_title}>개발경력</p>
                  <p>{data?.devCareer?.category}</p>
                </div>
                <div>
                  <p style={profile_detail_title}>기술스택</p>
                  <TechStackHashtag>nest</TechStackHashtag>
                </div>
              </div>
              <div style={profile_button_wrapper}>
                <CharcoalBtn>계정변경</CharcoalBtn>
                <YellowBtn>프로필 편집</YellowBtn>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Profile;
