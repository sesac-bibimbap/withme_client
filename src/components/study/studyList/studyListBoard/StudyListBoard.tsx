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

type studyListBoardType = {
  user: UserData;
  studies: Studies;
  setOffset: (offset: number) => void;
  limit: number;
  offset: number;
};

const StudyListBoard = ({
  user,
  studies,
  setOffset,
  limit,
  offset,
}: studyListBoardType) => {
  const list = useRef<StudyListType[]>([]);
  const { ref, inView } = useInView({ threshold: 0 });

  useEffect(() => {
    if (!inView) return;
    list.current = [...list.current, studies.data?.[0]];
    setOffset(limit + offset);
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
            {list.current.flat().map((study: StudyListType) => {
              return (
                <MemoedStudyItem key={study.id} study={study} user={user} />
              );
            })}
            <div ref={ref}></div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default StudyListBoard;
