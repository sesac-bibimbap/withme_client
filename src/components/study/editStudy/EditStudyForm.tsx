import { DatePicker, Form, Input, InputNumber, Space } from 'antd';
import { BlackBtn, Popup, YellowBtn } from '../../../common/components';
import { useMutation } from '@tanstack/react-query';
import StudyTechStackFilter from '../../study/createStudy/studyTechStackFilter/StudyTechStackFilter';
import '../study.css';
import { useState, KeyboardEvent } from 'react';
import {
  editStudyForm_container,
  editStudyForm_edit_btn,
  editStudyForm_form_contaner,
  editStudyForm_form_wrap,
  editStudyForm_input_date,
  editStudyForm_input_people,
  editStudyForm_input_studyName,
  editStudyForm_input_textarea,
  editStudyForm_input_title,
  editStudyFrom_form_btn_wrap,
  editStudyFrom_form_input,
  editStudyFrom_input_wrap,
  editStudyFrom_wrap,
} from './EditStudyForm.style';
import useEditStudy from '../hooks/useEditStudy';
import { useParams } from 'react-router-dom';
import { useStudyDetail } from '../hooks/queries/useQueries';

const { RangePicker } = DatePicker;

const CreateStudyForm = () => {
  const { studyId } = useParams();
  const studyIdAsNumber = Number(studyId);

  const {
    handleStudySubmit,
    popSuccessTitle,
    popSuccessText,
    closePopup,
    showPopup,
  } = useEditStudy(studyIdAsNumber);
  const [techStackId, setTechStackId] = useState<number[]>([]);

  const { mutate } = useMutation(handleStudySubmit);
  const { data, isLoading } = useStudyDetail(studyIdAsNumber);

  if (!data) return;
  const {
    name,
    recruit: { title, recruitPlaceholder },
    content,
    attendantsLimit,
    // startDate,
    // endDate,
    // techStacks,
  } = data;

  const handleOnlyNumber = (e: KeyboardEvent<HTMLInputElement>) => {
    e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
  };

  const formatEditStudyData = (data: CreateStudyDataType) => {
    const { name, attendantsLimit, date, title, recruitPlaceholder, content } =
      data;
    const [startDate, endDate] = date.map((el: any) => el.$d);

    const techStacks: TechStack[] = [];
    techStackId.map((el) => {
      const obj = { id: el };
      techStacks.push(obj);
    });

    const editStudyData: CreateStudyType = {
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
    mutate(editStudyData);
    return editStudyData;
  };

  return (
    <>
      {!isLoading ? (
        <div style={editStudyForm_container}>
          <p style={{ marginBottom: '15px' }}>스터디 수정</p>
          <div style={editStudyForm_form_contaner}>
            <Form
              onFinish={(data) => {
                formatEditStudyData(data);
              }}
            >
              <div style={editStudyFrom_wrap}>
                <div style={editStudyFrom_form_btn_wrap}>
                  <div style={editStudyForm_form_wrap}>
                    <div style={editStudyFrom_input_wrap}>
                      <p style={editStudyFrom_form_input}>스터디명</p>
                      <Form.Item<CreateStudyDataType>
                        name="name"
                        rules={[
                          {
                            required: true,
                            message: '스터디 명을 입력해주세요',
                          },
                        ]}
                        initialValue={name}
                      >
                        <Input
                          // placeholder="스터디 명을 입력하세요"
                          style={editStudyForm_input_studyName}
                        />
                      </Form.Item>
                    </div>
                    <div style={editStudyFrom_input_wrap}>
                      <p style={editStudyFrom_form_input}>인원</p>
                      <Form.Item<CreateStudyDataType>
                        name="attendantsLimit"
                        rules={[
                          {
                            required: true,
                            message: '인원 수를 입력해주세요',
                          },
                        ]}
                        initialValue={attendantsLimit}
                      >
                        <InputNumber
                          min={2}
                          max={10}
                          onKeyUp={handleOnlyNumber}
                          style={editStudyForm_input_people}
                        />
                      </Form.Item>
                    </div>
                    <div style={editStudyFrom_input_wrap}>
                      <p style={editStudyFrom_form_input}>기간</p>
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
                        <RangePicker style={editStudyForm_input_date} />
                      </Form.Item>
                    </div>
                    <div style={editStudyFrom_input_wrap}>
                      <p style={editStudyFrom_form_input}>제목</p>
                      <Form.Item<CreateStudyDataType>
                        name="title"
                        rules={[
                          {
                            required: true,
                            message: '스터디원 모집 게시글 제목을 입력해주세요',
                          },
                        ]}
                        initialValue={title}
                      >
                        <Input
                          placeholder="제목을 입력하세요"
                          style={editStudyForm_input_title}
                        />
                      </Form.Item>
                    </div>
                    <div style={editStudyFrom_input_wrap}>
                      <p style={editStudyFrom_form_input}>세부내용</p>
                      <Form.Item<CreateStudyDataType>
                        name="content"
                        rules={[
                          {
                            required: true,
                            message: '스터디 세부 내용을 입력해주세요',
                          },
                        ]}
                        initialValue={content}
                      >
                        <Input.TextArea
                          placeholder="세부 내용을 입력하세요"
                          style={editStudyForm_input_textarea}
                        />
                      </Form.Item>
                    </div>
                    <div style={editStudyFrom_input_wrap}>
                      <p style={editStudyFrom_form_input}>신청내용</p>
                      <Form.Item<CreateStudyDataType>
                        name="recruitPlaceholder"
                        rules={[
                          {
                            required: true,
                            message: '신청시 받을 사항을 입력해주세요',
                          },
                        ]}
                        initialValue={recruitPlaceholder}
                      >
                        <Input
                          placeholder="ex) 스터디원들이 스터디에 임하는 각오, 스터디가 가능한 요일 등 신청시 받을 사항 작성"
                          style={editStudyForm_input_title}
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
                        buttonStyle={editStudyForm_edit_btn}
                      >
                        {'수정'}
                      </YellowBtn>
                    </Form.Item>
                  </Space>
                </div>
                <StudyTechStackFilter setTechStackId={setTechStackId} />
              </div>
            </Form>
          </div>
        </div>
      ) : null}

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
