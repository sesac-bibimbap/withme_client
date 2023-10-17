import { DatePicker, Form, Input, InputNumber, Space } from 'antd';
import {
  createStudyForm_container,
  createStudyForm_form_contaner,
  createStudyForm_create_btn,
  createStudyForm_form_wrap,
  createStudyFrom_form_btn_wrap,
  createStudyFrom_wrap,
  createStudyFrom_form_input,
  createStudyForm_input_studyName,
  createStudyForm_input_title,
  createStudyFrom_input_wrap,
  createStudyForm_input_textarea,
  createStudyForm_input_date,
  createStudyForm_input_people,
} from './CreateStudyForm.style';
import { BlackBtn, YellowBtn } from '../../../../common/components';
import { useMutation } from '@tanstack/react-query';
import useCreateStudy from '../../hooks/useCreateStudy';
import StudyTechStackFilter from '../studyTechStackFilter/StudyTechStackFilter';
import '../../study.css';
import { useState } from 'react';

const { RangePicker } = DatePicker;

const CreateStudyForm = () => {
  const [techStackSelect, setTechStackSelect] = useState();
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
  const handleHiddenStack = () => {
    setTechStackSelect(techStackId);
  };

  const formatCreateStudyData = (data) => {
    const {
      name,
      attendantsLimit,
      date,
      title,
      recruitPlaceholder,
      content,
      id,
    } = data;
    const [startDate, endDate] = date.map((el) => el.$d);
    // const a = id.split(' ');
    console.log('🦄  id:', id);

    const createStudyData: createStudyDataType = {
      name,
      attendantsLimit,
      startDate,
      endDate,
      recruit: {
        title: title,
        recruitPlaceholder: recruitPlaceholder,
      },
      content,
      techStacks: { id: id },
    };
    console.log(createStudyData);

    return createStudyData;
  };

  return (
    <>
      <div style={createStudyForm_container}>
        <p style={{ marginBottom: '15px' }}>스터디 만들기</p>
        <div style={createStudyForm_form_contaner}>
          <Form
            // labelCol={{ span: 4 }}
            // wrapperCol={{ span: 14 }}
            // layout="horizontal"
            // initialValues={{ size: componentSize }}
            // onValuesChange={onFormLayoutChange}
            // size={componentSize as SizeType}
            initialValues={{
              attendantsLimit: 2,
              id: '123',
            }}
            // 데이터 가공하는 함수를 따로 빼서 작업하고
            // mutate(가공된 데이터)
            onFinish={(data) => {
              console.log(data);
              formatCreateStudyData(data);
              // mutate(data);
            }}
          >
            <div style={createStudyFrom_wrap}>
              <div style={createStudyFrom_form_btn_wrap}>
                <div style={createStudyForm_form_wrap}>
                  <div style={createStudyFrom_input_wrap}>
                    <p style={createStudyFrom_form_input}>스터디명</p>
                    <Form.Item<createStudyType> name="name">
                      <Input
                        placeholder="스터디 명을 입력하세요"
                        style={createStudyForm_input_studyName}
                      />
                    </Form.Item>
                  </div>
                  <div style={createStudyFrom_input_wrap}>
                    <p style={createStudyFrom_form_input}>인원</p>
                    <Form.Item<createStudyType> name="attendantsLimit">
                      <InputNumber
                        min={2}
                        max={10}
                        style={createStudyForm_input_people}
                      />
                    </Form.Item>
                  </div>
                  <div style={createStudyFrom_input_wrap}>
                    <p style={createStudyFrom_form_input}>기간</p>
                    <Form.Item<createStudyType>
                      name="date"
                      {...rangeConfig}
                      // validateStatus="error"
                      // help="Please select right date"
                    >
                      <RangePicker style={createStudyForm_input_date} />
                    </Form.Item>
                  </div>
                  <div style={createStudyFrom_input_wrap}>
                    <p style={createStudyFrom_form_input}>제목</p>
                    <Form.Item<Recruit> name="title">
                      <Input
                        placeholder="제목을 입력하세요"
                        style={createStudyForm_input_title}
                      />
                    </Form.Item>
                  </div>
                  <div style={createStudyFrom_input_wrap}>
                    <p style={createStudyFrom_form_input}>세부내용</p>
                    <Form.Item<createStudyType> name="content">
                      <Input.TextArea
                        placeholder="세부 내용을 입력하세요"
                        style={createStudyForm_input_textarea}
                      />
                    </Form.Item>
                  </div>
                  <div style={createStudyFrom_input_wrap}>
                    <p style={createStudyFrom_form_input}>신청내용</p>
                    <Form.Item<Recruit> name="recruitPlaceholder">
                      <Input
                        placeholder="ex) 스터디원들이 스터디에 임하는 각오, 스터디가 가능한 요일 등 신청시 받을 사항 작성"
                        style={createStudyForm_input_title}
                      />
                    </Form.Item>
                  </div>
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
              <Form.Item<TechStack> name="id" hidden>
                <Input type="hidden" />
              </Form.Item>
              <StudyTechStackFilter />
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default CreateStudyForm;
