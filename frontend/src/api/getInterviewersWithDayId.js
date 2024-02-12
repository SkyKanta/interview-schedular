import { baseUrl } from './config';

export const getInterviewersWithDayId = async (dayId) => {
  const response = await fetch(`${baseUrl}/interviewers?dayIds=${dayId}`);
  return await response.json();
};
