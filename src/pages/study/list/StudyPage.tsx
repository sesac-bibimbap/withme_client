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
  const user = useProfileQuery();
  const [offset, setOffset] = useState(0);
  const limit = 20;
  const studies = useStudyListQuery(limit, offset);

  return (
    <>
      {!user.isLoading && !studies.isLoading ? (
        <>
          <StudyListBoard
            user={user}
            studies={studies}
            setOffset={setOffset}
            limit={limit}
            offset={offset}
          />
          <div style={studyPage_right_wrapper}>
            <StudySearchFilter />
            {/* <StudyBookmark /> */}
            <StudyBookmark />
            {/* <StudyBookmark user={user} bookmarkStyle={{ height: '100%' }} /> */}
          </div>
        </>
      ) : null}
    </>
  );
};

export default StudyPage;
