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
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const StudyListBoard = () => {
  const [offset, setOffset] = useState(0);
  const limit = 20;
  const { data, isLoading } = useStudyListQuery(limit, offset);
  console.log('🚀  data:', data);

  const list = useRef<StudyListType[]>([]);

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });

  useEffect(() => {
    if (!inView) {
      return;
    }
    list.current = [...list.current, data?.[0]];
    setOffset(limit + offset);
  }, [inView]);

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
          {list.current.flat().map((study: StudyListType) => (
            <StudyItem
              key={study.id}
              title={study.recruit.title}
              teamName={study.name}
              participants={study.participants.length}
              attendantsLimit={study.attendantsLimit}
              detail={study.content}
              hasTag={study.techStacks}
            />
          ))}
          <div ref={ref}></div>
        </div>
      </div>
    </>
  );
};

export default StudyListBoard;
