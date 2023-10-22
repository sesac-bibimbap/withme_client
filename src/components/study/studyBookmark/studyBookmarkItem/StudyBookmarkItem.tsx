import { useState } from 'react';
import {
  bookmarkItem_wrapper,
  studyBookmarkItem_button_detail,
  studyBookmark_bookmarkBtn_bookmark,
  studyBookmark_button_techStackHashtag,
  studyBookmark_text_teamName,
} from './StudyBookmarkItem.style';
import { Button } from 'antd';
import { studyBookMark } from '../../api';
import useCacheInstance from '../../../../common/utils/cache';
import { TechStackHashtag } from '../../../../common/components';

export type BookmarkItemType = {
  teamName?: string;
  id?: number;
  techStacks?: TechStack[];
};

const StudyBookmarkItem = ({ teamName, id, techStacks }: BookmarkItemType) => {
  const [bookmark, setBookmark] = useState(false);
  const { cache } = useCacheInstance();

  const bookmarkImage = bookmark
    ? '/bookmark/bookmarkLine.svg'
    : '/bookmark/bookmark.svg';

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
              {
                id,
                name: teamName,
                techStacks: techStacks,
              },
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
      <div style={bookmarkItem_wrapper}>
        <Button type="primary" style={studyBookmarkItem_button_detail}>
          <p style={studyBookmark_text_teamName}>{teamName}</p>
          <div>
            {techStacks?.slice(0, 2).map((v) => (
              <TechStackHashtag
                key={v.id}
                buttonStyle={studyBookmark_button_techStackHashtag}
              >
                {v.stackName}
              </TechStackHashtag>
            ))}
          </div>
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
