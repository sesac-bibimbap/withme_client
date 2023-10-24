import { CSSProperties, useState } from 'react';
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
  filterStyle?: CSSProperties;
  onTechStackSelect: (techStackId: number) => void;
};

const RightBarFilter = ({
  techStackName,
  techStackImage,
  onTechStackSelect,
  techStackId,
  techStackIds,
  filterStyle,
}: RightBarFilterType) => {
  const [isTechClicked, setTechClicked] = useState(false);

  const afterCss = {
    ...rightBarFilter_afterClicking_bg,
    ...filterStyle,
  };
  const beforeCss = {
    ...rightBarFilter_beforeClicking_bg,
    ...filterStyle,
  };

  const tackStackChoose = isTechClicked ? afterCss : beforeCss;

  const handleButtonClick = () => {
    techStackIds.length !== 5
      ? (setTechClicked((prev) => !prev), onTechStackSelect(techStackId))
      : isTechClicked === true
      ? (setTechClicked((prev) => !prev), onTechStackSelect(techStackId))
      : (alert('기술 스택은 최대 5개까지만 선택할 수 있습니다.'),
        setTechClicked((prev) => prev),
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
