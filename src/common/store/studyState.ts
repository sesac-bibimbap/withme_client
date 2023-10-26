import { create } from 'zustand';

type studyState = {
  isChat: boolean;
  chatOpen: () => void;
  chatClose: () => void;
  chatRoomId: string;
  setChatRoomId: (chatRoomId: string) => void;
  chatRoomTitle: string;
  setChatRoomTitle: (chatRoomTitle: string) => void;
};

const useStudyState = create<studyState>((set) => ({
  isChat: false,
  chatOpen: () => set({ isChat: true }),
  chatClose: () => set({ isChat: false }),

  chatRoomId: '',
  setChatRoomId: (chatRoomId: string) => set({ chatRoomId }),

  chatRoomTitle: '',
  setChatRoomTitle: (chatRoomTitle: string) => set({ chatRoomTitle }),
}));

export default useStudyState;
