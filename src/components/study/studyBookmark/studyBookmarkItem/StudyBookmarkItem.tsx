import { useState } from 'react';
import {
  bookmarkItem_wrapper,
  studyBookmarkItem_button_detail,
  studyBookmark_bookmarkBtn_bookmark,
  studyBookmark_text_teamName,
  studyBookmark_text_techStack,
} from './StudyBookmarkItem.style';
import { Button } from 'antd';

const StudyBookmarkItem = () => {
  const [bookmark, setBookmark] = useState(false);

  const bookmarkImage = bookmark
    ? '/bookmark/bookmark.svg'
    : '/bookmark/bookmarkLine.svg';

  const handleButtonClick = () => {
    setBookmark(!bookmark);
  };

  return (
    <>
      <div style={bookmarkItem_wrapper}>
        <Button type="primary" style={studyBookmarkItem_button_detail}>
          <p style={studyBookmark_text_teamName}>팀자스</p>
          <p style={studyBookmark_text_techStack}># javascript</p>
        </Button>
        <img
          src={bookmarkImage}
          alt="북마크"
          style={studyBookmark_bookmarkBtn_bookmark}
        />
      </div>
    </>
  );
};

export default StudyBookmarkItem;
