import { useState } from 'react';
import {
  rightBarFilter_beforeClicking_bg,
  rightBarFilter_afterClicking_bg,
} from '../rightBarFilter/RightBarFilter.style';
import { Button } from 'antd';

type RightBarFilterType = {
  techStackName: string;
  techStackImage: string;
  onTechStackSelect: (techStackName: string) => void;
};

const RightBarFilter = ({
  techStackName,
  techStackImage,
  onTechStackSelect,
}: RightBarFilterType) => {
  // const techStackInput = useRef<HTMLInputElement>(null);
  // const [selectedValues, setSelectedValues] = useState('');
  const [isTechClicked, setTechClicked] = useState(false);
  const tackStackChoose = isTechClicked
    ? rightBarFilter_afterClicking_bg
    : rightBarFilter_beforeClicking_bg;

  const handleButtonClick = () => {
    setTechClicked(!isTechClicked);
    onTechStackSelect(techStackName);
  };
  // console.log(selectedValues);
  return (
    <>
      {/* <Form.Item<createStudyType> name="techStacks"> */}
      <Button style={tackStackChoose} onClick={handleButtonClick}>
        <img
          src={techStackImage}
          alt={techStackName}
          style={{ width: '30px', height: '30px' }}
        />
        <p>{techStackName}</p>
      </Button>
      {/* <input
        type="hidden"
        value={techStackName}
        ref={techStackInput}
        // style={{ visibility: 'hidden' }}
        // style={{ display: 'none' }}
        // style={{ width: 0, height: 0, padding: 0, border: 0 }}
      /> */}
      {/* </Form.Item> */}
    </>
  );
};

export default RightBarFilter;
