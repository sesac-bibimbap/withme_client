import { Dispatch } from 'react';
import { MiddleGrayBtn } from '../../../../../../common/components';
import dateFormatting from '../../../../../../common/utils/dateFormatting';
import {
  StudyDetailQuestionInsideInquiry_btn,
  StudyDetailQuestionInsideInquiry_container,
  // StudyDetailQuestionInsideInquiry_contents,
  StudyDetailQuestionInsideInquiry_contents_wrap,
  StudyDetailQuestionInsideInquiry_title,
  StudyDetailQuestionInsideInquiry_wrap,
} from './StudyDetailQuestionInsideInquiry.style';
import useStudyDetailStore from '../../../../../../common/store/studyDetail';

const StudyDetailQuestionInsideInquiry = ({
  item,
  setShowInput,
  showInput,
}: {
  item: Inquiry;
  setShowInput: Dispatch<React.SetStateAction<boolean>>;
  showInput: boolean;
}) => {
  const { contents, createdAt, inquiryResponse } = item;
  const { detailStatusCode } = useStudyDetailStore();

  return (
    <>
      {inquiryResponse ? (
        <div style={StudyDetailQuestionInsideInquiry_container}>
          <div style={StudyDetailQuestionInsideInquiry_wrap}>
            <div style={StudyDetailQuestionInsideInquiry_contents_wrap}>
              <p style={StudyDetailQuestionInsideInquiry_title}>문의</p>
              <div>
                <p>{dateFormatting(createdAt)}</p>
                {/* style={StudyDetailQuestionInsideInquiry_contents} */}
                <p>{contents}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div style={StudyDetailQuestionInsideInquiry_container}>
          <div style={StudyDetailQuestionInsideInquiry_wrap}>
            <div style={StudyDetailQuestionInsideInquiry_contents_wrap}>
              <p style={StudyDetailQuestionInsideInquiry_title}>문의</p>
              <div>
                <p>{dateFormatting(createdAt)}</p>
                {/* style={StudyDetailQuestionInsideInquiry_contents} */}
                <p>{contents}</p>
              </div>
            </div>
            {detailStatusCode === 409 ? (
              showInput ? (
                <MiddleGrayBtn
                  setShowInput={setShowInput}
                  buttonStyle={StudyDetailQuestionInsideInquiry_btn}
                >
                  답변닫기
                </MiddleGrayBtn>
              ) : (
                <MiddleGrayBtn
                  setShowInput={setShowInput}
                  buttonStyle={StudyDetailQuestionInsideInquiry_btn}
                >
                  답변하기
                </MiddleGrayBtn>
              )
            ) : null}
          </div>
        </div>
      )}
    </>
  );
};

export default StudyDetailQuestionInsideInquiry;
