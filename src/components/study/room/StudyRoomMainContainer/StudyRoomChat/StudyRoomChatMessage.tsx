import { useEffect, useRef } from 'react';
import {
  chatMessage_container,
  chatMessage_contents_wrapper,
  chatMessage_profileImg,
} from './StudyRoomChat.style';

const StudyRoomChatMessage = ({ chatMessages }) => {
  console.log('✔️  chatMessages:', chatMessages);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current)
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [chatMessages]);

  return (
    <>
      {chatMessages ? (
        <div ref={scrollRef} style={{ height: '90%', overflowY: 'scroll' }}>
          {chatMessages.map(
            ({ userProfileImgUrl, userNickname, createdAt, contents, _id }) => (
              <div key={_id} style={chatMessage_container}>
                <div style={chatMessage_profileImg}>
                  <img src={userProfileImgUrl} alt="" />
                </div>
                <div>
                  <div style={chatMessage_contents_wrapper}>
                    <div style={{ fontSize: '14px' }}>{userNickname}</div>
                    <div style={{ fontSize: '11px', color: '#DADADA' }}>
                      {createdAt}
                    </div>
                  </div>
                  <div style={{ marginTop: '5px' }}>
                    {contents.map((content, idx) => (
                      <div key={idx}>{content}</div>
                    ))}
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      ) : null}
    </>
  );
};

export default StudyRoomChatMessage;
