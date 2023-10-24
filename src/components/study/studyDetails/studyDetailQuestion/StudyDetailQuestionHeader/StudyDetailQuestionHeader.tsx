import {
  StudyDetailQuestionHeader_container,
  StudyDetailQuestionHeader_id,
} from './StudyDetailQuestionHeader.style';

const StudyDetailQuestionHeader = ({ item }: { item: Inquiry }) => {
  const { id, title } = item;
  return (
    <>
      <div style={StudyDetailQuestionHeader_container}>
        <p style={StudyDetailQuestionHeader_id}>#{id}</p>
        <p>{title}</p>
      </div>
    </>
  );
};

export default StudyDetailQuestionHeader;
