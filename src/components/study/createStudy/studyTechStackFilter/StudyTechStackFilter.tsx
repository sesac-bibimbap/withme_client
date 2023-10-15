import { Form } from 'antd';

import { studyTechStackFilter_container } from './StudyTechStackFilter.style';
import { useState } from 'react';
import { RightBarFilter } from '../../../../common/components';

const StudyTechStackFilter = () => {
  const [selectedTechStacks, setSelectedTechStacks] = useState<string[]>([]);

  const handleTechStackSelect = (techStackName: string) => {
    if (selectedTechStacks.includes(techStackName)) {
      setSelectedTechStacks(
        selectedTechStacks.filter((item) => item !== techStackName),
      );
    } else {
      setSelectedTechStacks([...selectedTechStacks, techStackName]);
    }
  };
  console.log(selectedTechStacks);

  return (
    <div style={studyTechStackFilter_container}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <p>해시태그</p>
        <p>(최대 5개)</p>
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}
      >
        {selectedTechStacks.map((techStackName) => (
          <Form.Item<TechStack> key={techStackName} name="stackName">
            <input type="hidden" value={techStackName} />
          </Form.Item>
        ))}
        <RightBarFilter
          techStackName="react"
          techStackImage="/techStack/react.svg"
          onTechStackSelect={handleTechStackSelect}
        />
        <RightBarFilter
          techStackName="javascript"
          techStackImage="/techStack/javascript.svg"
          onTechStackSelect={handleTechStackSelect}
        />
        <RightBarFilter
          techStackName="c++"
          techStackImage="/techStack/c++.svg"
          onTechStackSelect={handleTechStackSelect}
        />
        <RightBarFilter
          techStackName="java"
          techStackImage="/techStack/java.svg"
          onTechStackSelect={handleTechStackSelect}
        />
      </div>
    </div>
  );
};

export default StudyTechStackFilter;
