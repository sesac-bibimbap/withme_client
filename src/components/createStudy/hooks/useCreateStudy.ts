// import { AxiosError } from 'axios';
// import { useNavigate } from 'react-router-dom';
import { createStudyType } from '../../../types';
import { createStudy } from '../api';

const useCreateStudy = () => {
  const handleStudySubmit = async (createStudyData: createStudyType) => {
    try {
      await createStudy(createStudyData);
    } catch (err) {
      console.log('스터디 개설 실패');
    }
  };
  return { handleStudySubmit };
};

export default useCreateStudy;
