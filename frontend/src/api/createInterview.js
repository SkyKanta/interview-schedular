import { baseUrl } from './config';

export const createInterview = async ({
  appointmentId,
  interviewerId,
  student,
}) => {
  const response = await fetch(`${baseUrl}/interviews`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ appointmentId, interviewerId, student }),
  });
  return await response.json();
};
