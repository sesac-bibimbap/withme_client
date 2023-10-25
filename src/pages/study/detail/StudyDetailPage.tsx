import { StudyBookmark, StudyDetail } from '../../../components';
import { studyPage_right_wrapper } from '../list/StudyPage.style';

const StudyDetailPage = () => {
  return (
    <>
      <StudyDetail />
      <div style={studyPage_right_wrapper}>
        <StudyBookmark disable={true} bookmarkStyle={{ height: '100%' }} />
      </div>
    </>
  );
};

export default StudyDetailPage;
