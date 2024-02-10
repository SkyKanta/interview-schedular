import { Appointment } from '@prisma/client';
import { prisma } from '../../prisma';

/**
 * Get all appointments of specific days
 * @param dayId
 * @returns
 */
const findManyWithDayId = async (dayIds: number[]): Promise<Appointment[]> => {
  return await prisma.appointment.findMany({
    where: {
      dayId: { in: dayIds },
    },
    include: {
      interview: {
        include: {
          interviewer: true,
        },
      },
    },
  });
};

export default { findManyWithDayId };
