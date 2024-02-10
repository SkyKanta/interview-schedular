import { baseUrl } from './config';

export const updateInterview = async ({ interviewId, interview }) => {
  const response = await fetch(`${baseUrl}/interviews/${interviewId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...interview }),
  });
  return await response.json();
};
