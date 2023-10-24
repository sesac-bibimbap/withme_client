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

const StudyDetail = () => {
  const { studyId } = useParams();
  const studyIdAsNumber = Number(studyId);

  const { data, isLoading } = useStudyDetail(studyIdAsNumber);
  if (!data) return;
  console.log(data);

  return (
    <>
      {!isLoading ? (
        <div style={studyDetail_container}>
          <div style={studyDetail_box}>
            <div>
              <StudyDetailContents studyDetailData={data} />
              <StudyDetailQuestion studyId={studyIdAsNumber} />
            </div>
            <Space>
              <BlackBtn path="/study">닫기</BlackBtn>
              <YellowBtn buttonStyle={studyDetail_yellowBtn}>
                스터디 신청하기
              </YellowBtn>
            </Space>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default StudyDetail;
