import { useState, useEffect } from 'react';
import {
  studyRoomMemberList_container,
  studyRoomMemberList_count,
  studyRoomMemberList_member_container,
  studyRoomMemberList_title,
  studyRoomMemberList_title_wrapper,
} from '../StudyRoomRightSidebar.style';
import { socket } from '../../../../../common/utils/socket';
import StudyRoomMember from './StudyRoomMember';

const StudyRoomMemberList = ({ data, userId }: StudyDataType) => {
  const { id, participants } = data;
  const [isConnected, setIsConnected] =
    useState<(User & CurrentMemberStatus)[]>(participants);

  // useEffect(() => {
  //   const fetchMemberStatus = (fetchMemberStatus) => {
  //     const participantsStatus = participants.map((participant) => {
  //       const memberStatus = fetchMemberStatus.find(
  //         ({ userId, studyId }) => userId === participant.id
  //       );
  //       return { ...participant, ...memberStatus };
  //     });
  //     setIsConnected((prev) => [...prev, ...participantsStatus]);
  //   };
  //   socket.on('fetch-member-status', fetchMemberStatus);
  //   return () => {
  //     socket.off('fetch-member-status');
  //   };
  // }, [participants, id]);

  // TODO: on/off 여부 구현
  useEffect(() => {
    // const newMemberStatus = (currentMemberStatus: CurrentMemberStatus[]) => {
    // setIsConnected((prev) => {
    //   const aaa = prev.map((participant) => {
    //     const memberStatus = currentMemberStatus.find(
    //       ({ userId, studyId }) =>
    //         userId === participant.id && studyId === participant.studyId,
    //     );
    //     return memberStatus && memberStatus.studyId === id
    //       ? { ...participant, ...memberStatus }
    //       : participant;
    //   });
    //   console.log('✔️  aaa:', aaa);
    //   return aaa;
    // });
    //   };
    // };
    const fetchMemberStatus = (fetchMemberStatus) => {
      const participantsStatus = participants.map((participant) => {
        const memberStatus = fetchMemberStatus.find(
          ({ userId, studyId }) => userId === participant.id,
        );
        console.log('✔️  memberStatus:', memberStatus);
        return { ...participant, ...memberStatus };
      });
      setIsConnected(participantsStatus);
      // setIsConnected((prev) => [...prev, ...participantsStatus]);
    };
    socket.on('new-member-status', fetchMemberStatus);
    return () => {
      socket.off('new-member-status');
      console.log('✔️  id:', id);
      socket.emit('leaveStudyRoom', { studyId: id, userId });
    };
  }, [participants, id, userId]);

  // TODO: 타입 맞추기
  // const isConnected = true;

  return (
    <div style={studyRoomMemberList_container}>
      <div style={studyRoomMemberList_title_wrapper}>
        <div style={studyRoomMemberList_title}>스터디원</div>
        <div style={studyRoomMemberList_count}>{participants.length}</div>
      </div>
      <div style={studyRoomMemberList_member_container}>
        {isConnected.map(({ profile: { nickname, profileImg }, status }) => (
          <StudyRoomMember
            key={nickname}
            nickname={nickname}
            profileImg={profileImg}
            status={status}
          />
        ))}
      </div>
    </div>
  );
};

export default StudyRoomMemberList;

interface CurrentMemberStatus {
  _id?: string;
  userId?: string;
  studyId?: number;
  status?: boolean;
  __v?: number;
}
