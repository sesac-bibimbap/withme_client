import { memo, useState, useEffect } from 'react';
import { Button } from 'antd';
import {
  bookmarkBtn_bookmark,
  bookmarkBtn_button,
  bookmarkBtn_container,
} from './BookmarkBtn.style';
import { studyBookMark } from '../../../../components/study/api';
import useCacheInstance from '../../../utils/cache';

type bookmarkBtnType = {
  children?: string;
  htmlType?: 'button' | 'submit' | 'reset' | undefined;
  id?: number;
  isMarked?: boolean;
  teamName?: string;
  techStacks?: TechStack[];
};

const BookmarkBtn = ({
  children,
  htmlType,
  id,
  isMarked,
  teamName,
  techStacks,
}: bookmarkBtnType) => {
  const [bookmark, setBookmark] = useState(isMarked);
  const [bookmarkImage, setBookmarkImage] = useState<string>();
  const { cache } = useCacheInstance();

  useEffect(() => {
    setBookmarkImage(
      bookmark ? '/bookmark/bookmark.svg' : '/bookmark/bookmarkLine.svg',
    );
  }, [bookmark]);

  const handleButtonClick = async () => {
    try {
      setBookmark((prev) => !prev);

      const user: User | undefined = cache.getQueryData(['userProfile']);
      const bookmarkedStudies = user?.bookmarkedStudies || [];
      const isAlreadyBookmarked = bookmarkedStudies.find(
        (item) => item.id === id,
      );

      if (isAlreadyBookmarked) {
        cache.setQueryData(['userProfile'], (oldData) =>
          Object.assign({}, oldData, {
            bookmarkedStudies: bookmarkedStudies.filter(
              (item) => item.id !== id,
            ),
          }),
        );
      } else {
        cache.setQueryData(['userProfile'], (oldData) =>
          Object.assign({}, oldData, {
            bookmarkedStudies: [
              ...bookmarkedStudies,
              { id, name: teamName, techStacks: techStacks },
            ],
          }),
        );
      }

      await studyBookMark(id);
    } catch (error) {
      setBookmark((prev) => !prev);
    }
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
