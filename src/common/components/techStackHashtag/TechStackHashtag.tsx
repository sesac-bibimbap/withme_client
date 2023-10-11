import { techStackHashtag_bg } from '../techStackHashtag/TechStackHashtag.style';

type TechStackHashtagType = {
  hashtagText: string;
};

const TechStackHashtag = ({ hashtagText }: TechStackHashtagType) => {
  return (
    <>
      <span style={techStackHashtag_bg}>{hashtagText}</span>
    </>
  );
};

export default TechStackHashtag;
