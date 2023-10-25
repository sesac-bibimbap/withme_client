import {
  profile_detailItem_margin,
  profile_detailItem_title,
} from './ProfileDetailItem.style';

type ProfileDetailItemType = {
  title: string;
  data: string | undefined;
};

const ProfileDetailItem = ({ title, data }: ProfileDetailItemType) => {
  return (
    <>
      <div style={profile_detailItem_margin}>
        <p style={profile_detailItem_title}>{title}</p>
        <p>{data}</p>
      </div>
    </>
  );
};

export default ProfileDetailItem;
