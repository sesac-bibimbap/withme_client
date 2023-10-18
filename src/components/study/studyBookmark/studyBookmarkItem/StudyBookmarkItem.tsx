import { useState } from 'react';
import {
  bookmarkItem_wrapper,
  studyBookmarkItem_button_detail,
  studyBookmark_bookmarkBtn_bookmark,
  studyBookmark_text_teamName,
  studyBookmark_text_techStack,
} from './StudyBookmarkItem.style';
import { Button } from 'antd';
import { studyBookMark } from '../../api';

export type BookmarkItemType = {
  teamName: string;
  id: number;
};

const StudyBookmarkItem = ({ teamName, id }: BookmarkItemType) => {
  const [bookmark, setBookmark] = useState(false);

  const bookmarkImage = bookmark
    ? '/bookmark/bookmarkLine.svg'
    : '/bookmark/bookmark.svg';

  const handleButtonClick = () => {
    studyBookMark(id);
    setBookmark(!bookmark);
  };

  return (
    <>
      <div style={bookmarkItem_wrapper}>
        <Button type="primary" style={studyBookmarkItem_button_detail}>
          <p style={studyBookmark_text_teamName}>{teamName}</p>
          <p style={studyBookmark_text_techStack}># javascript</p>
        </Button>
        <Button
          style={studyBookmark_bookmarkBtn_bookmark}
          onClick={handleButtonClick}
        >
          <img src={bookmarkImage} alt="북마크" style={{ height: '22px' }} />
        </Button>
      </div>
    </>
  );
};

export default StudyBookmarkItem;
