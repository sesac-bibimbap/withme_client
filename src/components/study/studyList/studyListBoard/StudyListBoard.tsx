import { useEffect, useRef, useState } from 'react';
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
  console.log('🚨🚨  studies:', studies.isFilter);
  const list = useRef<StudyListType[]>([]);
  const { ref, inView } = useInView({ threshold: 0 });
  const [isFilter, setIsFilter] = useState(false);

  //Todo: 필터를 여러개 누를 때마다 새목록으로 교체가 안됨
  useEffect(() => {
    if (!inView) return;
    list.current = [...list.current, studies.data?.[0]];
    setOffset(limit + offset);
  }, [inView]);

  useEffect(() => {
    if (isFilter !== studies.isFilter) {
      list.current = [];
    }
    setIsFilter(studies.isFilter);
  }, [studies.isFilter]);

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
            {list.current.flat().map((study: StudyListType, index: number) => {
              return <MemoedStudyItem key={index} study={study} user={user} />;
            })}
            {/* {+studies.data[1] === 20 ? <div ref={ref}></div> : null} */}
            <div ref={ref}></div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default StudyListBoard;
