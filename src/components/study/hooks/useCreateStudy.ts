import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../common/constants';
import { createStudy } from '../api';
import { useState } from 'react';

const useCreateStudy = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const popSuccessTitle = `스터디 개설이 완료되었습니다`;
  const popSuccessText = `오늘도 공부하는 당신!
  꿈을 향해 다가가고 있군요
  당신의 꿈을 응원할게요!`;

  const handleStudySubmit = async (createStudyData: createStudyType) => {
    try {
      await createStudy(createStudyData);
      setShowPopup(true);
      // const { data } = await createStudy(createStudyData);
      // setStatus(data.statusCode);
      console.log('전송 성공');
    } catch (err) {
      if (err instanceof AxiosError) {
        const errMsg = err.response?.data.message;
        console.log('스터디 개설 실패', errMsg);
      }
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    navigate(ROUTES.STUDY.PATH);
  };

  return {
    handleStudySubmit,
    popSuccessTitle,
    popSuccessText,
    closePopup,
    showPopup,
  };
};

export default useCreateStudy;
