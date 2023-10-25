import {
  studyDetail_box,
  studyDetail_container,
  studyDetail_yellowBtn,
} from './StudyDetail.style';
import StudyDetailContents from '../studyDetails/studyDetailContents/StudyDetailContents';
import { useStudyDetail } from '../hooks/queries/useQueries';
import { useNavigate, useParams } from 'react-router-dom';
import StudyDetailQuestion from './studyDetailQuestion/StudyDetailQuestion';
import {
  BlackBtn,
  Popup,
  WhiteGrayBtn,
  YellowBtn,
} from '../../../common/components';
import { Space } from 'antd';
import { useEffect, useState } from 'react';
import StudyParticipatePop from './studyParticipate/StudyParticipatePop';
import CreateInquiryPop from './createInquiry/CreateInquiryPop';
import { AxiosError } from 'axios';
import { studyCheck } from '../api';

const StudyDetail = () => {
  const navigate = useNavigate();
  // 스터디 신청 팝업
  const [isOpen, setIsOpen] = useState(false);

  // 문의 작성 팝업
  const [isCreateInquiry, setIsCreateInquiry] = useState(false);

  // 스터디 신청 완료 팝업
  const [showPopup, setShowPopup] = useState(false);

  // 스터디 신청 여부 확인
  const [isStudyCheck, setIsStudyCheck] = useState(null);
  const [statusCode, setStatusCode] = useState(0);

  const { studyId } = useParams();
  const studyIdAsNumber = Number(studyId);

  useEffect(() => {
    (async () => {
      try {
        const userStudyCheck = await studyCheck(studyIdAsNumber);
        setIsStudyCheck(userStudyCheck);
      } catch (err) {
        console.log(err);
        if (err instanceof AxiosError) {
          setStatusCode(err.response?.data.statusCode);
          console.log(typeof err.response?.data.statusCode);
        }
      }
    })();
  }, [statusCode]);

  console.log(statusCode);

  const { data, isLoading } = useStudyDetail(studyIdAsNumber);
  if (!data) return;
  console.log(data);

  const handleParticipate = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    navigate(`/study/detail/${studyIdAsNumber}`);
  };

  const popSuccessTitle = `스터디 신청이 완료되었습니다`;
  const popSuccessText = `스터디장의 검토 이후
  스터디 참여 여부는
  알림을 통해 전달됩니다. `;

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
              {isStudyCheck ? (
                <YellowBtn
                  onClick={handleParticipate}
                  buttonStyle={studyDetail_yellowBtn}
                >
                  스터디 신청하기
                </YellowBtn>
              ) : statusCode === 400 ? (
                <WhiteGrayBtn>신청중</WhiteGrayBtn>
              ) : null}
            </Space>
          </div>
          {isOpen && (
            <StudyParticipatePop
              studyIdAsNumber={studyIdAsNumber}
              setIsOpen={setIsOpen}
              setShowPopup={setShowPopup}
            />
          )}
          {isCreateInquiry && (
            <CreateInquiryPop setIsCreateInquiry={setIsCreateInquiry} />
          )}
        </div>
      ) : null}
      {showPopup && (
        <Popup
          popupTitle={popSuccessTitle}
          popupText={popSuccessText}
          onClose={closePopup}
        />
      )}
    </>
  );
};

export default StudyDetail;
