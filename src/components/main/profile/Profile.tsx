import { TechStackHashtag } from '../../../common/components';

const MainProfile = ({ user }: { user: User | undefined }) => {
  console.log('✔️  user:', user);
  const profileList = [
    {
      title: '이메일',
      contents: user?.email,
    },
    {
      title: '생성일',
      contents: user?.createdAt?.toString(),
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
    <div
      style={{
        width: '59%',
        background: '#222121',
        borderRadius: '10px',
        padding: '15px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ fontWeight: 'bold' }}>프로필</div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          fontSize: '22px',
          fontWeight: 'bold',
          margin: '30px 0px 20px',
        }}
      >
        <img
          src={user?.profile.profileImg}
          alt=""
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50px',
            background: '#F6C54D',
          }}
        />
        <div>{user?.profile.nickname}</div>
      </div>
      <div style={{ overflowY: 'scroll' }}>
        <div>
          {profileList.map(({ title, contents }, idx) => (
            <div key={idx} style={{ display: 'flex' }}>
              <div style={{ minWidth: '80px', margin: '10px 0px' }}>
                {title}
              </div>
              <div style={{ margin: '10px 0px' }}>{contents}</div>
            </div>
          ))}
        </div>
        <div>
          <div style={{ margin: '10px 0px' }}>기술스택</div>
          <div style={{ display: 'flex', gap: '5px', padding: '10px 5px' }}>
            {user?.techStacks.map(({ id, stackName }) => (
              <TechStackHashtag key={id} buttonStyle={{ height: '20px' }}>
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
