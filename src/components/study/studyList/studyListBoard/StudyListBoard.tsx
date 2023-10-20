import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import MemoedStudyItem from '../studyItem/StudyItem';
import {
  studyList_background,
  studyList_input_search,
  studyList_item_background,
} from './StudyListBoard.style';
import '../../study.css';

const StudyListBoard = ({ user, studies, setOffset, limit, offset }) => {
  const list = useRef<StudyListType[]>([]);
  const { ref, inView } = useInView({ threshold: 0 });
  // const setBookmarked = useBookmarkedStore((state) => state.setBookmarked);

  useEffect(() => {
    if (!inView) return;
    list.current = [...list.current, studies.data?.[0]];
    setOffset(limit + offset);
    // setBookmarked(user.bookmarkedStudies);
  }, [inView]);

  return (
    <>
      {!user.isLoading && !studies.isLoading ? (
        <div style={studyList_background}>
          <Input
            size="large"
            placeholder="검색어를 입력해주세요"
            prefix={<SearchOutlined style={{ color: '#9F9C9C' }} />}
            style={studyList_input_search}
          />
          <div style={studyList_item_background}>
            {list.current.flat().map((study: StudyListType, idx) => {
              return <MemoedStudyItem key={idx} study={study} user={user} />;
            })}
            <div ref={ref}></div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default StudyListBoard;
