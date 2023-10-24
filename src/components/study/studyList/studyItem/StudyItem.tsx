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
import { useNavigate } from 'react-router-dom';

type studyItemType = {
  study: Study;
  userData?: User;
};

const StudyItem = ({ study, userData }: studyItemType) => {
  const {
    id,
    recruit,
    name,
    participants,
    attendantsLimit,
    content,
    techStacks,
  } = study;
  const navigate = useNavigate();
  const userBookmarkedStudies = userData?.bookmarkedStudies;
  const loginUserBookmarkedStudy = userBookmarkedStudies?.find(
    (userBookmarkedStudy: Study) => {
      return userBookmarkedStudy.id === id;
    },
  );

  return (
    <>
      <div style={studyItem_wrapper}>
        <div style={studyItem_text_left}>
          <div style={studyItem_text_title}>
            <p>
              #{id} {recruit?.title} | {name}
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
            techStacks={techStacks}
          >
            모집중
          </MemoBookmarkBtn>
          <DarkGrayBtn
            buttonStyle={studyItem_button_detail}
            onClick={() => navigate(`/study/detail/${id}`)}
          >
            자세히 보기
          </DarkGrayBtn>
        </div>
      </div>
    </>
  );
};

const MemoedStudyItem = memo(StudyItem);

export default MemoedStudyItem;
