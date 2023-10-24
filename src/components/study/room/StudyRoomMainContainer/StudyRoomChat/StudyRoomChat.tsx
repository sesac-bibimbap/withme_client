import { FormEvent, useEffect, useRef, useState } from 'react';
import useStudyState from '../../../../../common/store/studyState';
import { useFetchChatQuery } from '../../hooks/queries/useQueries';
import StudyRoomChatMessage from './StudyRoomChatMessage';
import { socket } from '../../../../../common/utils/socket';
import useCacheInstance from '../../../../../common/utils/cache';
import StudyRoomChatInput from './StudyRoomChatInput';
import { InputRef } from 'antd';
import { chatRoom_container, chatRoom_send_form } from './StudyRoomChat.style';

const StudyRoomChat = ({ studyId }: any) => {
  const { chatRoomId } = useStudyState();
  const { data } = useFetchChatQuery(chatRoomId);
  const { cache } = useCacheInstance();
  const user = cache.getQueryData<User>(['userProfile']);
  const inputRef = useRef<InputRef>(null);
  const [chatMessages, setChatMessages] = useState(data);
  console.log('✔️  chatMessages:', chatMessages);
  console.log('✔️  data:', data);

  useEffect(() => {
    const receiveNewChatMessage = async (newChatMessage: any) => {
      console.log('✔️  newChatMessage:', newChatMessage);
      await cache.cancelQueries(['fetchChatData', chatRoomId]);
      const addChatMessages = cache.setQueryData<ChatMessageType[]>(
        ['fetchChatData', chatRoomId],
        (oldData) => {
          if (!oldData) return [newChatMessage];
          if (oldData.at(-1)?.userId === newChatMessage?.userId) {
            oldData.at(-1)?.contents.push(newChatMessage.contents[0]);
            socket.emit('sameChatUser', {
              oldDataId: oldData.at(-1)?._id,
              messageId: newChatMessage._id,
              chatRoomId,
              userId: newChatMessage?.userId,
              studyId,
              userProfileImgUrl: newChatMessage?.userProfileImgUrl,
              userNickname: newChatMessage?.userNickname,
              createdAt: null,
              contents: oldData.at(-1)?.contents,
            });
            cache.invalidateQueries(['userProfile']);
            console.log('✔️  oldData:', oldData);
            return [...oldData];
          }
          console.log('✔️  [...oldData, newChatMessage]:', [
            ...oldData,
            newChatMessage,
          ]);
          cache.invalidateQueries(['userProfile']);
          return [...oldData, newChatMessage];
        },
      );
      console.log('✔️  addChatMessages:', addChatMessages);
      if (addChatMessages) setChatMessages(addChatMessages);
    };

    socket.on('new-chat-message', receiveNewChatMessage);
    return () => {
      socket.off('new-chat-message');
    };
  }, [cache, chatRoomId, user?.id, studyId]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const onSubmitSendNewChatMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputRef.current) return;
    const contents = inputRef.current.input?.value;
    socket.emit('newChatSend', {
      chatRoomId,
      userId: user?.id,
      studyId,
      userProfileImgUrl: user?.profile.profileImg,
      userNickname: user?.profile.nickname,
      createdAt: null,
      contents: [contents],
    });
    if (inputRef.current.input) {
      inputRef.current.input.value = '';
    }
  };

  return (
    <div style={chatRoom_container}>
      <StudyRoomChatMessage chatMessages={data} />
      <form onSubmit={onSubmitSendNewChatMessage} style={chatRoom_send_form}>
        <StudyRoomChatInput inputRef={inputRef} />
      </form>
    </div>
  );
};

export default StudyRoomChat;

export type ChatMessageType = {
  chatRoomId: string;
  contents: string[];
  createdAt: Date;
  studyId: number;
  userId: string;
  userNickname: string;
  userProfileImgUrl: string;
  __v?: number;
  _id?: string;
};
