import { useState, useRef, FormEvent, useEffect } from 'react';
import { Input, Space } from 'antd';
import type { InputRef } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus';
import {
  studyRoomChatRoomList_chatRoom,
  studyRoomChatRoomList_chatRoom_create,
  studyRoomChatRoomList_container,
  studyRoomChatRoomList_title,
  studyRoomChatRoomList_title_btn,
  studyRoomChatRoomList_title_wrapper,
} from '../StudyRoomRightSidebar.style';
import { socket } from '../../../../../common/utils/socket';
import useStudyState from '../../../../../common/store/studyState';

const StudyRoomChatRoomList = ({
  studyId,
  userId, // userEmail,
}: {
  studyId: number | undefined;
  userId: string;
  userEmail: string;
}) => {
  const [showCreateChatRoomForm, setShowCreateChatRoomForm] = useState(false);
  const [chatRoomList, setChatRoomList] = useState<ChatRoomList[]>([]);
  const inputRef = useRef<InputRef>(null);
  const { chatOpen, setChatRoomId, setChatRoomTitle } = useStudyState();

  const onClickShowForm = () => setShowCreateChatRoomForm((prev) => !prev);
  const onSubmitCreateChatRoom = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputRef.current) return;
    const chatRoomName = inputRef.current.input?.value;
    // TODO: 채팅방 생성
    socket.emit('createChatRoom', {
      userId,
      studyId,
      chatRoomName,
      ownerId: userId,
    });
    if (inputRef.current.input) inputRef.current.input.value = '';
    setShowCreateChatRoomForm((prev) => !prev);
  };
  const onClickEnterChatRoom = (_id: string, chatRoomName: string) => {
    setChatRoomTitle(chatRoomName);
    setChatRoomId(_id);
    chatOpen();
  };

  useEffect(() => {
    const fetchChatRoom = (fetchChatRoomList: ChatRoomList[]) => {
      const fetchStudyChatRoomList = fetchChatRoomList.filter(
        (fetchChatRoom) => fetchChatRoom.studyId === studyId && fetchChatRoom,
      );
      setChatRoomList(fetchStudyChatRoomList);
    };
    socket.on('fetch-chat-room', fetchChatRoom);
    return () => {
      socket.off('fetch-chat-room');
      setChatRoomList([]);
    };
  }, [studyId]);

  useEffect(() => {
    const newChatRoom = (newChatRoomList: ChatRoomList) => {
      if (newChatRoomList.studyId === studyId)
        setChatRoomList((prev) => [...prev, newChatRoomList]);
    };
    socket.on('new-chat-room', newChatRoom);
    return () => {
      socket.off('new-chat-room');
    };
  }, [studyId]);

  return (
    <div style={studyRoomChatRoomList_container}>
      <div style={studyRoomChatRoomList_title_wrapper}>
        <div style={studyRoomChatRoomList_title}>채팅룸</div>
        <button
          onClick={onClickShowForm}
          style={studyRoomChatRoomList_title_btn}
        >
          {showCreateChatRoomForm ? (
            <FontAwesomeIcon icon={faMinus} style={{ color: '#ffffff' }} />
          ) : (
            <FontAwesomeIcon icon={faPlus} style={{ color: '#ffffff' }} />
          )}
        </button>
      </div>
      {showCreateChatRoomForm ? (
        <div style={studyRoomChatRoomList_chatRoom_create}>
          <form onSubmit={onSubmitCreateChatRoom}>
            <Space.Compact style={{ width: '100%', paddingBottom: '5px' }}>
              <Input
                placeholder="채팅방 이름을 작성해주세요."
                maxLength={10}
                ref={inputRef}
                showCount
              />
              <button
                type="submit"
                style={{
                  minWidth: '20%',
                  background: '#F6C54D',
                  fontWeight: 'bold',
                  border: 'none',
                  borderRadius: '0px 5px 5px 0px',
                  cursor: 'pointer',
                }}
              >
                생성
              </button>
            </Space.Compact>
          </form>
        </div>
      ) : null}
      <div>
        {chatRoomList.map(({ chatRoomName, userId, _id }) => (
          <button
            style={studyRoomChatRoomList_chatRoom}
            key={userId}
            onClick={() => onClickEnterChatRoom(_id, chatRoomName)}
          >
            # {chatRoomName}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StudyRoomChatRoomList;

type ChatRoomList = {
  userId: string;
  studyId: number;
  chatRoomName: string;
  _id: string;
  __v: number;
};
