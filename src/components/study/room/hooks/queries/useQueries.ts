import { useQuery } from '@tanstack/react-query';
import {
  fetchAnnouncementData,
  fetchChatData,
  studyDetail,
} from '../../../api';
import { ChatMessageType } from '../../StudyRoomMainContainer/StudyRoomChat/StudyRoomChat';

const useFetchStudyQuery = (studyId: number | undefined) => {
  const { data, isLoading } = useQuery(
    ['study', studyId],
    () => studyDetail(studyId),
    {
      staleTime: 2 * 60 * 1000, // 2분
    },
  );

  return { data, isLoading };
};

const useFetchChatQuery = (chatRoomId: string) => {
  const { data, isLoading } = useQuery<ChatMessageType[]>(
    ['fetchChatData', chatRoomId],
    () => fetchChatData(chatRoomId),
  );

  return { data, isLoading };
};

const useFetchAnnouncementQuery = (studyId: number | undefined) => {
  const { data, isLoading } = useQuery<Announcement>(
    ['fetchAnnouncementData', studyId],
    () => fetchAnnouncementData(studyId),
  );

  return { data, isLoading };
};

export { useFetchStudyQuery, useFetchChatQuery, useFetchAnnouncementQuery };
