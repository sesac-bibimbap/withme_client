import { DatePicker, Form, Input, InputNumber } from 'antd';
import {
  createStudyForm_container,
  createStudyForm_form_contaner,
  createStudyForm_form,
} from './CreateStudyForm.style';

const { RangePicker } = DatePicker;

const CreateStudyForm = () => {
  const rangeConfig = {
    rules: [
      {
        type: 'array' as const,
        // required: true,
        message: 'Please select time!',
      },
    ],
  };
  return (
    <>
      <div style={createStudyForm_container}>
        스터디 생성하는 곳이얌~
        <div style={createStudyForm_form_contaner}>
          <Form
            // labelCol={{ span: 4 }}
            // wrapperCol={{ span: 14 }}
            // layout="horizontal"
            // initialValues={{ size: componentSize }}
            // onValuesChange={onFormLayoutChange}
            // size={componentSize as SizeType}
            style={createStudyForm_form}
          >
            <Form.Item label="스터디명">
              <Input />
            </Form.Item>
            <Form.Item label="인원">
              <InputNumber />
            </Form.Item>
            <Form.Item
              name="range-picker"
              label="기간"
              {...rangeConfig}
              // validateStatus="error"
              // help="Please select right date"
            >
              <RangePicker />
            </Form.Item>
            <Form.Item label="제목">
              <Input />
            </Form.Item>
            <Form.Item name={['user', 'introduction']} label="세부내용">
              <Input.TextArea />
            </Form.Item>
            <Form.Item label="신청내용">
              <Input />
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default CreateStudyForm;
