import { AxiosError, AxiosResponse } from 'axios';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { API } from '../../common/utils/axiosInstance';
//로그인한 유저 정보 get api - emailValidation에서 보여줄 유저 이메일을 위해서

//이메일 인증 요청 post api
const sendCode = async ({ email }: SendCode) => {
  const { data } = await API({
    method: 'post',
    url: '/first',
    data: email,
  });
  return data;
};

export const useVerifiedEmail = (
  data: SendCode,
  options?: UseMutationOptions<AxiosResponse, AxiosError>,
) => useMutation(() => sendCode(data), options);

// 이메일 인증으로 유저 업데이트 post api

// 인증 확인 모달 필요

// 프로필 설정 업데이트 post api

// 기술 스택 선택 - 유저 업데이트 post api

// 기술 스택까지 선택하고 post 날릴 것

// 최종 업데이트된 유저 정보 get api
export const userProfile = async () => {
  const { data } = await API({
    method: 'get',
    url: '/users/req-user',
  });
  return data;
};
