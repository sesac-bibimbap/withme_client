import { TechStackHashtag } from '../../../common/components';
import dateFormatting from '../../../common/utils/dateFormatting';
import {
  profileList_container,
  profileList_contents_contents,
  profileList_contents_title,
  profileList_contents_wrapper,
  profileList_techStacks_tag,
  profileList_techStacks_wrapper,
  profile_container,
  profile_profileImg,
  profile_profileImg_container,
  profile_title,
} from './Profile.style';

const MainProfile = ({ user }: { user: User | undefined }) => {
  const profileList = [
    {
      title: '이메일',
      contents: user?.email,
    },
    {
      title: '생성일',
      contents: dateFormatting(user?.createdAt),
    },
    {
      title: '개발경력',
      contents: user?.devCareer
        ? user?.devCareer.category
        : '개발경력을 설정해주세요.',
    },
    {
      title: '직무',
      contents: user?.job?.category
        ? user?.job?.category
        : '직무를 설정해주세요.',
    },
    {
      title: '성별',
      contents: user?.profile.gender ? '남성' : '여성',
    },
  ];

  return (
    <div style={profile_container}>
      <div style={profile_title}>프로필</div>
      <div style={profile_profileImg_container}>
        <img
          src={user?.profile.profileImg}
          alt="프로필 이미지"
          style={profile_profileImg}
        />
        <div>{user?.profile.nickname}</div>
      </div>
      <div className="profileList_container" style={profileList_container}>
        <div>
          {profileList?.map(({ title, contents }, idx) => (
            <div key={idx} style={profileList_contents_wrapper}>
              <div style={profileList_contents_title}>{title}</div>
              <div style={profileList_contents_contents}>{contents}</div>
            </div>
          ))}
        </div>
        <div>
          <div style={profileList_contents_contents}>기술스택</div>
          <div style={profileList_techStacks_wrapper}>
            {user?.techStacks?.map(({ id, stackName }) => (
              <TechStackHashtag
                key={id}
                buttonStyle={profileList_techStacks_tag}
              >
                {stackName ?? ''}
              </TechStackHashtag>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainProfile;
