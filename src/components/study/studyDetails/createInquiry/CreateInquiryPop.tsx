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

type CreateInquiryPopype = {
  setIsCreateInquiry?: (isOpen: React.SetStateAction<boolean>) => void;
};

const CreateInquiryPop = ({ setIsCreateInquiry }: CreateInquiryPopype) => {
  return (
    <>
      <div style={createInquiryPop_back}></div>
      <div style={createInquiryPop_container}>
        <h3 style={createInquiryPop_title}>스터디 문의 작성</h3>
        <Form layout="vertical">
          <div style={createInquiryPop_wrap}>
            <div style={createInquiryPop_content_wrap}>
              <div style={createInquiryPop_content}>
                <h4 style={createInquiryPop_content_font}>문의제목</h4>
                <Form.Item>
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
                  name="inquiryText"
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
                참여요청
              </YellowBtn>
            </Space>
          </div>
        </Form>
      </div>
    </>
  );
};

export default CreateInquiryPop;
