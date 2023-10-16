import { Input } from 'antd';
import {
  studyList_background,
  studyList_input_search,
  studyList_item_background,
} from './StudyListBoard.style';
import StudyItem from '../studyItem/StudyItem';
import { SearchOutlined } from '@ant-design/icons';
import { useStudyListQuery } from '../../hooks/queries/useQueries';
import '../../study.css';

const StudyListBoard = () => {
  const { data, isLoading } = useStudyListQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div style={studyList_background}>
        <Input
          size="large"
          placeholder="검색어를 입력해주세요"
          prefix={<SearchOutlined style={{ color: '#9F9C9C' }} />}
          style={studyList_input_search}
        />
        <div style={studyList_item_background}>
          {data[0].map((study: StudyListType) => (
            <StudyItem
              key={study.id}
              title={study.recruit.title}
              teamName={study.name}
              attendantsLimit={study.attendantsLimit}
              detail={study.content}
              hasTag={study.techStacks}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default StudyListBoard;
