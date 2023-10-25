import { CSSProperties } from 'react';
import { techStackHashtag_bg } from '../techStackHashtag/TechStackHashtag.style';

type TechStackHashtagType = {
  children?: string | undefined;
  buttonStyle?: CSSProperties;
};

const TechStackHashtag = ({ children, buttonStyle }: TechStackHashtagType) => {
  const techStackHashtagCss = {
    ...techStackHashtag_bg,
    ...buttonStyle,
  };

  return (
    <>
      <div style={techStackHashtagCss}>
        <span># {children}</span>
      </div>
    </>
  );
};

export default TechStackHashtag;
