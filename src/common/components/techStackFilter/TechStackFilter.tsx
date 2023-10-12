import { useState } from 'react';
import {
  techStackFilter_afterClicking_bg,
  techStackFilter_beforeClicking_bg,
} from '../techStackFilter/TechStackFilter.style';
import { Button } from 'antd';

type TechStackFilterType = {
  techStackName: string;
  techStackImage: string;
};

const TechStackFilter = ({
  techStackName,
  techStackImage,
}: TechStackFilterType) => {
  const [isTechClicked, setTechClicked] = useState(false);
  const tackStackChoose = isTechClicked
    ? techStackFilter_afterClicking_bg
    : techStackFilter_beforeClicking_bg;

  const handleButtonClick = () => {
    setTechClicked(!isTechClicked);
  };

  return (
    <>
      <Button style={tackStackChoose} onClick={handleButtonClick}>
        <img
          src={techStackImage}
          alt={techStackName}
          style={{ width: '25px', height: '25px' }}
        />
        <p>{techStackName}</p>
      </Button>
    </>
  );
};

export default TechStackFilter;
