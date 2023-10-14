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
} from './StudyItem.style';

const StudyItem = () => {
  const studyDetail =
    '책으로 진행할 예정이며, 책은 딥다이브 자바스크립트로 할 예정입니다. \n스터디 일자는 추후에 맞출 예정입니다.';
  return (
    <>
      <div style={studyItem_wrapper}>
        <div style={studyItem_text_left}>
          <div style={studyItem_text_title}>
            <p>자스 공부할 분 괌 | 팀자스</p>
          </div>
          <div style={studyItem_text_personnel}>
            <p>인원: 3 / 7</p>
          </div>
          <div style={studyItem_text_detail}>{studyDetail}</div>
          <div>
            <TechStackHashtag hashtagText="JavaScript" />
          </div>
        </div>
        <div>
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
