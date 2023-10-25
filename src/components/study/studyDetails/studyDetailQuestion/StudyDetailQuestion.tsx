import { Collapse, Space } from 'antd';
import { useStudyInquiry } from '../../hooks/queries/useQueries';
import { CaretRightOutlined } from '@ant-design/icons';
import StudyDetailQuestionHeader from './StudyDetailQuestionHeader/StudyDetailQuestionHeader';
import {
  studyDetailQuestion_collapse,
  studyDetailQuestion_container,
  studyDetailQuestion_inquiry_btn,
  studyDetailQuestion_inquiry_btn_wrap,
  studyDetailQuestion_title,
} from './StudyDetailQuestion.style';
import '../../study.css';
import StudyDetailQuestionInside from './StudyDetailQuestionInside/StudyDetailQuestionInside';
import { BlackBtn } from '../../../../common/components';

type StudyDetailQuestionType = {
  studyId: number | undefined;
  setIsCreateInquiry?: (isOpen: React.SetStateAction<boolean>) => void;
};

const StudyDetailQuestion = ({
  studyId,
  setIsCreateInquiry,
}: StudyDetailQuestionType) => {
  const { data, isLoading } = useStudyInquiry(studyId);

  const getItems = data?.map((item, idx) => ({
    key: String(idx),
    label: <StudyDetailQuestionHeader item={item} />,
    children: <StudyDetailQuestionInside item={item} studyId={studyId} />,
  }));

  return (
    <>
      <div style={studyDetailQuestion_inquiry_btn_wrap}>
        <h4 style={studyDetailQuestion_title}>스터디 문의</h4>
        <BlackBtn
          setIsOpen={setIsCreateInquiry}
          buttonStyle={studyDetailQuestion_inquiry_btn}
        >
          문의작성
        </BlackBtn>
      </div>
      <div
        className="studyDetailQuestion_container"
        style={studyDetailQuestion_container}
      >
        {!isLoading ? (
          <Space direction="vertical" style={{ width: '645px' }}>
            {getItems?.map((item, idx) => (
              <Collapse
                style={studyDetailQuestion_collapse}
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
