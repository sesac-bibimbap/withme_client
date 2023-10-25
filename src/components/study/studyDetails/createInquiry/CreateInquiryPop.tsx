import { Form, Input, Space } from 'antd';
import { BlackBtn, YellowBtn } from '../../../../common/components';
import {
  createInquiryPop_back,
  createInquiryPop_btn,
  createInquiryPop_container,
  createInquiryPop_content,
  createInquiryPop_content_font,
  createInquiryPop_content_wrap,
  createInquiryPop_textarea,
  createInquiryPop_title,
  createInquiryPop_wrap,
} from './CreateInquiryPop.style';
import TextArea from 'antd/es/input/TextArea';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { createInquiry } from '../../api';
import { SetStateAction } from 'react';

type CreateInquiryType = {
  setIsCreateInquiry?: (isOpen: React.SetStateAction<boolean>) => void;
  setShowPopup?: (isOpen: React.SetStateAction<boolean>) => void;
  studyIdAsNumber?: number;
  setPopSuccessTitle?: (title: SetStateAction<string>) => void;
  setPopSuccessText?: (title: SetStateAction<string>) => void;
};

const CreateInquiryPop = ({
  setIsCreateInquiry,
  setShowPopup,
  studyIdAsNumber,
  setPopSuccessTitle,
  setPopSuccessText,
}: CreateInquiryType) => {
  const handleInquirySubmit = async (createInquiryData: Inquiry) => {
    try {
      await createInquiry(studyIdAsNumber, createInquiryData);
      if (setPopSuccessTitle)
        setPopSuccessTitle(`스터디 문의가 등록 되었습니다`);
      if (setPopSuccessText)
        setPopSuccessText(`스터디장이 곧 답변을
      달아 줄거예요!`);
      if (setShowPopup) setShowPopup(true);
      if (setIsCreateInquiry) setIsCreateInquiry((prev) => !prev);
      console.log('문의 작성 성공');
    } catch (err) {
      if (err instanceof AxiosError) {
        const errMsg = err.response?.data.message;
        console.log('문의 작성 실패', errMsg);
      } else {
        (err as Error).message;
      }
    }
  };

  const { mutate } = useMutation(handleInquirySubmit);

  const onSubmitInquiryRequest = (createInquiryData: Inquiry) => {
    console.log('😈createInquiryData', createInquiryData);
    mutate(createInquiryData);
  };

  return (
    <>
      <div style={createInquiryPop_back}></div>
      <div style={createInquiryPop_container}>
        <h3 style={createInquiryPop_title}>스터디 문의 작성</h3>
        <Form layout="vertical" onFinish={onSubmitInquiryRequest}>
          <div style={createInquiryPop_wrap}>
            <div style={createInquiryPop_content_wrap}>
              <div style={createInquiryPop_content}>
                <h4 style={createInquiryPop_content_font}>문의제목</h4>
                <Form.Item
                  name="title"
                  rules={[
                    {
                      required: true,
                      message: '빈값으로는 제출할 수 없습니다.',
                    },
                  ]}
                >
                  <Input
                    styles={{
                      input: {
                        width: '320px',
                        backgroundColor: '#222121',
                        color: '#FFFFFF',
                      },
                    }}
                    type="text"
                  />
                </Form.Item>
              </div>
              <div style={createInquiryPop_content}>
                <h4 style={createInquiryPop_content_font}>문의내용</h4>
                <Form.Item
                  name="contents"
                  rules={[
                    {
                      required: true,
                      message: '빈값으로는 제출할 수 없습니다.',
                    },
                  ]}
                >
                  <TextArea
                    showCount
                    maxLength={100}
                    styles={{
                      textarea: {
                        backgroundColor: '#222121',
                        color: '#FFFFFF',
                        fontSize: '14px',
                        padding: '15px',
                      },
                      count: {
                        fontSize: '14px',
                        color: '#ffffff',
                      },
                    }}
                    style={createInquiryPop_textarea}
                  />
                </Form.Item>
              </div>
            </div>
            <Space>
              <BlackBtn
                setIsOpen={setIsCreateInquiry}
                buttonStyle={createInquiryPop_btn}
              >
                닫기
              </BlackBtn>
              <YellowBtn htmlType="submit" buttonStyle={createInquiryPop_btn}>
                작성완료
              </YellowBtn>
            </Space>
          </div>
        </Form>
      </div>
    </>
  );
};

export default CreateInquiryPop;
