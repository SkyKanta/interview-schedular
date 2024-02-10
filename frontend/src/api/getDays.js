import { baseUrl } from './config';

export const getDays = async () => {
  const response = await fetch(`${baseUrl}/days`);
  return await response.json();
};
