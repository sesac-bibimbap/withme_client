import { useState } from 'react';
import { Button } from 'antd';
import {
  bookmarkBtn_bookmark,
  bookmarkBtn_button,
  bookmarkBtn_container,
} from './BookmarkBtn.style';

type bookmarkBtnType = {
  buttonText: string;
  htmlType?: 'button' | 'submit' | 'reset' | undefined;
};

const BookmarkBtn = ({ buttonText, htmlType }: bookmarkBtnType) => {
  const [bookmark, setBookmark] = useState(false);

  const bookmarkImage = bookmark
    ? '/bookmark/bookmark.svg'
    : '/bookmark/bookmarkLine.svg';

  const handleButtonClick = () => {
    setBookmark(!bookmark);
  };

  return (
    <>
      <div style={bookmarkBtn_container}>
        {/* <div> */}
        <Button
          style={bookmarkBtn_button}
          htmlType={htmlType}
          onClick={handleButtonClick}
        >
          {buttonText}
        </Button>
        <img src={bookmarkImage} alt="북마크" style={bookmarkBtn_bookmark} />
      </div>
    </>
  );
};

export default BookmarkBtn;
