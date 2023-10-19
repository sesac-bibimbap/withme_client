import { memo, useState, useEffect } from 'react';
import { Button } from 'antd';
import {
  bookmarkBtn_bookmark,
  bookmarkBtn_button,
  bookmarkBtn_container,
} from './BookmarkBtn.style';
import { studyBookMark } from '../../../../components/study/api';

type bookmarkBtnType = {
  children: string;
  htmlType?: 'button' | 'submit' | 'reset' | undefined;
  id: number;
  isMarked?: boolean;
};

const BookmarkBtn = ({ children, htmlType, id, isMarked }: bookmarkBtnType) => {
  const [bookmark, setBookmark] = useState(isMarked);
  const [bookmarkImage, setBookmarkImage] = useState<string>();

  useEffect(() => {
    setBookmarkImage(
      bookmark ? '/bookmark/bookmark.svg' : '/bookmark/bookmarkLine.svg',
    );
  }, [bookmark]);

  const handleButtonClick = () => {
    studyBookMark(id);
    setBookmark((prev) => !prev);
  };

  return (
    <>
      <div style={bookmarkBtn_container}>
        <Button
          style={bookmarkBtn_button}
          htmlType={htmlType}
          onClick={handleButtonClick}
        >
          {children}
        </Button>
        <img src={bookmarkImage} alt="북마크" style={bookmarkBtn_bookmark} />
      </div>
    </>
  );
};

const MemoBookmarkBtn = memo(BookmarkBtn);

export default MemoBookmarkBtn;
