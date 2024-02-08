import { Interview } from '@prisma/client';

export type UpdateInterviewDto = {
  id: number;
  attr: Partial<Interview>;
};
