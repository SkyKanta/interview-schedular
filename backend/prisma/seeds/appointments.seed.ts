import { Appointment } from '@prisma/client';
import { dbConnect, dbDisconnect, prisma } from '../';
import { time } from 'console';

const data: Partial<Appointment>[] = [
  { time: '12pm' },
  { time: '1pm' },
  { time: '2pm' },
  { time: '3pm' },
  { time: '4pm' },
];
const main = async () => {
  try {
    await dbConnect();
    for (let i = 1; i < data.length; i++) {
      await prisma.appointment.create({
        data: {
          time: data[i].time!,
          dayId: i,
        },
      });
    }

    console.log('seeded successfully');
  } catch (error) {
    console.error(error);
  } finally {
    await dbDisconnect();
  }
};

main();
