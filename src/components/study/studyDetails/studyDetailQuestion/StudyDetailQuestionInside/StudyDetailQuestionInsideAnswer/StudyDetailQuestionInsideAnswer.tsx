import dateFormatting from '../../../../../../common/utils/dateFormatting';

import {
  StudyDetailQuestionInsideAnswer_container,
  StudyDetailQuestionInsideAnswer_contents,
  StudyDetailQuestionInsideAnswer_contents_wrap,
  StudyDetailQuestionInsideAnswer_title,
  StudyDetailQuestionInsideAnswer_wrap,
} from './StudyDetailQuestionInsideAnswer.style';

const StudyDetailQuestionInsideAnswer = ({ item }: { item: Inquiry }) => {
  const { inquiryResponse, createdAt } = item;

  const {
    year: answerYear,
    month: answerMonth,
    date: answerDate,
  } = dateFormatting(createdAt);
  return (
    <>
      {inquiryResponse ? (
        <div style={StudyDetailQuestionInsideAnswer_container}>
          <div style={StudyDetailQuestionInsideAnswer_wrap}>
            <div style={StudyDetailQuestionInsideAnswer_contents_wrap}>
              <p style={StudyDetailQuestionInsideAnswer_title}>답변</p>
              <div>
                <p>
                  {answerYear}-{answerMonth}-{answerDate}
                </p>
                <p style={StudyDetailQuestionInsideAnswer_contents}>
                  {inquiryResponse.contents}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div style={StudyDetailQuestionInsideAnswer_container}>
          <div style={StudyDetailQuestionInsideAnswer_wrap}>
            {/* <div style={StudyDetailQuestionInsideAnswer_contents_wrap}>
              <p style={StudyDetailQuestionInsideAnswer_title}>답변</p>
              <div>
                <p>
                  {answerYear}-{answerMonth}-{answerDate}
                </p>
                <p style={StudyDetailQuestionInsideAnswer_contents}>
                  {contents}
                </p>
              </div>
            </div> */}
          </div>
        </div>
      )}
    </>
  );
};

export default StudyDetailQuestionInsideAnswer;
