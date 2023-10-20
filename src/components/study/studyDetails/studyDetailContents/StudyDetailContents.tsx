import {
  studyDetail_contents,
  studyDetail_contents_title,
  studyDetail_hashtag,
  studyDetail_title,
  studyDetail_wrap_contents,
} from './StudyDetailContents.style';
import { TechStackHashtag } from '../../../../common/components';

const StudyDetailContents = ({
  studyDetailData,
}: {
  studyDetailData: Study;
}) => {
  const { name, content, attendantsLimit, startDate, endDate, techStacks } =
    studyDetailData;

  const dateFormat = (dateData: Date) => {
    const date = new Date(dateData);
    console.log(date);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return { year, month, day };
  };

  const {
    year: startYear,
    month: startMonth,
    day: startDay,
  } = dateFormat(startDate);
  const { year: endYear, month: endMonth, day: endDay } = dateFormat(endDate);

  return (
    <>
      <div style={studyDetail_wrap_contents}>
        <h3 style={studyDetail_title}>{name}</h3>
        <div style={studyDetail_contents}>
          <h4 style={studyDetail_contents_title}>인원</h4>
          <p>{attendantsLimit} / 10</p>
        </div>
        <div style={studyDetail_contents}>
          <h4 style={studyDetail_contents_title}>진행기간</h4>
          <p>
            {startYear}.{startMonth}.{startDay} ~ {endYear}.{endMonth}.{endDay}
          </p>
        </div>
        <div style={studyDetail_contents}>
          <h4 style={studyDetail_contents_title}>세부내용</h4>
          <p>{content}</p>
        </div>
        <div style={studyDetail_contents}>
          <h4 style={studyDetail_contents_title}>해시태그</h4>
          {techStacks?.map((stack) => (
            <TechStackHashtag key={stack.id} buttonStyle={studyDetail_hashtag}>
              {stack.stackName}
            </TechStackHashtag>
          ))}
        </div>
      </div>
    </>
  );
};

export default StudyDetailContents;
