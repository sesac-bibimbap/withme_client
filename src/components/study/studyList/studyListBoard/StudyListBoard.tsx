import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import MemoedStudyItem from '../studyItem/StudyItem';
import {
  studyList_background,
  studyList_item_background,
} from './StudyListBoard.style';
import '../../study.css';

type studyListBoardType = {
  userData?: User;
  userIsLoading: boolean;
  studyData?: Studies;
  studyIsLoading: boolean;
  setOffset: (offset: number) => void;
  limit: number;
  offset: number;
};

const StudyListBoard = ({
  userData,
  userIsLoading,
  studyData,
  studyIsLoading,
  setOffset,
  limit,
  offset,
}: studyListBoardType) => {
  const list = useRef<Study[]>([]);

  let keyCount = 0;

  for (const key in studyData?.data[0]) {
    keyCount++;
  }

  const { ref, inView } = useInView({
    threshold: 1.0,
    skip: keyCount < 5,
  });

  const [searchFilter, setSearchFilter] = useState('');

  useEffect(() => {
    if (!inView) return;
    if (!studyData) return;
    list.current = [...list.current, studyData.data[0]];
    setOffset(limit + offset);
  }, [inView]);

  useEffect(() => {
    if (!studyData) return;

    if (searchFilter !== studyData.searchFilter) {
      list.current = [studyData.data[0]];
      setOffset(limit + offset);
    }
    setSearchFilter(studyData.searchFilter);
  }, [studyData?.searchFilter]);

  return (
    <>
      {!userIsLoading && !studyIsLoading ? (
        <div style={studyList_background}>
          <h2>개설된 스터디 목록</h2>
          <div style={studyList_item_background}>
            {list.current.flat().length !== 0 ? (
              <>
                {list.current.flat().map((study: Study, index: number) => (
                  <MemoedStudyItem
                    key={index}
                    study={study}
                    userData={userData}
                  />
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
