import { useState } from 'react';
import { RightBarFilter } from '../../../../common/components';
import { useTechStakQuery } from '../../hooks/queries/useQueries';
import {
  studySearchFilter_button_filter,
  studySearchFilter_item_scroll,
  studySearchFilter_text_title,
  studySearchFilter_wrapper,
} from './StudySearchFilter.style';

const StudySearchFilter = () => {
  const { data, isLoading } = useTechStakQuery();

  const [selectedTechStacks, setSelectedTechStacks] = useState<number[]>([]);

  const handleTechStackSelect = (techStackId: number) => {
    selectedTechStacks.length !== 5
      ? selectedTechStacks.includes(techStackId)
        ? setSelectedTechStacks(
            selectedTechStacks.filter((item) => item !== techStackId),
          )
        : setSelectedTechStacks([...selectedTechStacks, techStackId])
      : setSelectedTechStacks(
          selectedTechStacks.filter((item) => item !== techStackId),
        );
  };

  return (
    <>
      {!isLoading ? (
        <div style={studySearchFilter_wrapper}>
          <p style={studySearchFilter_text_title}>필터</p>
          <div style={studySearchFilter_item_scroll}>
            {data?.map((techStack: StudyStacks) => (
              <RightBarFilter
                key={techStack.id}
                techStackName={techStack.stackName}
                techStackImage={techStack.stackImg}
                techStackId={techStack.id}
                techStackIds={selectedTechStacks}
                onTechStackSelect={handleTechStackSelect}
                filterStyle={studySearchFilter_button_filter}
              />
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default StudySearchFilter;
