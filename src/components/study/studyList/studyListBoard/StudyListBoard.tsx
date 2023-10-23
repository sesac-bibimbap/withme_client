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
  const list = useRef<StudyListType[]>([]);
  const { ref, inView } = useInView({
    threshold: 1.0,
    skip: +studies.data[0].length < 5,
  });
  const [searchFilter, setSearchFilter] = useState('');

  useEffect(() => {
    if (!inView) return;
    list.current = [...list.current, studies.data?.[0]];
    setOffset(limit + offset);
  }, [inView]);

  useEffect(() => {
    if (searchFilter !== studies.searchFilter) {
      list.current = [studies.data?.[0]];
      setOffset(limit + offset);
    }
    setSearchFilter(studies.searchFilter);
  }, [studies.searchFilter]);

  return (
    <>
      {!user.isLoading && !studies.isLoading ? (
        <div style={studyList_background}>
          <h2>개설된 스터디 목록</h2>
          {/* <Input
            size="large"
            placeholder="검색어를 입력해주세요"
            prefix={<SearchOutlined style={{ color: '#9F9C9C' }} />}
            style={studyList_input_search}
          /> */}
          <div style={studyList_item_background}>
            {list.current.flat().length !== 0 ? (
              <>
                {list.current
                  .flat()
                  .map((study: StudyListType, index: number) => (
                    <MemoedStudyItem key={index} study={study} user={user} />
                  ))}
              </>
            ) : (
              <p>스터디 목록이 없습니다.</p>
            )}
            <div ref={ref}></div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default StudyListBoard;
