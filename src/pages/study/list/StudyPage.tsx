import { StudyBookmark, StudyListBoard } from '../../../components';
import { studyPage_right_wrapper } from './StudyPage.style';

const StudyPage = () => {
  return (
    <>
      <StudyListBoard />
      <div style={studyPage_right_wrapper}>
        {/* <StudyBookmark bookmarkStyle={{ height: '100%' }} /> */}
        <StudyBookmark />
        <StudyBookmark />
      </div>
    </>
  );
};

export default StudyPage;
