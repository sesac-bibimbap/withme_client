import { Form, Input } from 'antd';

import {
  studyTechStackFilter_container,
  studyTechStackFilter_p,
  studyTechStackFilter_p_hashTag,
  studyTechStackFilter_p_max,
  studyTechStackFilter_warp,
} from './StudyTechStackFilter.style';
import { useState } from 'react';
import { RightBarFilter } from '../../../../common/components';
import { useTechStakQuery } from '../../hooks/queries/useQueries';

const StudyTechStackFilter = () => {
  const { data, isLoading } = useTechStakQuery();
  console.log('🦄  data:', data);
  const [selectedTechStacks, setSelectedTechStacks] = useState<number[]>([]);

  const selectedTechStacksTypeChange = selectedTechStacks.join(' ');
  console.log(selectedTechStacksTypeChange);

  const handleTechStackSelect = (techStackId: number) => {
    if (selectedTechStacks.includes(techStackId)) {
      setSelectedTechStacks(
        selectedTechStacks.filter((item) => item !== techStackId),
      );
    } else {
      setSelectedTechStacks([...selectedTechStacks, techStackId]);
    }
  };
  console.log(selectedTechStacks);

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }

  return (
    <div style={studyTechStackFilter_container}>
      <div style={studyTechStackFilter_p}>
        <p style={studyTechStackFilter_p_hashTag}>해시태그</p>
        <p style={studyTechStackFilter_p_max}>(최대 5개)</p>
      </div>
      <div style={studyTechStackFilter_warp}>
        {/* <Form.Item<TechStack> name="id">
          <Input type="hidden" value={selectedTechStacksTypeChange} />
        </Form.Item> */}

        {data?.map((techStack: StudyStacks) => (
          <RightBarFilter
            key={techStack.id}
            techStackName={techStack.stackName}
            techStackImage={techStack.stackImg}
            techStackId={techStack.id}
            onTechStackSelect={handleTechStackSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default StudyTechStackFilter;
