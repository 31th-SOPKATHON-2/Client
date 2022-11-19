import { instance } from './customAxios';
export const getQuizList = async () => {
  const response = await instance.get('/quiz');
  return response.data;
};
