import {
  BookmarkBtn,
  DarkGrayBtn,
  TechStackHashtag,
} from '../../../../common/components';
import {
  studyItem_wrapper,
  studyItem_text_left,
  studyItem_text_title,
  studyItem_text_personnel,
  studyItem_text_detail,
  studyItem_button_detail,
  studyItem_button_bundle,
} from './StudyItem.style';

type studyItemType = {
  title: string;
  teamName: string;
  participants: number;
  attendantsLimit: number;
  detail: string;
  hasTag: HashTagType[];
};

const StudyItem = ({
  title,
  teamName,
  participants,
  attendantsLimit,
  detail,
  hasTag,
}: studyItemType) => {
  return (
    <>
      <div style={studyItem_wrapper}>
        <div style={studyItem_text_left}>
          <div style={studyItem_text_title}>
            <p>
              {title} | {teamName}
            </p>
          </div>
          <div style={studyItem_text_personnel}>
            <p>
              인원: {participants} / {attendantsLimit}
            </p>
          </div>
          <div style={studyItem_text_detail}>{detail}</div>

          <div>
            {hasTag?.map((v) => (
              <TechStackHashtag key={v.id} hashtagText={v.stackName} />
            ))}
          </div>
        </div>
        <div style={studyItem_button_bundle}>
          <BookmarkBtn>모집중</BookmarkBtn>
          <DarkGrayBtn buttonStyle={studyItem_button_detail}>
            자세히 보기
          </DarkGrayBtn>
        </div>
      </div>
    </>
  );
};

export default StudyItem;
