import { Dispatch, SetStateAction, useState } from 'react';
import {
  techStackFilter_afterClicking_bg,
  techStackFilter_beforeClicking_bg,
} from '../techStackFilter/TechStackFilter.style';
import { Button } from 'antd';

type TechStackFilterType = {
  techStackName: string;
  techStackImage: string;
  setSelectedTechStacks?: Dispatch<SetStateAction<{ id: number }[]>>;
  id?: number;
  // onClick?: () => void;
};

const TechStackFilter = ({
  techStackName,
  techStackImage,
  setSelectedTechStacks, // onClick,
  id,
}: TechStackFilterType) => {
  const [isTechClicked, setTechClicked] = useState(false);
  const tackStackChoose = isTechClicked
    ? techStackFilter_afterClicking_bg
    : techStackFilter_beforeClicking_bg;

  const handleButtonClick = () => {
    if (setSelectedTechStacks && id && isTechClicked === false) {
      setSelectedTechStacks((prev) => [
        ...prev,
        { id, stackName: techStackName },
      ]);
      setTechClicked(!isTechClicked);
    } else if (setSelectedTechStacks && isTechClicked === true) {
      setSelectedTechStacks((prev) => {
        prev.pop();
        return prev;
      });
      setTechClicked(!isTechClicked);
    }
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
