import { Interviewer } from "@prisma/client";
import { prisma } from "../../prisma";

/**
 * Get all interviewers of specific days
 * @param dayId
 * @returns
 */

const findManyWithDayId = async (dayIds: number[]): Promise<Interviewer[]> => {
  return await prisma.interviewer.findMany({
    where: {
      availableDays: {
        some: {
          dayId: {
            in: dayIds,
          },
        },
      },
    },
    include: {
      availableDays: true,
    },
  });
};

export default { findManyWithDayId };
