import { MiddleGrayBtn } from '../../../../../../common/components';
import dateFormatting from '../../../../../../common/utils/dateFormatting';
import {
  StudyDetailQuestionInsideInquiry_btn,
  StudyDetailQuestionInsideInquiry_container,
  StudyDetailQuestionInsideInquiry_contents,
  StudyDetailQuestionInsideInquiry_contents_wrap,
  StudyDetailQuestionInsideInquiry_title,
  StudyDetailQuestionInsideInquiry_wrap,
} from './StudyDetailQuestionInsideInquiry.style';

const StudyDetailQuestionInsideInquiry = ({ item }: { item: Inquiry }) => {
  const { contents, createdAt } = item;

  const {
    year: inquiryYear,
    month: inquiryMonth,
    date: inquiryDate,
  } = dateFormatting(createdAt);
  return (
    <>
      <div style={StudyDetailQuestionInsideInquiry_container}>
        <div style={StudyDetailQuestionInsideInquiry_wrap}>
          <div style={StudyDetailQuestionInsideInquiry_contents_wrap}>
            <p style={StudyDetailQuestionInsideInquiry_title}>문의</p>
            <div>
              <p>
                {inquiryYear}-{inquiryMonth}-{inquiryDate}
              </p>
              <p style={StudyDetailQuestionInsideInquiry_contents}>
                {contents}
              </p>
            </div>
          </div>
          <MiddleGrayBtn
            htmlType="submit"
            buttonStyle={StudyDetailQuestionInsideInquiry_btn}
          >
            답변하기
          </MiddleGrayBtn>
        </div>
      </div>
    </>
  );
};

export default StudyDetailQuestionInsideInquiry;
