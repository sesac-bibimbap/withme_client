import { DatePicker, Form, Input, InputNumber, Space } from 'antd';
import {
  createStudyForm_container,
  createStudyForm_form_contaner,
  createStudyForm_create_btn,
  createStudyForm_form_wrap,
  createStudyFrom_form_btn_wrap,
  createStudyFrom_wrap,
} from './CreateStudyForm.style';
import { BlackBtn, YellowBtn } from '../../../../common/components';
import { useMutation } from '@tanstack/react-query';
import useCreateStudy from '../../hooks/useCreateStudy';
import StudyTechStackFilter from '../studyTechStackFilter/StudyTechStackFilter';

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
            initialValues={{
              techStacks: [
                {
                  id: '1',
                  stackName: 'JavaScript',
                },
              ],
              attendantsLimit: 2,
            }}
            // 데이터 가공하는 함수를 따로 빼서 작업하고
            // mutate(가공된 데이터)
            onFinish={(data) => {
              console.log(data);

              mutate(data);
            }}
          >
            <div style={createStudyFrom_wrap}>
              <div style={createStudyFrom_form_btn_wrap}>
                <div style={createStudyForm_form_wrap}>
                  <Form.Item<createStudyType> name="name" label="스터디명">
                    <Input placeholder="스터디 명을 입력하세요" />
                  </Form.Item>
                  <Form.Item<createStudyType>
                    name="attendantsLimit"
                    label="인원"
                  >
                    <InputNumber min={2} max={10} />
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
                  <Form.Item<Recruit> name="title" label="제목">
                    <Input placeholder="제목을 입력하세요" />
                  </Form.Item>
                  <Form.Item<createStudyType> name="content" label="세부내용">
                    <Input.TextArea placeholder="세부 내용을 입력하세요" />
                  </Form.Item>
                  <Form.Item<Recruit>
                    name="recruitPlaceholder"
                    label="신청내용"
                  >
                    <Input placeholder="ex) 스터디원들이 스터디에 임하는 각오, 스터디가 가능한 요일 등 신청시 받을 사항 작성" />
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
