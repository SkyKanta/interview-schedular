import { Appointment } from '@prisma/client';
import { prisma } from '../../prisma';
import exp from 'constants';

/**
 * Get all appointments of specific days
 * @param dayId
 * @returns
 */
const findManyWithDayId = async (dayIds: number[]): Promise<Appointment[]> => {
  return await prisma.appointment.findMany({
    where: {
      day: {
        id: {
          in: dayIds,
        },
      },
    },
  });
};

export default { findManyWithDayId };
