import {
  CharcoalBtn,
  EmailInput,
  YellowBtn,
} from '../../../../common/components';

const OtherEmail = () => {
  return (
    <>
      <div>
        <div>다른 이메일로 인증하기</div>
        <div>새로 인증메일을 보낼 이메일을 입력해주세요.</div>

        <EmailInput />
        <div>
          인증번호 유효시간은 30분이며, 시간 내에 인증을 완료해주세요. 이후
          인증을 시도할 경우에는 이메일 재전송버튼을 논리주세요.
        </div>

        <CharcoalBtn htmlType="reset" path="undfined">
          이전
        </CharcoalBtn>
        <YellowBtn htmlType="submit">전송</YellowBtn>
      </div>
    </>
  );
};

export default OtherEmail;
