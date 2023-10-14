import { DatePicker, Form, Input, InputNumber, Space } from 'antd';
import {
  createStudyForm_container,
  createStudyForm_form_contaner,
  createStudyForm_create_btn,
  createStudyForm_form_wrap,
  createStudyFrom_form_btn_wrap,
  createStudyFrom_wrap,
} from './CreateStudyForm.style';
import {
  BlackBtn,
  StudyTechStackFilter,
  YellowBtn,
} from '../../../../common/components';
import { useMutation } from '@tanstack/react-query';
import useCreateStudy from '../../hooks/useCreateStudy';

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
        <p
          style={{ fontSize: '20px', fontWeight: '600', marginBottom: '15px' }}
        >
          스터디 만들기
        </p>
        <div style={createStudyForm_form_contaner}>
          <Form
            // labelCol={{ span: 4 }}
            // wrapperCol={{ span: 14 }}
            // layout="horizontal"
            // initialValues={{ size: componentSize }}
            // onValuesChange={onFormLayoutChange}
            // size={componentSize as SizeType}
            onFinish={(data) => {
              console.log(data);

              mutate(data);
            }}
          >
            <div style={createStudyFrom_wrap}>
              <div style={createStudyFrom_form_btn_wrap}>
                <div style={createStudyForm_form_wrap}>
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
                  <Form.Item<createStudyType>
                    name="receiveMsg"
                    label="신청내용"
                  >
                    <Input />
                  </Form.Item>
                </div>
                <Space>
                  <Form.Item>
                    <BlackBtn htmlType="submit" path={-1}>
                      {'취소'}
                    </BlackBtn>
                  </Form.Item>
                  <Form.Item>
                    <YellowBtn
                      htmlType="submit"
                      buttonStyle={createStudyForm_create_btn}
                    >
                      {'개설'}
                    </YellowBtn>
                  </Form.Item>
                </Space>
              </div>
              <StudyTechStackFilter />
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default CreateStudyForm;
