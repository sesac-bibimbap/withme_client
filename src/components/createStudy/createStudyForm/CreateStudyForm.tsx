import { DatePicker, Form, Input, InputNumber, Space } from 'antd';
import {
  createStudyForm_container,
  createStudyForm_form_contaner,
  createStudyForm_form,
  createStudyForm_create_btn,
} from './CreateStudyForm.style';
import { BlackBtn, YellowBtn } from '../../../common/components';
import { useMutation } from '@tanstack/react-query';
import useCreateStudy from '../hooks/useCreateStudy';
import { createStudyType } from '../../../types';

const { RangePicker } = DatePicker;

const CreateStudyForm = () => {
  const { handleStudySubmit } = useCreateStudy();

  const { mutate } = useMutation(handleStudySubmit);

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
        <p style={{ fontSize: '20px', fontWeight: '600' }}>스터디 만들기</p>
        <div style={createStudyForm_form_contaner}>
          <Form
            // labelCol={{ span: 4 }}
            // wrapperCol={{ span: 14 }}
            // layout="horizontal"
            // initialValues={{ size: componentSize }}
            // onValuesChange={onFormLayoutChange}
            // size={componentSize as SizeType}
            style={createStudyForm_form}
            onFinish={(data) => {
              console.log(data);

              mutate(data);
            }}
          >
            <Form.Item<createStudyType> name="studyName" label="스터디명">
              <Input />
            </Form.Item>
            <Form.Item<createStudyType> name="people" label="인원">
              <InputNumber />
            </Form.Item>
            <Form.Item<createStudyType>
              name="date"
              label="기간"
              {...rangeConfig}
              // validateStatus="error"
              // help="Please select right date"
            >
              <RangePicker />
            </Form.Item>
            <Form.Item<createStudyType> name="title" label="제목">
              <Input />
            </Form.Item>
            <Form.Item<createStudyType> name="content" label="세부내용">
              <Input.TextArea />
            </Form.Item>
            <Form.Item<createStudyType> name="receiveMsg" label="신청내용">
              <Input />
            </Form.Item>
            <Space>
              <Form.Item>
                <BlackBtn buttonText="취소" htmlType="submit" path={-1} />
              </Form.Item>
              <Form.Item>
                <YellowBtn
                  buttonText="개설"
                  htmlType="submit"
                  buttonStyle={createStudyForm_create_btn}
                />
              </Form.Item>
            </Space>
          </Form>
        </div>
      </div>
    </>
  );
};

export default CreateStudyForm;
