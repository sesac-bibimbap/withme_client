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
import { BlackBtn, Popup, YellowBtn } from '../../../../common/components';
import { useMutation } from '@tanstack/react-query';
import useCreateStudy from '../../hooks/useCreateStudy';
import StudyTechStackFilter from '../studyTechStackFilter/StudyTechStackFilter';
import '../../study.css';
import { useState, KeyboardEvent } from 'react';

const { RangePicker } = DatePicker;

const CreateStudyForm = () => {
  const {
    handleStudySubmit,
    popSuccessTitle,
    popSuccessText,
    closePopup,
    showPopup,
  } = useCreateStudy();
  const [techStackId, setTechStackId] = useState<number[]>([]);

  const { mutate } = useMutation(handleStudySubmit);

  const handleOnlyNumber = (e: KeyboardEvent<HTMLInputElement>) => {
    e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
  };

  const formatCreateStudyData = (data: CreateStudyDataType) => {
    const { name, attendantsLimit, date, title, recruitPlaceholder, content } =
      data;
    const [startDate, endDate] = date.map((el: any) => el.$d);

    const techStacks: TechStack[] = [];
    techStackId.map((el) => {
      const obj: TechStack = { id: el.toString() };
      techStacks.push(obj);
    });

    const createStudyData: CreateStudyType = {
      name,
      attendantsLimit,
      startDate,
      endDate,
      recruit: {
        title: title,
        recruitPlaceholder: recruitPlaceholder,
      },
      content,
      techStacks: techStacks,
    };
    mutate(createStudyData);
    return createStudyData;
  };

  return (
    <>
      <div style={createStudyForm_container}>
        <p style={{ marginBottom: '15px' }}>스터디 만들기</p>
        <div style={createStudyForm_form_contaner}>
          <Form
            initialValues={{
              attendantsLimit: 2,
            }}
            onFinish={(data) => {
              formatCreateStudyData(data);
            }}
          >
            <div style={createStudyFrom_wrap}>
              <div style={createStudyFrom_form_btn_wrap}>
                <div style={createStudyForm_form_wrap}>
                  <div style={createStudyFrom_input_wrap}>
                    <p style={createStudyFrom_form_input}>스터디명</p>
                    <Form.Item<CreateStudyDataType>
                      name="name"
                      rules={[
                        {
                          required: true,
                          message: '스터디 명을 입력해주세요',
                        },
                      ]}
                    >
                      <Input
                        placeholder="스터디 명을 입력하세요"
                        style={createStudyForm_input_studyName}
                      />
                    </Form.Item>
                  </div>
                  <div style={createStudyFrom_input_wrap}>
                    <p style={createStudyFrom_form_input}>인원</p>
                    <Form.Item<CreateStudyDataType>
                      name="attendantsLimit"
                      rules={[
                        {
                          required: true,
                          message: '인원 수를 입력해주세요',
                        },
                      ]}
                    >
                      <InputNumber
                        min={2}
                        max={10}
                        onKeyUp={handleOnlyNumber}
                        style={createStudyForm_input_people}
                      />
                    </Form.Item>
                  </div>
                  <div style={createStudyFrom_input_wrap}>
                    <p style={createStudyFrom_form_input}>기간</p>
                    <Form.Item<CreateStudyDataType>
                      name="date"
                      rules={[
                        {
                          type: 'array' as const,
                          required: true,
                          message: '스터디 진행 기간을 입력해주세요',
                        },
                      ]}
                    >
                      <RangePicker style={createStudyForm_input_date} />
                    </Form.Item>
                  </div>
                  <div style={createStudyFrom_input_wrap}>
                    <p style={createStudyFrom_form_input}>제목</p>
                    <Form.Item<CreateStudyDataType>
                      name="title"
                      rules={[
                        {
                          required: true,
                          message: '스터디원 모집 게시글 제목을 입력해주세요',
                        },
                      ]}
                    >
                      <Input
                        placeholder="제목을 입력하세요"
                        style={createStudyForm_input_title}
                      />
                    </Form.Item>
                  </div>
                  <div style={createStudyFrom_input_wrap}>
                    <p style={createStudyFrom_form_input}>세부내용</p>
                    <Form.Item<CreateStudyDataType>
                      name="content"
                      rules={[
                        {
                          required: true,
                          message: '스터디 세부 내용을 입력해주세요',
                        },
                      ]}
                    >
                      <Input.TextArea
                        placeholder="세부 내용을 입력하세요"
                        style={createStudyForm_input_textarea}
                      />
                    </Form.Item>
                  </div>
                  <div style={createStudyFrom_input_wrap}>
                    <p style={createStudyFrom_form_input}>신청내용</p>
                    <Form.Item<CreateStudyDataType>
                      name="recruitPlaceholder"
                      rules={[
                        {
                          required: true,
                          message: '신청시 받을 사항을 입력해주세요',
                        },
                      ]}
                    >
                      <Input
                        placeholder="ex) 스터디원들이 스터디에 임하는 각오, 스터디가 가능한 요일 등 신청시 받을 사항 작성"
                        style={createStudyForm_input_title}
                      />
                    </Form.Item>
                  </div>
                </div>
                <Space style={{ marginTop: '15px' }}>
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
              <StudyTechStackFilter setTechStackId={setTechStackId} />
            </div>
          </Form>
        </div>
      </div>
      {showPopup && (
        <Popup
          popupTitle={popSuccessTitle}
          popupText={popSuccessText}
          onClose={closePopup}
        />
      )}
    </>
  );
};

export default CreateStudyForm;
