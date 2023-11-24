import { Form } from 'antd';
import {
  anotherEmailValidate_CharcoalBtn,
  anotherEmailValidate_btn_wrapper,
  anotherEmailValidate_comment,
  anotherEmailValidate_comment_error,
  anotherEmailValidate_comment_wrapper,
  anotherEmailValidate_title,
  anotherEmailValidate_wrapper,
  anotherEmailValidate_yellowBtn,
} from './AnotherEmailValidate.style';
import {
  CharcoalBtn,
  EmailInput,
  YellowBtn,
} from '../../../../../common/components';
import { useState } from 'react';
import { sendAnotherEmail } from '../../../../auth/api';
import { AxiosError } from 'axios';

type IProps = {
  setAnotherEmailValidate: any;
  setNavigatedEmail: any;
};

const AnotherEmailValidate = ({
  setAnotherEmailValidate,
  setNavigatedEmail,
}: IProps) => {
  const [errorMsg, setErrorMsg] = useState('');

  const onSubmitCheckAndSendEmail = async (email: EmailData) => {
    try {
      alert('전송되었습니다. 잠시만 기다려주세요.');
      const data = await sendAnotherEmail(email);
      const [anotherEmail] = data.accepted;
      setNavigatedEmail(anotherEmail);
      setAnotherEmailValidate(false);
    } catch (err) {
      if (err instanceof AxiosError) setErrorMsg(err.response?.data.message);
    }
  };

  const onChangeEmailInput = () => errorMsg && setErrorMsg('');

  const COMMENT = `
  인증번호 유효시간은 30분이며, 시간 내에 인증을 완료해주세요. 
  이후 인증을 시도할 경우에는 이메일 재전송버튼을 눌러주세요.
  `;

  return (
    <div style={anotherEmailValidate_wrapper}>
      <div style={anotherEmailValidate_title}>다른 이메일로 인증하기</div>
      <div style={anotherEmailValidate_comment}>
        새로 인증메일을 보낼 이메일을 입력해주세요.
      </div>
      <Form onFinish={onSubmitCheckAndSendEmail}>
        <EmailInput onChange={onChangeEmailInput} />
        <div style={anotherEmailValidate_comment_wrapper}>
          <div style={anotherEmailValidate_comment}>{COMMENT}</div>
          <div style={anotherEmailValidate_comment_error}>{errorMsg}</div>
        </div>
        <div style={anotherEmailValidate_btn_wrapper}>
          <CharcoalBtn
            onClick={() => setAnotherEmailValidate(false)}
            buttonStyle={anotherEmailValidate_CharcoalBtn}
          >
            돌아가기
          </CharcoalBtn>
          <YellowBtn
            htmlType="submit"
            buttonStyle={anotherEmailValidate_yellowBtn}
          >
            확인
          </YellowBtn>
        </div>
      </Form>
    </div>
  );
};

export default AnotherEmailValidate;
