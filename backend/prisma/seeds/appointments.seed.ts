import { Appointment } from '@prisma/client';
import { dbConnect, dbDisconnect, prisma } from '../';

const data: Pick<Appointment, 'time'>[] = [
  { time: '12pm' },
  { time: '1pm' },
  { time: '2pm' },
  { time: '3pm' },
  { time: '4pm' },
];
const main = async () => {
  try {
    await dbConnect();
    const days = await prisma.day.findMany();
    for (let day of days) {
      for (let appointment of data) {
        await prisma.appointment.create({
          data: { ...appointment, dayId: day.id },
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
