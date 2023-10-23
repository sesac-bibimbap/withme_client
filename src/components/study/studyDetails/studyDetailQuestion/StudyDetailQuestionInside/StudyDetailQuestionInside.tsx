import { useState } from 'react';
import { StudyDetailQuestionInside_container } from './StudyDetailQuestionInside.style';
import StudyDetailQuestionInsideAnswer from './StudyDetailQuestionInsideAnswer/StudyDetailQuestionInsideAnswer';
import StudyDetailQuestionInsideInquiry from './StudyDetailQuestionInsideInquiry/StudyDetailQuestionInsideInquiry';

const StudyDetailQuestionInside = ({ item }: { item: Inquiry }) => {
  const [showInput, setShowInput] = useState(false);

  return (
    <div style={StudyDetailQuestionInside_container}>
      <StudyDetailQuestionInsideInquiry
        item={item}
        setShowInput={setShowInput}
      />
      <StudyDetailQuestionInsideAnswer item={item} showInput={showInput} />
    </div>
  );
};

export default StudyDetailQuestionInside;
