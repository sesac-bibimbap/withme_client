import { CSSProperties } from 'react';
import { useProfileQuery } from '../../auth/hooks/queries/useQueries';
import {
  studyBookmark_item_scroll,
  studyBookmark_text_title,
  studyBookmark_wrapper,
} from './StudyBookmark.style';
import StudyBookmarkItem from './studyBookmarkItem/StudyBookmarkItem';

type StudyBookmarkType = {
  bookmarkStyle?: CSSProperties;
};

const StudyBookmark = ({ bookmarkStyle }: StudyBookmarkType) => {
  const { data, isLoading } = useProfileQuery();

  let bookmarkedStudies = [];
  if (!isLoading) bookmarkedStudies = data.bookmarkedStudies;

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
            bookmarkedStudies?.map((bookmark: Bookmark) => (
              <StudyBookmarkItem
                key={bookmark.id}
                id={bookmark.id}
                teamName={bookmark.name}
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
