import { instance } from './customAxios.js';

export const sendUserInput = async key => {
  const response = await instance.get(`translate?input=${key}`);
  return response.data;
};
