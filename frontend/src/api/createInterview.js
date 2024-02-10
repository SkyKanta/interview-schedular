import { baseUrl } from './config';

export const createInterview = async (appointmentId, interviewId, student) => {
  const response = await fetch(`${baseUrl}/interviews`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ appointmentId, interviewId, student }),
  });
  return await response.json();
};
