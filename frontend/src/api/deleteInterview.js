import { baseUrl } from './config';

export const deleteInterview = async (interviewId) => {
  const response = await fetch(`${baseUrl}/interviews/${interviewId}`, {
    method: 'DELETE',
  });
  return await response.json();
};
