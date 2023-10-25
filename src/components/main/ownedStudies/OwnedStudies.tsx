import { Link } from 'react-router-dom';

const OwnedStudies = ({
  ownedStudies,
}: {
  ownedStudies: Study[] | undefined;
}) => {
  return (
    <div
      style={{
        background: '#222121',
        borderRadius: '10px',
        height: '59%',
        overflow: 'hidden',
      }}
    >
      <div style={{ fontWeight: 'bold', padding: '15px', height: '10%' }}>
        소유중인 스터디
      </div>
      <div
        style={{
          margin: '0px 10px',
          display: 'flex',
          height: '75%',
          overflowX: 'auto',
        }}
      >
        {ownedStudies?.map(({ id, name, recruit: { isRecruit } }) => (
          <Link
            to={`/study/room/${id}`}
            key={id}
            style={{
              padding: '10px',
              background: '#454343',
              borderRadius: '10px',
              marginRight: '10px',
              color: '#ffffff',
              textDecoration: 'none',
              fontSize: '14px',
              minWidth: '150px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div># {id}</div>
                <div>{isRecruit ? '모집중' : '모집종료'}</div>
              </div>
              <div>{name}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OwnedStudies;
