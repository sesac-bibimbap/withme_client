import { useEffect, useState } from 'react';
import {
  StudyBookmark,
  StudyListBoard,
  StudySearchFilter,
} from '../../../components';
import { useProfileQuery } from '../../../components/auth/hooks/queries/useQueries';
import { useStudyListQuery } from '../../../components/study/hooks/queries/useQueries';
import { studyPage_right_wrapper } from './StudyPage.style';

const StudyPage = () => {
  const user = useProfileQuery();
  const [offset, setOffset] = useState(0);
  const [filter, setFilter] = useState('');

  const limit = 20;
  const studies = useStudyListQuery(limit, offset, filter);

  return (
    <>
      {!user.isLoading && !studies.isLoading ? (
        <>
          <StudyListBoard
            user={user}
            studies={studies.data}
            // studies={studies.data}
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
