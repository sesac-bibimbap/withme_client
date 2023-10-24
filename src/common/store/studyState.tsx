import { create } from 'zustand';

type studyState = {
  isChat: boolean;
  chatOpen: () => void;
  chatClose: () => void;
  chatRoomId: string;
  setChatRoomId: (chatRoomId: string) => void;
};

const useStudyState = create<studyState>((set) => ({
  isChat: false,
  chatOpen: () => set({ isChat: true }),
  chatClose: () => set({ isChat: false }),
  chatRoomId: '',
  setChatRoomId: (chatRoomId: string) => set({ chatRoomId }),
}));

export default useStudyState;
