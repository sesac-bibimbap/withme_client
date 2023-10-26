import {
  profile_button_close,
  profile_button_hashtag,
  profile_button_wrapper,
  profile_container,
  profile_detail_grid,
  profile_detail_hashtag,
  profile_detail_title,
  profile_detail_wrapper,
  profile_hashtag_wrapper,
  profile_image_circle,
  profile_image_circleWrapper,
  profile_text_name,
  profile_wrapper,
} from './Profile.style';
import {
  CharcoalBtn,
  TechStackHashtag,
  YellowBtn,
} from '../../../common/components';
import { useProfileQuery } from '../hooks/queries/useQueries';
import { Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import ProfileDetailItem from './profileDetailItem/ProfileDetailItem';

const Profile = () => {
  const { data, isLoading } = useProfileQuery();
  const navigate = useNavigate();

  return (
    <>
      {!isLoading ? (
        <>
          <div style={profile_container}>
            <div style={profile_wrapper}>
              <Button
                style={profile_button_close}
                shape="round"
                icon={<CloseOutlined style={{ color: 'white' }} />}
                onClick={() => navigate(-1)}
              />
              {/* <div style={profile_image_circle}> */}
              {/* <img
                style={profile_image_circle}
                src={data?.profile.profileImg}
                alt="userImg"
              /> */}
              <div style={profile_image_circleWrapper}>
                <img
                  src={data?.profile.profileImg}
                  alt="프로필이미지"
                  style={profile_image_circle}
                />
              </div>
              {/* </div> */}
              <div style={profile_text_name}>{data?.profile.nickname}</div>
              <div style={profile_detail_wrapper}>
                <div style={profile_detail_grid}>
                  <ProfileDetailItem
                    title="인증메일"
                    data={data?.emailVerified}
                  />
                  <ProfileDetailItem
                    title="닉네임"
                    data={data?.profile.nickname}
                  />
                  <ProfileDetailItem
                    title="성별"
                    data={data?.profile.gender ? '남성' : '여성'}
                  />
                  <ProfileDetailItem
                    title="주요직무"
                    data={data?.job?.category}
                  />
                  <ProfileDetailItem
                    title="개발경력"
                    data={data?.devCareer?.category}
                  />
                </div>
                <div style={profile_detail_hashtag}>
                  <p style={profile_detail_title}>기술스택</p>
                  <div style={profile_hashtag_wrapper}>
                    {data?.techStacks.map((v) => (
                      <TechStackHashtag
                        key={v.id}
                        buttonStyle={profile_button_hashtag}
                      >
                        {v.stackName}
                      </TechStackHashtag>
                    ))}
                  </div>
                </div>
              </div>
              <div style={profile_button_wrapper}>
                <CharcoalBtn buttonStyle={{ fontWeight: 600 }}>
                  계정변경
                </CharcoalBtn>
                <YellowBtn buttonStyle={{ color: '#222121', fontWeight: 600 }}>
                  프로필 편집
                </YellowBtn>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Profile;
