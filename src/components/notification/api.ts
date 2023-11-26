import { API } from '../../common/utils/axiosInstance';

export const acceptAttend = async (requestData: RequestData) => {
  const { data } = await API({
    method: 'post',
    url: 'studies/attend/accept',
    data: requestData,
  });
  return data;
};

// export const check = async (id) => {
//   const { data } = await API({
//     method: 'get',
//     url: `attend/check/${id}`
//   })
// }
