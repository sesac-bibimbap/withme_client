import {
  studyDetail_contents,
  studyDetail_contents_title,
  studyDetail_hashtag,
  studyDetail_title,
  studyDetail_wrap_contents,
} from './StudyDetailContents.style';
import { TechStackHashtag } from '../../../../common/components';
import { Divider } from 'antd';
import dateFormatting from '../../../../common/utils/dateFormatting';

const StudyDetailContents = ({
  studyDetailData,
}: {
  studyDetailData: Study;
}) => {
  const {
    name,
    recruit: { title },
    content,
    attendantsLimit,
    startDate,
    endDate,
    techStacks,
  } = studyDetailData;

  const {
    year: startYear,
    month: startMonth,
    date: startD,
  } = dateFormatting(startDate);
  const {
    year: endYear,
    month: endMonth,
    date: endD,
  } = dateFormatting(endDate);

  return (
    <>
      <div style={studyDetail_wrap_contents}>
        <div style={{ display: 'flex', alignItems: 'baseline' }}>
          <h2 style={studyDetail_title}>{title}</h2>
          <Divider
            type="vertical"
            style={{ borderLeft: '2px solid #FFFFFF' }}
          />
          <h4>{name}</h4>
        </div>
        <div style={studyDetail_contents}>
          <h4 style={studyDetail_contents_title}>인원</h4>
          <p>{attendantsLimit} / 10</p>
        </div>
        <div style={studyDetail_contents}>
          <h4 style={studyDetail_contents_title}>진행기간</h4>
          <p>
            {startYear}.{startMonth}.{startD} ~ {endYear}.{endMonth}.{endD}
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
