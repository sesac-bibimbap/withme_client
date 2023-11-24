import { YellowBtn } from '../../../../common/components';
import {
  celebration_title,
  celebration_wrapper,
  celebration_yellowBtn,
} from './Celebration.style';
import './Celebration.css';
import { sendFirstLoginVerifyEmail } from '../../api';

interface IProps {
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
}

const Celebration = ({ current, setCurrent }: IProps) => {
  const onNextPage = () => {
    sendFirstLoginVerifyEmail();
    setCurrent(current + 1);
  };

  return (
    <>
      <div className="celebrate" style={celebration_wrapper}>
        <div style={celebration_title}>가입을 환영합니다.</div>
        <div style={celebration_title}>몇가지 설정이 진행됩니다.</div>
        <YellowBtn buttonStyle={celebration_yellowBtn} onClick={onNextPage}>
          다음
        </YellowBtn>
      </div>
    </>
  );
};

export default Celebration;
