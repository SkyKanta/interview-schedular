import { dbConnect, dbDisconnect, prisma } from '../';

// Seed the day database
const data = [
  {
    name: 'Monday',
    spots: 3,
  },
  {
    name: 'Tuesday',
    spots: 3,
  },
  {
    name: 'Wednesday',
    spots: 2,
  },
  {
    name: 'Thursday',
    spots: 3,
  },
  {
    name: 'Friday',
    spots: 4,
  },
];

const main = async () => {
  try {
    await dbConnect();

    // Use prisma.day.create() to seed the database
    for (let day of data) {
      await prisma.day.create({
        data: day,
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
