import { useState } from 'react';
import { Button } from 'antd';
import { bookmarkBtn_button, bookmarkBtn_container } from './BookmarkBtn.style';

type bookmarkBtnType = {
  children: string;
  htmlType?: 'button' | 'submit' | 'reset' | undefined;
};

const BookmarkBtn = ({ children, htmlType }: bookmarkBtnType) => {
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
        <Button
          style={bookmarkBtn_button}
          htmlType={htmlType}
          onClick={handleButtonClick}
        >
          {children}
        </Button>
        <img
          src={bookmarkImage}
          alt="북마크"
          style={{
            position: 'relative',
            bottom: '13px',
            zIndex: '1',
            right: '41px',
            filter: 'drop-shadow(2px 2px 3px #454343)',
          }}
        />
      </div>
    </>
  );
};

export default BookmarkBtn;
