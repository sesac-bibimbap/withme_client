import { detailDate } from '../../../common/utils/getDetailDate';

const Inquires = ({ inquiries }: { inquiries: Inquiry[] | undefined }) => {
  console.log('✔️  inquiries:', inquiries);
  return (
    <div
      style={{
        width: '100%',
        background: '#222121',
        borderRadius: '10px',
        height: '39%',
        marginBottom: '15px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ fontWeight: 'bold', padding: '15px' }}>스터디문의</div>
      <div style={{ overflowY: 'scroll' }}>
        {inquiries?.map(
          ({ id, title, contents, createdAt, inquiryResponse }) => (
            <div
              key={id}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                background: '#454343',
                padding: '15px',
                borderRadius: '10px',
                margin: '10px',
                marginTop: '0px',
                marginBottom: '10px',
                color: '#ffffff',
                textDecoration: 'none',
              }}
            >
              <div style={{ fontSize: '12px' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '3px',
                  }}
                >
                  <div>{`# ${id} ${title}`}</div>
                  <div style={{ marginBottom: '3px' }}>
                    {detailDate(createdAt || new Date())}
                  </div>
                </div>
                <div style={{ marginBottom: '10px', paddingLeft: '5px' }}>
                  Q. {contents}
                </div>

                <div
                  style={{
                    background: '#222121',
                    padding: '10px',
                    borderRadius: '5px',
                  }}
                >
                  <div>
                    A.{' '}
                    {inquiryResponse
                      ? inquiryResponse.contents
                      : '아직 답변이 없습니다.'}
                  </div>
                </div>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default Inquires;
