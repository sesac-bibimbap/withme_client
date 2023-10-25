import { Form, Input, Select, Button } from 'antd';
import {
  radio_wrapper,
  setProfile_comment,
  setProfile_container,
  setProfile_label,
  // setProfile_radioBtn,
  setProfile_setBtn,
  setProfile_title,
  setProfile_warning,
} from './setProfile.style';
import './setProfile.css';

const SetProfile = () => {
  return (
    <>
      <div style={setProfile_container}>
        <div style={setProfile_title}>프로필 설정</div>
        <Form>
          <Form.Item>
            <label htmlFor="닉네임" style={setProfile_label}>
              닉네임:
            </label>
            <Input style={{ width: '200px', marginLeft: '15px' }} />
          </Form.Item>

          <Form.Item>
            {/* <label htmlFor="성별" style={setProfile_label}>
              성 별:
            </label>
            <Radio.Group>
              <Radio.Button value="남성" style={setProfile_radioBtn}>
                남성
              </Radio.Button>
              <Radio.Button value="여성" style={setProfile_radioBtn}>
                여성
              </Radio.Button>
            </Radio.Group> */}
            <div style={radio_wrapper}>
              <label htmlFor="성별" className="form-label">
                성 별:
              </label>
              <div className="form_toggle">
                <div className="form_radio_btn">
                  <input
                    id="radio-1"
                    type="radio"
                    name="userSex"
                    value="male"
                    checked
                  />
                  <label htmlFor="radio-1">남성</label>
                </div>

                <div className="form_radio_btn">
                  <input
                    id="radio-2"
                    type="radio"
                    name="userSex"
                    value="female"
                  />
                  <label htmlFor="radio-2">여성</label>
                </div>
              </div>
            </div>
            <div style={setProfile_warning}>
              성별은 한번 선택시 변경할 수 없습니다.
            </div>
          </Form.Item>

          <Form.Item>
            <label htmlFor="주요직무" style={setProfile_label}>
              주요직무:{' '}
            </label>
            <Select style={{ width: '200px' }}>
              <Select.Option value="백엔드">백엔드</Select.Option>
              <Select.Option value="프론트엔드">프론트엔드</Select.Option>
              <Select.Option value="데브옵스">데브옵스</Select.Option>
              <Select.Option value="UI/UX 디자이너">
                UI/UX 디자이너
              </Select.Option>
              <Select.Option value="PM">PM</Select.Option>
              <Select.Option value="IT 기획자">IT 기획자</Select.Option>
              <Select.Option value="DBA">DBA</Select.Option>
              <Select.Option value="시스템 개발자">시스템 개발자</Select.Option>
              <Select.Option value="네트워크 엔지니어">
                네트워크 엔지니어
              </Select.Option>
              <Select.Option value="인공지능">인공지능</Select.Option>
            </Select>
            <div style={setProfile_warning}>
              재직 중이 아닌 경우 희망직군을 고르세요.
            </div>
          </Form.Item>

          <Form.Item>
            <label htmlFor="개발경력" style={setProfile_label}>
              개발경력:{' '}
            </label>
            <Select style={{ width: '200px' }}>
              <Select.Option value="신입(1년미만)">신입(1년미만)</Select.Option>
              <Select.Option value="주니어(1~3년)">주니어(1~3년)</Select.Option>
              <Select.Option value="미들(3~5년)">미들(3~5년)</Select.Option>
              <Select.Option value="시니어(5년 이상)">
                시니어(5년 이상)
              </Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div style={setProfile_comment}>
              저장 이후에는 프로필에서 수정이 가능합니다.
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button htmlType="submit" style={setProfile_setBtn}>
                저장
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default SetProfile;
