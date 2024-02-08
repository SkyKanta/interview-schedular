import { dbConnect, dbDisconnect, prisma } from '../';

// Seed the day database. All spots are initially set to 5, empty
const data = [
  {
    name: 'Monday',
    spots: 5,
  },
  {
    name: 'Tuesday',
    spots: 5,
  },
  {
    name: 'Wednesday',
    spots: 5,
  },
  {
    name: 'Thursday',
    spots: 5,
  },
  {
    name: 'Friday',
    spots: 5,
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
