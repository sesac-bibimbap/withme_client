import {
  studyTechStackFilter_container,
  studyTechStackFilter_p,
  studyTechStackFilter_p_hashTag,
  studyTechStackFilter_p_max,
  studyTechStackFilter_warp,
} from './StudyTechStackFilter.style';
import { useEffect, useState } from 'react';
import { RightBarFilter } from '../../../../common/components';
import { useTechStakQuery } from '../../hooks/queries/useQueries';
import '../../study.css';

const StudyTechStackFilter = ({
  setTechStackId,
}: {
  setTechStackId: (stackIds: number[]) => void;
}) => {
  const { data, isLoading } = useTechStakQuery();

  const [selectedTechStacks, setSelectedTechStacks] = useState<number[]>([]);

  useEffect(() => {
    setTechStackId(selectedTechStacks);
  }, [selectedTechStacks, setTechStackId]);

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
        <div style={studyTechStackFilter_container}>
          <div style={studyTechStackFilter_p}>
            <p style={studyTechStackFilter_p_hashTag}>해시태그</p>
            <p style={studyTechStackFilter_p_max}>(최대 5개)</p>
          </div>
          <div
            className="studyTechStackFilter_warp"
            style={studyTechStackFilter_warp}
          >
            {data?.map((techStack: StudyStacks) => (
              <RightBarFilter
                key={techStack.id}
                techStackName={techStack.stackName}
                techStackImage={techStack.stackImg}
                techStackId={techStack.id}
                techStackIds={selectedTechStacks}
                onTechStackSelect={handleTechStackSelect}
              />
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default StudyTechStackFilter;
