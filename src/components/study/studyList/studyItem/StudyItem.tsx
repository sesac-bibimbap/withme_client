import {
  BookmarkBtn,
  DarkGrayBtn,
  TechStackHashtag,
} from '../../../../common/components';
import { a, b, dsf, e, ere, studyItem_wrapper, z } from './StudyItem.style';

const StudyItem = () => {
  const studyDetail =
    '책으로 진행할 예정이며, 책은 딥다이브 자바스크립트로 할 예정입니다. \n스터디 일자는 추후에 맞출 예정입니다.';
  return (
    <>
      <div style={studyItem_wrapper}>
        <div style={e}>
          <div style={z}>
            <p>자스 공부할 분 괌 | 팀자스</p>
          </div>
          <div style={b}>
            <p>인원: 3 / 7</p>
          </div>
          <div style={a}>{studyDetail}</div>
          <div>
            <TechStackHashtag hashtagText="JavaScript" />
          </div>
        </div>
        <div style={dsf}>
          <BookmarkBtn>모집중</BookmarkBtn>
          <DarkGrayBtn buttonStyle={ere}>자세히 보기</DarkGrayBtn>
        </div>
      </div>
    </>
  );
};

export default StudyItem;
