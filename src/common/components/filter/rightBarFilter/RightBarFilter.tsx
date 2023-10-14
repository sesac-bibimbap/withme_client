import { useState } from 'react';
import {
  rightBarFilter_beforeClicking_bg,
  rightBarFilter_afterClicking_bg,
} from '../rightBarFilter/RightBarFilter.style';
import { Button } from 'antd';

type RightBarFilterType = {
  techStackName: string;
  techStackImage: string;
};

const RightBarFilter = ({
  techStackName,
  techStackImage,
}: RightBarFilterType) => {
  const [isTechClicked, setTechClicked] = useState(false);
  const tackStackChoose = isTechClicked
    ? rightBarFilter_afterClicking_bg
    : rightBarFilter_beforeClicking_bg;

  const handleButtonClick = () => {
    setTechClicked(!isTechClicked);
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
