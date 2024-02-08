import { Interview } from '@prisma/client';
import { prisma } from '../../prisma';
import { CreateInterviewDto, UpdateInterviewDto } from '../dtos';

/**
 * Get all interviews
 * @param  {CreateInterviewDto}
 * @returns {Promise<Interview>}
 */
const createInterview = async (dto: CreateInterviewDto) => {
  return await prisma.interview.create({
    data: { ...dto },
  });
};
/**
 * Update interview
 * @param {UpdateInterviewDto} dto
 * @return {Promise<Interview>}
 */
const updateInterview = async (dto: UpdateInterviewDto) => {
  return await prisma.interview.update({
    where: { id: dto.id },
    data: { ...dto.attr },
  });
};

/**
 * Delete interview
 * @param {number} id
 * @return {Promise<{message: string}>}
 */
const deleteInterview = async (id: number) => {
  await prisma.interview.delete({
    where: { id: id },
  });
};

export default { createInterview, updateInterview, deleteInterview };
