import { CSSProperties } from 'react';
import {
  studyBookmark_item_scroll,
  studyBookmark_text_title,
  studyBookmark_wrapper,
} from './StudyBookmark.style';
import StudyBookmarkItem from './studyBookmarkItem/StudyBookmarkItem';
import useCacheInstance from '../../../common/utils/cache';

type StudyBookmarkType = {
  bookmarkStyle?: CSSProperties;
};

const StudyBookmark = ({ bookmarkStyle }: StudyBookmarkType) => {
  const { cache } = useCacheInstance();
  const user: User | undefined = cache.getQueryData(['userProfile']);
  const bookmarkedStudies = user?.bookmarkedStudies || [];
  const bookmarkCss = {
    ...studyBookmark_wrapper,
    ...bookmarkStyle,
  };

  return (
    <>
      <div style={bookmarkCss}>
        <p style={studyBookmark_text_title}>북마크</p>
        <div style={studyBookmark_item_scroll}>
          {bookmarkedStudies.length !== 0 ? (
            bookmarkedStudies.map(({ id, name, techStacks }: Bookmark) => (
              <StudyBookmarkItem
                key={id}
                id={id}
                teamName={name}
                techStacks={techStacks}
              />
            ))
          ) : (
            <p>원하는 스터디를 북마크하세요</p>
          )}
        </div>
      </div>
    </>
  );
};

export default StudyBookmark;
