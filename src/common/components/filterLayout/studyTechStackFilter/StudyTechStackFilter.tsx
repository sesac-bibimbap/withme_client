import RightBarFilter from '../../filter/rightBarFilter/RightBarFilter';
import { studyTechStackFilter_container } from './StudyTechStackFilter.style';

const StudyTechStackFilter = () => {
  return (
    <div style={studyTechStackFilter_container}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        {/* 나중에 여기부분 프롭스로 해시태그인지 필터인지 넘겨 받을 것*/}
        <p>해시태그</p>
        <p>(최대 5개)</p>
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}
      >
        <RightBarFilter
          techStackName="react"
          techStackImage="/techStack/react.svg"
        />
        <RightBarFilter
          techStackName="javascript"
          techStackImage="/techStack/javascript.svg"
        />
        <RightBarFilter
          techStackName="c++"
          techStackImage="/techStack/c++.svg"
        />
        <RightBarFilter
          techStackName="java"
          techStackImage="/techStack/java.svg"
        />
        <RightBarFilter
          techStackName="node"
          techStackImage="/techStack/node.svg"
        />
        <RightBarFilter
          techStackName="python"
          techStackImage="/techStack/python.svg"
        />
        <RightBarFilter
          techStackName="spring"
          techStackImage="/techStack/spring.svg"
        />
        <RightBarFilter
          techStackName="swift"
          techStackImage="/techStack/swift.svg"
        />
      </div>
    </div>
  );
};

export default StudyTechStackFilter;
