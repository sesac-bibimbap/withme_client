import { StudyBookmark, StudyListBoard } from '../../../components';

const StudyPage = () => {
  return (
    <>
      <StudyListBoard />
      <div style={{ height: '100%' }}>
        <StudyBookmark />
        <StudyBookmark />
      </div>
    </>
  );
};

export default StudyPage;
