import { TechStackHashtag } from '../../../common/components';
import {
  studyDetail_box,
  studyDetail_container,
  studyDetail_contents,
  studyDetail_contents_title,
  studyDetail_hashtag,
  studyDetail_wrap_contents,
} from './StudyDetail.style';

const StudyDetail = () => {
  return (
    <>
      <div style={studyDetail_container}>
        <div style={studyDetail_box}>
          <h3>자스 공부</h3>
          <div style={studyDetail_wrap_contents}>
            <div style={studyDetail_contents}>
              <h4 style={studyDetail_contents_title}>인원</h4>
              <p>3 / 7</p>
            </div>
            <div style={studyDetail_contents}>
              <h4 style={studyDetail_contents_title}>진행기간</h4>
              <p>2023.07.12 - 2023.10.23</p>
            </div>
            <div style={studyDetail_contents}>
              <h4 style={studyDetail_contents_title}>세부내용</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essent
              </p>
            </div>
            <div style={studyDetail_contents}>
              <h4 style={studyDetail_contents_title}>해시태그</h4>
              <TechStackHashtag buttonStyle={studyDetail_hashtag}>
                javascript
              </TechStackHashtag>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudyDetail;
