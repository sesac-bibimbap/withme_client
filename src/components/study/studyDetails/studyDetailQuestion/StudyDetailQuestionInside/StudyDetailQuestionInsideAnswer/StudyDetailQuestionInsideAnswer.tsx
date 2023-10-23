import { Input } from 'antd';
import dateFormatting from '../../../../../../common/utils/dateFormatting';

import {
  StudyDetailQuestionInsideAnswer_btn,
  StudyDetailQuestionInsideAnswer_container,
  StudyDetailQuestionInsideAnswer_contents,
  StudyDetailQuestionInsideAnswer_contents_wrap,
  StudyDetailQuestionInsideAnswer_textarea,
  StudyDetailQuestionInsideAnswer_title,
  StudyDetailQuestionInsideAnswer_wrap,
} from './StudyDetailQuestionInsideAnswer.style';
import { MiddleGrayBtn } from '../../../../../../common/components';

const StudyDetailQuestionInsideAnswer = ({
  item,
  showInput,
}: {
  item: Inquiry;
  showInput: boolean;
}) => {
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
            <div style={StudyDetailQuestionInsideAnswer_contents_wrap}>
              <p style={StudyDetailQuestionInsideAnswer_title}>답변</p>
              <Input.TextArea
                style={StudyDetailQuestionInsideAnswer_textarea}
              />
            </div>
            <MiddleGrayBtn
              htmlType="submit"
              buttonStyle={StudyDetailQuestionInsideAnswer_btn}
            >
              답변등록
            </MiddleGrayBtn>
          </div>
        </div>
      )}
    </>
  );
};

export default StudyDetailQuestionInsideAnswer;
