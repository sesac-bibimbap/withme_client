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
import useStudyDetailStore from '../../../common/store/studyDetail';

const StudyDetail = () => {
  const navigate = useNavigate();
  // 스터디 신청 팝업
  const [isOpen, setIsOpen] = useState(false);

  // 문의 작성 팝업
  const [isCreateInquiry, setIsCreateInquiry] = useState(false);

  // 스터디 신청 완료 팝업
  const [showPopup, setShowPopup] = useState(false);

  // 스터디 신청 여부 확인
  const [popSuccessTitle, setPopSuccessTitle] = useState('');
  const [popSuccessText, setPopSuccessText] = useState('');
  const { studyId } = useParams();
  const studyIdAsNumber = Number(studyId);
  const { detailStatusCode, setDetailStatusCode } = useStudyDetailStore();

  useEffect(() => {
    (async () => {
      try {
        const userStudyCheck = await studyCheck(studyIdAsNumber);
        // 초기화를 하거나 200을 받거나
        setDetailStatusCode(userStudyCheck.status);
      } catch (err) {
        if (err instanceof AxiosError) {
          setDetailStatusCode(err.response?.data.statusCode);
        }
      }
    })();
  }, [setDetailStatusCode, studyIdAsNumber]);

  const { data, isLoading } = useStudyDetail(studyIdAsNumber);
  if (!data) return;

  const handleParticipate = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    navigate(`/study/detail/${studyIdAsNumber}`);
  };

  return (
    <>
      {!isLoading ? (
        <div style={studyDetail_container}>
          <div style={studyDetail_box}>
            <div
              style={{
                width: '84%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <StudyDetailContents studyDetailData={data} />
              <StudyDetailQuestion
                setIsCreateInquiry={setIsCreateInquiry}
                studyId={studyIdAsNumber}
                statusCode={detailStatusCode}
              />
            </div>
            <Space>
              <BlackBtn path="/study">닫기</BlackBtn>
              {detailStatusCode === 200 ? (
                <YellowBtn
                  onClick={handleParticipate}
                  buttonStyle={studyDetail_yellowBtn}
                >
                  스터디 신청하기
                </YellowBtn>
              ) : detailStatusCode === 400 ? (
                <WhiteGrayBtn>신청중</WhiteGrayBtn>
              ) : null}
            </Space>
          </div>
          {isOpen && (
            <StudyParticipatePop
              studyIdAsNumber={studyIdAsNumber}
              setIsOpen={setIsOpen}
              setShowPopup={setShowPopup}
              setPopSuccessTitle={setPopSuccessTitle}
              setPopSuccessText={setPopSuccessText}
            />
          )}
          {isCreateInquiry && (
            <CreateInquiryPop
              setIsCreateInquiry={setIsCreateInquiry}
              setShowPopup={setShowPopup}
              studyIdAsNumber={studyIdAsNumber}
              setPopSuccessTitle={setPopSuccessTitle}
              setPopSuccessText={setPopSuccessText}
            />
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
