import { Form, Input, Select } from 'antd';
import {
  setProfile_gender,
  setProfile_comment,
  setProfile_container,
  setProfile_label,
  setProfile_title,
  setProfile_warning,
  setProfile_label_gender,
  setProfile_form,
  setProfile_form_item,
  setProfile_nickname_input,
  setProfile_btn_wrapper,
  setProfile_yellow_btn,
  setProfile_btn_form_item,
  setProfile_select,
} from './setProfile.style';
import './setProfile.css';
import { useEffect, useState } from 'react';
import { API } from '../../../../common/utils/axiosInstance';
import { AxiosResponse } from 'axios';
import { YellowBtn } from '../../../../common/components';

const SetProfile = ({ setCurrent, setProfileFormData }: any) => {
  const [[job, devCareer], setResults] = useState<AxiosResponse[]>([]);

  const createOptions = (category: any) => {
    return category?.data.map(({ id, category }: any) => ({
      value: id,
      label: category,
    }));
  };

  const onFinish = (values: any) => {
    values.gender === 'true' ? (values.gender = true) : (values.gender = false);
    values.profile = {
      nickname: values.nickname,
      gender: values.gender,
    };
    values.job = job.data[values.job - 1];
    values.devCareer = devCareer.data[values.devCareer - 1];
    setProfileFormData(values);
    setCurrent((prev: number) => prev + 1);
  };

  useEffect(() => {
    (async () => {
      const results = await Promise.all([
        API({ url: '/categories/job' }),
        API({ url: '/categories/devCareer' }),
      ]);
      setResults(results);
    })();
  }, []);

  return (
    <div style={setProfile_container}>
      <div style={setProfile_title}>프로필 설정</div>
      <Form style={setProfile_form} onFinish={onFinish}>
        <Form.Item
          label={<div style={setProfile_label}>닉 네 임</div>}
          rules={[{ required: true, message: '닉네임을 작성해주세요' }]}
          name="nickname"
          style={setProfile_form_item(10)}
        >
          <Input
            style={setProfile_nickname_input}
            placeholder="닉네임을 작성해주세요"
          />
        </Form.Item>

        <div style={setProfile_warning}>
          성별은 한번 선택시 변경할 수 없습니다.
        </div>
        <Form.Item
          label={<div style={setProfile_label_gender}>성 별</div>}
          rules={[{ required: true, message: '성별을 선택해주세요.' }]}
          name="gender"
          style={setProfile_form_item(15)}
        >
          <div style={setProfile_gender}>
            <div className="form_radio_btn">
              <input id="radio-1" type="radio" name="userSex" value="true" />
              <label htmlFor="radio-1">남성</label>
            </div>

            <div className="form_radio_btn">
              <input id="radio-2" type="radio" name="userSex" value="false" />
              <label htmlFor="radio-2">여성</label>
            </div>
          </div>
        </Form.Item>

        <div style={setProfile_warning}>
          재직 중이 아닌 경우 희망직군을 고르세요.
        </div>
        <Form.Item
          label={<div style={setProfile_label}>주요직무</div>}
          rules={[{ required: true, message: '주요직무를 선택해주세요' }]}
          name="job"
        >
          <Select
            style={setProfile_select}
            options={createOptions(job)}
            placeholder="주요직무를 선택해주세요"
          />
        </Form.Item>

        <Form.Item
          label={<div style={setProfile_label}>개발경력</div>}
          rules={[{ required: true, message: '개발경력을 선택해주세요' }]}
          name="devCareer"
          style={setProfile_form_item(20)}
        >
          <Select
            style={setProfile_select}
            options={createOptions(devCareer)}
            placeholder="개발경력을 선택해주세요"
          />
        </Form.Item>

        <Form.Item style={setProfile_btn_form_item}>
          <div style={setProfile_comment}>
            저장 이후에는 프로필에서 수정이 가능합니다.
          </div>
          <div style={setProfile_btn_wrapper}>
            {/* <CharcoalBtn
              disabled={false}
              buttonStyle={setProfile_charcoal_btn}
              onClick={() => setCurrent((prev: number) => prev - 1)}
            >
              이전
            </CharcoalBtn> */}
            <YellowBtn
              disabled={false}
              htmlType="submit"
              buttonStyle={setProfile_yellow_btn}
            >
              저장
            </YellowBtn>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SetProfile;
