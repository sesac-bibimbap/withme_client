import { useState } from 'react';
import { StudyDetailQuestionInside_container } from './StudyDetailQuestionInside.style';
import StudyDetailQuestionInsideAnswer from './StudyDetailQuestionInsideAnswer/StudyDetailQuestionInsideAnswer';
import StudyDetailQuestionInsideInquiry from './StudyDetailQuestionInsideInquiry/StudyDetailQuestionInsideInquiry';

const StudyDetailQuestionInside = ({
  item,
  studyId,
}: {
  item: Inquiry;
  studyId: number | undefined;
}) => {
  const [showInput, setShowInput] = useState(false);
  console.log(showInput);

  return (
    <div style={StudyDetailQuestionInside_container}>
      <StudyDetailQuestionInsideInquiry
        item={item}
        setShowInput={setShowInput}
        showInput={showInput}
      />
      <StudyDetailQuestionInsideAnswer
        item={item}
        showInput={showInput}
        studyId={studyId}
      />
    </div>
  );
};

export default StudyDetailQuestionInside;
