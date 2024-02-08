import { dbConnect, dbDisconnect, prisma } from '../';

const main = async () => {
  try {
    await dbConnect();
    const days = await prisma.day.findMany();
    const interviewers = await prisma.interviewer.findMany();

    for (let day of days) {
      for (let interviewer of interviewers) {
        await prisma.availableInterviewer.create({
          data: {
            dayId: day.id,
            interviewerId: interviewer.id,
          },
        });
      }
    }
    console.log('seeded successfully');
  } catch (error) {
    console.error(error);
  } finally {
    await dbDisconnect();
  }
};

main();
