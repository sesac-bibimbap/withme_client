import { Select } from 'antd';
import { STUDY_REJECT_REASON } from '../../common/constants/enum/study.enum';

const SelectRejectReason = ({
  selectRejectReasonChange,
}: SelectRejectReason) => {
  return (
    <Select
      labelInValue
      defaultValue={{
        value: STUDY_REJECT_REASON.NOT_FIT,
      }}
      style={{ width: 300 }}
      dropdownStyle={{ backgroundColor: '#9F9C9C' }}
      onChange={selectRejectReasonChange}
      options={[
        { value: STUDY_REJECT_REASON.NOT_FIT },
        { value: STUDY_REJECT_REASON.PERSONAL_ISSUE },
      ]}
    />
  );
};

export default SelectRejectReason;
