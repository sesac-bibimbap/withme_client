import { BlackBtn, YellowBtn } from '../../../common/components';

const BookmarkedStudies = ({
  bookmarkedStudies,
}: {
  bookmarkedStudies: Study[] | undefined;
}) => {
  return (
    <div
      style={{
        width: '39%',
        height: '100%',
        background: '#222121',
        marginRight: '15px',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ fontWeight: 'bold', padding: '15px' }}>북마크</div>
      <div
        style={{
          padding: '0px 10px 10px 10px',
          overflowY: 'scroll',
        }}
      >
        {bookmarkedStudies?.map(
          ({
            id,
            attendantsLimit,
            name,
            startDate,
            recruit: { title, isRecruit },
          }) => (
            <>
              {isRecruit ? (
                <div
                  key={id}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    background: '#454343',
                    padding: '15px',
                    borderRadius: '10px',
                    marginBottom: '10px',
                  }}
                >
                  <div style={{ fontSize: '14px' }}>
                    <div>{`# ${id} ${title}`}</div>
                    <div>스터디명: {name}</div>
                    <div>모집시작일: {startDate}</div>
                    <div>모집인원 : {attendantsLimit}명</div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}
                  >
                    <YellowBtn
                      buttonStyle={{
                        width: '100px',
                        height: '35px',
                        fontSize: '14px',
                        cursor: 'auto',
                        padding: '5px',
                        color: '#222121',
                        fontWeight: 'bold',
                        marginBottom: '5px',
                      }}
                    >
                      모집중
                    </YellowBtn>
                    <BlackBtn
                      buttonStyle={{
                        width: '100px',
                        height: '35px',
                        fontSize: '14px',
                        padding: '5px',
                      }}
                      path={`/study/detail/${id}`}
                    >
                      모집글보기
                    </BlackBtn>
                  </div>
                </div>
              ) : null}
            </>
          ),
        )}
      </div>
    </div>
  );
};

export default BookmarkedStudies;
