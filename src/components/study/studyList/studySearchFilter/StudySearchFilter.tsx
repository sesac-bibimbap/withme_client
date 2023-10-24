import { useState } from 'react';
import { RightBarFilter } from '../../../../common/components';
import { useTechStakQuery } from '../../hooks/queries/useQueries';
import {
  studySearchFilter_button_filter,
  studySearchFilter_item_scroll,
  studySearchFilter_text_title,
  studySearchFilter_wrapper,
} from './StudySearchFilter.style';

type studySearchFilterType = {
  setFilter: (filter: string) => void;
  setOffset: (offset: number) => void;
};

const StudySearchFilter = ({ setFilter, setOffset }: studySearchFilterType) => {
  const { data, isLoading } = useTechStakQuery();

  const [selectedTechStacks, setSelectedTechStacks] = useState<number[]>([]);

  const handleTechStackSelect = (techStackId: number) => {
    const newSelectedTechStacks =
      selectedTechStacks.length !== 5
        ? selectedTechStacks.includes(techStackId)
          ? selectedTechStacks.filter((item) => item !== techStackId)
          : [...selectedTechStacks, techStackId]
        : selectedTechStacks.filter((item) => item !== techStackId);
    const newFilter = newSelectedTechStacks.join(',');
    setFilter(newFilter);
    setSelectedTechStacks(newSelectedTechStacks);
    setOffset(0);
  };

  return (
    <>
      {!isLoading ? (
        <div style={studySearchFilter_wrapper}>
          <p style={studySearchFilter_text_title}>필터</p>
          <div
            className="studySearchFilter_item_scroll"
            style={studySearchFilter_item_scroll}
          >
            {data?.map((techStack: TechStack) => (
              <RightBarFilter
                key={techStack.id}
                techStackName={techStack.stackName}
                techStackImage={techStack.stackImg}
                techStackId={Number(techStack.id)}
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
