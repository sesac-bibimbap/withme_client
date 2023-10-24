import { useParams } from 'react-router-dom';
import StudyRoomMainContainer from '../../../components/study/room/StudyRoomMainContainer/StudyRoomMainContainer';
import StudyRoomRightSidebar from '../../../components/study/room/StudyRoomRightSidebar/StudyRoomRightSidebar';
import { useFetchStudyQuery } from '../../../components/study/room/hooks/queries/useQueries';
import { useEffect } from 'react';
import { socket } from '../../../common/utils/socket';
import useCacheInstance from '../../../common/utils/cache';
import useStudyState from '../../../common/store/studyState';
import { Spin } from 'antd';

const StudyRoomPage = () => {
  // 스터디 정보 가져오기
  const { id } = useParams();
  const { data, isLoading } = useFetchStudyQuery(Number(id));
  const { cache } = useCacheInstance();
  const user = cache.getQueryData<AuthType>(['userProfile']);
  const { id: userId, email: userEmail } = user ?? { id: '', email: '' };
  const { chatClose } = useStudyState();

  useEffect(() => {
    if (data) {
      socket.emit('enterStudyRoom', {
        userId,
        userEmail,
        studyId: id,
        studyName: data.name,
      });
    }
    chatClose();
  }, [data, id, userId, userEmail, chatClose]);

  return (
    <>
      {!isLoading ? (
        <div style={{ display: 'flex', width: '100%', height: '100%' }}>
          <StudyRoomMainContainer data={data} />
          <StudyRoomRightSidebar
            data={data}
            userId={userId}
            userEmail={userEmail}
          />
        </div>
      ) : (
        <Spin size="large" />
      )}
    </>
  );
};

export default StudyRoomPage;
