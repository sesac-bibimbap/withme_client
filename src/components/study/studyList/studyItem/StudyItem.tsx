import { memo } from 'react';
import { DarkGrayBtn, TechStackHashtag } from '../../../../common/components';
import {
  studyItem_wrapper,
  studyItem_text_left,
  studyItem_text_title,
  studyItem_text_personnel,
  studyItem_text_detail,
  studyItem_button_detail,
  studyItem_button_bundle,
  studyItem_button_hashtag,
} from './StudyItem.style';
import MemoBookmarkBtn from '../../../../common/components/button/bookmarkBtn/BookmarkBtn';

type studyItemType = {
  user: any;
  study: StudyListType;
};

const StudyItem = ({ study, user }: studyItemType) => {
  const {
    id,
    recruit: { title },
    name,
    participants,
    attendantsLimit,
    content,
    techStacks,
  } = study;
  const userBookmarkedStudies = user.data.bookmarkedStudies;
  const loginUserBookmarkedStudy = userBookmarkedStudies.find(
    (userBookmarkedStudy) => {
      return userBookmarkedStudy.id === id;
    },
  );

  return (
    <>
      <div style={studyItem_wrapper}>
        <div style={studyItem_text_left}>
          <div style={studyItem_text_title}>
            <p>
              {title} | {name}
            </p>
          </div>
          <div style={studyItem_text_personnel}>
            <p>
              인원: {participants.length} / {attendantsLimit}
            </p>
          </div>
          <div style={studyItem_text_detail}>{content}</div>
          <div>
            {techStacks?.map((v) => (
              <TechStackHashtag
                buttonStyle={studyItem_button_hashtag}
                key={v.id}
              >
                {v.stackName}
              </TechStackHashtag>
            ))}
          </div>
        </div>
        <div style={studyItem_button_bundle}>
          <MemoBookmarkBtn
            id={id}
            isMarked={loginUserBookmarkedStudy ? true : false}
            teamName={name}
          >
            모집중
          </MemoBookmarkBtn>
          <DarkGrayBtn buttonStyle={studyItem_button_detail}>
            자세히 보기
          </DarkGrayBtn>
        </div>
      </div>
    </>
  );
};

const MemoedStudyItem = memo(StudyItem);

export default MemoedStudyItem;
