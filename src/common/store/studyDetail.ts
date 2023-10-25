import { create } from 'zustand';

type studyDetailState = {
  detailStatusCode: number;
  setDetailStatusCode: (state: number) => void;
};

const useStudyDetailStore = create<studyDetailState>((set) => ({
  detailStatusCode: 0,
  setDetailStatusCode: (state: number) => set({ detailStatusCode: state }),
}));

export default useStudyDetailStore;
