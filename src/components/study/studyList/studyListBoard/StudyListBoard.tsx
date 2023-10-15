import { Input } from 'antd';
import {
  studyList_background,
  studyList_button_search,
  studyList_item_background,
} from './StudyListBoard.style';
import StudyItem from '../studyItem/StudyItem';
import { SearchOutlined } from '@ant-design/icons';
import { useStudyListQuery } from '../../hooks/queries/useQueries';

const StudyListBoard = () => {
  const { data, isLoading } = useStudyListQuery();
  console.log('🚀  data:', data);
  return (
    <>
      <div style={studyList_background}>
        <Input
          size="large"
          placeholder="검색어를 입력해주세요"
          prefix={<SearchOutlined style={{ color: '#9F9C9C' }} />}
          style={studyList_button_search}
        />
        <div style={studyList_item_background}>
          {data[0].map((study: StudyListType) => (
            // <li key={study.id}>{study.name}</li>
            <StudyItem
              key={study.id}
              title={study.recuit?.title}
              teamName={study.name}
              attendantsLimit={study.attendantsLimit}
              detail={study.content}
              hasTag={study.techStack}
            />
          ))}
        </div>
        {/* <div style={studyList_item_background}> */}
        {/* <StudyItem /> */}
        {/* </div> */}
      </div>
    </>
  );
};

export default StudyListBoard;
