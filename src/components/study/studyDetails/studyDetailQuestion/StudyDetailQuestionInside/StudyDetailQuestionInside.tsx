import { StudyDetailQuestionInside_container } from './StudyDetailQuestionInside.style';
import StudyDetailQuestionInsideAnswer from './StudyDetailQuestionInsideAnswer/StudyDetailQuestionInsideAnswer';
import StudyDetailQuestionInsideInquiry from './StudyDetailQuestionInsideInquiry/StudyDetailQuestionInsideInquiry';

const StudyDetailQuestionInside = ({ item }: { item: Inquiry }) => {
  return (
    <div style={StudyDetailQuestionInside_container}>
      <StudyDetailQuestionInsideInquiry item={item} />
      <StudyDetailQuestionInsideAnswer item={item} />
    </div>
  );
};

export default StudyDetailQuestionInside;
