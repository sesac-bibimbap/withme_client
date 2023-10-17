import {
  studyBookmark_text_title,
  studyBookmark_wrapper,
} from './StudyBookmark.style';
import StudyBookmarkItem from './studyBookmarkItem/StudyBookmarkItem';

const StudyBookmark = () => {
  return (
    <>
      <div style={studyBookmark_wrapper}>
        <p style={studyBookmark_text_title}>북마크</p>
        <StudyBookmarkItem />
      </div>
    </>
  );
};

export default StudyBookmark;
