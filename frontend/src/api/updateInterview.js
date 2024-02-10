import { baseUrl } from './config';

export const updateInterview = async ({ interviewId, interview }) => {
  console.log('interviewId:', interviewId);
  console.log('interview:', interview);
  const response = await fetch(`${baseUrl}/interviews/${interviewId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...interview }),
  });
  console.log(response);
  return await response.json();
};
