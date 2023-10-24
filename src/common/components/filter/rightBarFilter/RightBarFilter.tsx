import { useState } from 'react';
import {
  rightBarFilter_beforeClicking_bg,
  rightBarFilter_afterClicking_bg,
} from '../rightBarFilter/RightBarFilter.style';
import { Button } from 'antd';

type RightBarFilterType = {
  techStackName?: string;
  techStackImage?: string;
  techStackId: number;
  techStackIds: Array<number>;
  onTechStackSelect: (techStackId: number) => void;
};

const RightBarFilter = ({
  techStackName,
  techStackImage,
  onTechStackSelect,
  techStackId,
  techStackIds,
}: RightBarFilterType) => {
  const [isTechClicked, setTechClicked] = useState(false);
  const tackStackChoose = isTechClicked
    ? rightBarFilter_afterClicking_bg
    : rightBarFilter_beforeClicking_bg;

  const handleButtonClick = () => {
    techStackIds.length !== 5
      ? (setTechClicked(!isTechClicked), onTechStackSelect(techStackId))
      : isTechClicked === true
      ? (setTechClicked(!isTechClicked), onTechStackSelect(techStackId))
      : (alert('기술 스택은 최대 5개까지만 선택할 수 있습니다.'),
        setTechClicked(isTechClicked),
        onTechStackSelect(techStackId));
  };

  return (
    <>
      <Button style={tackStackChoose} onClick={handleButtonClick}>
        <img
          src={techStackImage}
          alt={techStackName}
          style={{ width: '30px', height: '30px' }}
        />
        <p>{techStackName}</p>
      </Button>
    </>
  );
};

export default RightBarFilter;
