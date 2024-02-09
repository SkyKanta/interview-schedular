import { Day } from "@prisma/client";

export type UpdateDayDto = {
  id: number;
  attr: Partial<Day>;
};
