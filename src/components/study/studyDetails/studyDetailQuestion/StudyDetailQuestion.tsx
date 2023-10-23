import { Collapse, Space } from 'antd';
import { useStudyInquiry } from '../../hooks/queries/useQueries';
import { CaretRightOutlined } from '@ant-design/icons';
import StudyDetailQuestionHeader from './StudyDetailQuestionHeader/StudyDetailQuestionHeader';
import {
  StudyDetailQuestion_collapse,
  StudyDetailQuestion_container,
  StudyDetailQuestion_title,
} from './StudyDetailQuestion.style';
import '../../study.css';
import StudyDetailQuestionInside from './StudyDetailQuestionInside/StudyDetailQuestionInside';

const StudyDetailQuestion = ({ studyId }: { studyId: string | undefined }) => {
  const { data, isLoading } = useStudyInquiry(studyId);

  console.log('>>>>>>>', data);
  const getItems = data?.map((item, idx) => ({
    key: String(idx),
    label: <StudyDetailQuestionHeader item={item} />,
    children: <StudyDetailQuestionInside item={item} studyId={studyId} />,
  }));

  return (
    <>
      <h4 style={StudyDetailQuestion_title}>스터디 문의</h4>
      <div
        className="studyDetailQuestion_container"
        style={StudyDetailQuestion_container}
      >
        {!isLoading ? (
          <Space direction="vertical" style={{ width: '645px' }}>
            {getItems?.map((item, idx) => (
              <Collapse
                style={StudyDetailQuestion_collapse}
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
              />
            ))}
          </Space>
        ) : null}
      </div>
    </>
  );
};

export default StudyDetailQuestion;
