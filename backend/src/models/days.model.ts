import { Day } from "@prisma/client";
import { prisma } from "../../prisma";
import { UpdateDayDto } from "../dtos";

const getDays = async () => {
  return await prisma.day.findMany({
    include: {
      appointments: {
        include: { interview: true },
      },
    },
  });
};

const updateDays = async (dto: UpdateDayDto) => {
  return await prisma.day.update({
    where: { id: dto.id },
    data: { ...dto.attr },
  });
};

export default { getDays, updateDays };
