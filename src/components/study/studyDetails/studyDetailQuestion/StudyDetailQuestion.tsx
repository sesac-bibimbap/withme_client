import { Collapse, Space } from 'antd';
import { useStudyInquiry } from '../../hooks/queries/useQueries';
import { CaretRightOutlined } from '@ant-design/icons';

const StudyDetailQuestion = ({ studyId }: { studyId: string | undefined }) => {
  const { data, isLoading } = useStudyInquiry(studyId);
  console.log(data);

  const getItems = data?.map((item, idx) => ({
    key: String(idx),
    // label: <NotificationHeader item={item} />,
    // children: <NotificationContents item={item} />,
    label: `${item.title}`,
    children: <p>{item.contents}</p>,
  }));
  return (
    <>
      {!isLoading ? (
        <Space direction="vertical" style={{ width: '645px' }}>
          {getItems?.map((item, idx) => (
            <Collapse
              style={{ backgroundColor: '#222121' }}
              key={idx}
              bordered={false}
              collapsible="header"
              items={[item]}
              expandIcon={({ isActive }) => (
                <CaretRightOutlined
                  rotate={isActive ? 180 : 90}
                  style={{ color: '#ffffff' }}
                />
              )}
              expandIconPosition="end"
              // items={[
              //   {
              //     key: '1',
              //     label: 'This panel can only be collapsed by clicking text',
              //     children: <p>{text}</p>,
              //   },
              // ]}
            />
          ))}
        </Space>
      ) : null}
    </>
  );
};

export default StudyDetailQuestion;
