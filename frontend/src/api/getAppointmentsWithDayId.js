import { baseUrl } from './config';

export const getAppointmentsWithDayId = async (dayId) => {
  const response = await fetch(`${baseUrl}/appointments?dayIds=${dayId}`);
  return await response.json();
};
