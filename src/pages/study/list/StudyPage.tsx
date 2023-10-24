import { useState } from 'react';
import {
  StudyBookmark,
  StudyListBoard,
  StudySearchFilter,
} from '../../../components';
import { useProfileQuery } from '../../../components/auth/hooks/queries/useQueries';
import { useStudyListQuery } from '../../../components/study/hooks/queries/useQueries';
import { studyPage_right_wrapper } from './StudyPage.style';

const StudyPage = () => {
  const { data: userData, isLoading: userIsLoading } = useProfileQuery();
  const [offset, setOffset] = useState(0);
  const [filter, setFilter] = useState('');

  const limit = 20;
  const { data: studyData, isLoading: studyIsLoading } = useStudyListQuery(
    limit,
    offset,
    filter,
  );

  return (
    <>
      {!userIsLoading && !studyIsLoading ? (
        <>
          <StudyListBoard
            userData={userData}
            userIsLoading={userIsLoading}
            studyData={studyData}
            studyIsLoading={studyIsLoading}
            setOffset={setOffset}
            limit={limit}
            offset={offset}
          />
          <div style={studyPage_right_wrapper}>
            <StudySearchFilter setFilter={setFilter} setOffset={setOffset} />
            <StudyBookmark />
          </div>
        </>
      ) : null}
    </>
  );
};

export default StudyPage;
