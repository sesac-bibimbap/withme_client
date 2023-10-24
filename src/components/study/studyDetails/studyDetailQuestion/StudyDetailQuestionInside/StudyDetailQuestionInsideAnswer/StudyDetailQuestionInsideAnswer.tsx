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
import { useRef } from 'react';
import { useMutation } from '@tanstack/react-query';
import { studyInquiryAnswer } from '../../../../api';

const StudyDetailQuestionInsideAnswer = ({
  item,
  showInput,
  studyId,
}: {
  item: Inquiry;
  showInput: boolean;
  studyId: number | undefined;
}) => {
  const studyAnswer = useRef<HTMLTextAreaElement>(null);
  const { inquiryResponse, createdAt, id } = item;

  const AnswerDataSubmit = () => {
    const studyAnswerData = {
      contents: studyAnswer.current?.value,
    };

    mutate(studyAnswerData);
    // 나중에 팝업으로 바꿔주기
    alert('답변이 등록 되었습니다');
  };

  const handleAnswer = async (studyAnswerData: {
    contents: string | undefined;
  }) => {
    try {
      await studyInquiryAnswer(studyId, id, studyAnswerData);
      console.log('스터디 문의 답변 성공');
    } catch (err) {
      // if (err instanceof AxiosError) {
      //   const errMsg = err.response?.data.message;
      console.log('스터디 답변 실패');
    }
    return { handleAnswer };
  };

  const { mutate } = useMutation(handleAnswer);

  return (
    <>
      {inquiryResponse ? (
        <div style={StudyDetailQuestionInsideAnswer_container}>
          <div style={StudyDetailQuestionInsideAnswer_wrap}>
            <div style={StudyDetailQuestionInsideAnswer_contents_wrap}>
              <p style={StudyDetailQuestionInsideAnswer_title}>답변</p>
              <div>
                <p>{dateFormatting(createdAt)}</p>
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
            {showInput ? (
              <>
                <div style={StudyDetailQuestionInsideAnswer_contents_wrap}>
                  <p style={StudyDetailQuestionInsideAnswer_title}>답변</p>

                  <textarea
                    ref={studyAnswer}
                    style={StudyDetailQuestionInsideAnswer_textarea}
                  />
                </div>
                <MiddleGrayBtn
                  AnswerDataSubmit={AnswerDataSubmit}
                  htmlType="submit"
                  buttonStyle={StudyDetailQuestionInsideAnswer_btn}
                >
                  답변등록
                </MiddleGrayBtn>
              </>
            ) : null}
          </div>
        </div>
      )}
    </>
  );
};

export default StudyDetailQuestionInsideAnswer;
