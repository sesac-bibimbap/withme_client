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
import { useRef, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { studyInquiryAnswer } from '../../../../api';
import useCacheInstance from '../../../../../../common/utils/cache';

const StudyDetailQuestionInsideAnswer = ({
  item,
  showInput,
  studyId,
}: {
  item: Inquiry;
  showInput: boolean;
  studyId: string | undefined;
}) => {
  const { cache } = useCacheInstance();

  // const user: User | undefined = cache.getQueryData(['userProfile']);
  //       const bookmarkedStudies = user?.bookmarkedStudies || [];

  // cache.setQueryData(['userProfile'], (oldData) =>
  //           Object.assign({}, oldData, {
  //             bookmarkedStudies: [
  //               ...bookmarkedStudies,
  //               { id, name: teamName, techStacks: techStacks },
  //             ],
  //           }),

  const studyAnswer = useRef<HTMLTextAreaElement>(null);
  const { inquiryResponse, createdAt, id } = item;

  const {
    year: answerYear,
    month: answerMonth,
    date: answerDate,
  } = dateFormatting(createdAt);

  const AnswerDataSubmit = () => {
    const studyAnswerData = {
      contents: studyAnswer.current?.value,
    };

    mutate(studyAnswerData);
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

  const { mutate } = useMutation(handleAnswer, {
    async onMutate(answer) {
      console.log('앰써~~~', answer);

      const previousInquiryData: Inquiry[] | undefined = cache.getQueryData([
        'studyInquiry',
        studyId,
      ]);
      console.log('studyInquiry, studyId 캐싱해놓은 값', previousInquiryData);
      if (!previousInquiryData) return;

      // cache.setQueryData(['studyInquiry', studyId], (oldData) => {
      //   oldData.
      //   return {
      //     contents:
      //   };
      // });
    },
  });

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
