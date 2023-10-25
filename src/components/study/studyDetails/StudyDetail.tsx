import {
  studyDetail_box,
  studyDetail_container,
  studyDetail_yellowBtn,
} from './StudyDetail.style';
import StudyDetailContents from '../studyDetails/studyDetailContents/StudyDetailContents';
import { useStudyDetail } from '../hooks/queries/useQueries';
import { useParams } from 'react-router-dom';
import StudyDetailQuestion from './studyDetailQuestion/StudyDetailQuestion';
import { BlackBtn, YellowBtn } from '../../../common/components';
import { Space } from 'antd';
import { useState } from 'react';
import StudyParticipatePop from './studyParticipate/StudyParticipatePop';
import CreateInquiryPop from './createInquiry/CreateInquiryPop';

const StudyDetail = () => {
  // 스터디 신청 팝업
  const [isOpen, setIsOpen] = useState(false);

  // 문의 작성 팝업
  const [isCreateInquiry, setIsCreateInquiry] = useState(false);
  const { studyId } = useParams();
  const studyIdAsNumber = Number(studyId);

  const { data, isLoading } = useStudyDetail(studyIdAsNumber);
  if (!data) return;
  console.log(data);

  const handleParticipate = () => {
    setIsOpen(true);
  };

  return (
    <>
      {!isLoading ? (
        <div style={studyDetail_container}>
          <div style={studyDetail_box}>
            <div>
              <StudyDetailContents studyDetailData={data} />
              <StudyDetailQuestion
                setIsCreateInquiry={setIsCreateInquiry}
                studyId={studyIdAsNumber}
              />
            </div>
            <Space>
              <BlackBtn path="/study">닫기</BlackBtn>
              <YellowBtn
                onClick={handleParticipate}
                buttonStyle={studyDetail_yellowBtn}
              >
                스터디 신청하기
              </YellowBtn>
            </Space>
          </div>
          {isOpen && <StudyParticipatePop setIsOpen={setIsOpen} />}
          {isCreateInquiry && (
            <CreateInquiryPop setIsCreateInquiry={setIsCreateInquiry} />
          )}
        </div>
      ) : null}
    </>
  );
};

export default StudyDetail;
