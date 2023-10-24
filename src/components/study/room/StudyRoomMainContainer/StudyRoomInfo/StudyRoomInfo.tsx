import { TechStackHashtag } from '../../../../../common/components';
import {
  studyRoomInfo_container,
  studyRoomInfo_contents,
  studyRoomInfo_contents_detail,
  studyRoomInfo_contents_detail_content,
  studyRoomInfo_contents_techStacks,
  studyRoomInfo_contents_title,
  studyRoomInfo_title,
  studyRoomInfo_wrapper,
} from '../StudyRoomMainContainer.style';

const StudyRoomInfo = ({ data }: StudyDataType) => {
  // TODO: 날짜
  const { content, startDate, endDate, techStacks } = data;

  return (
    <div style={studyRoomInfo_container}>
      <h2 style={studyRoomInfo_title}>스터디 정보</h2>
      <div style={studyRoomInfo_wrapper}>
        <div style={studyRoomInfo_contents}>
          <div style={studyRoomInfo_contents_title}>진행기간</div>
          <div>{`2023.07.12 ~ 2023.10.23`}</div>
        </div>
        <div style={studyRoomInfo_contents}>
          <div style={studyRoomInfo_contents_title}>기술스택</div>
          <div style={studyRoomInfo_contents_techStacks}>
            {techStacks.map(({ stackName }) => (
              <TechStackHashtag
                key={stackName}
                hashtagText={`# ${stackName}`}
              />
            ))}
          </div>
        </div>
        <div style={studyRoomInfo_contents_detail}>
          <div style={studyRoomInfo_contents_title}>세부내용</div>
          <div style={studyRoomInfo_contents_detail_content}>{content}</div>
        </div>
      </div>
    </div>
  );
};

export default StudyRoomInfo;
