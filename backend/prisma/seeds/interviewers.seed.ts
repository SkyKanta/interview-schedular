import { dbConnect, dbDisconnect, prisma } from '../';

const data = [
  {
    name: 'Lindsay Chu',
    avatar: 'https://i.imgur.com/nPywAp1.jpg',
  },
  {
    name: 'Viktor Jain',
    avatar: 'https://i.imgur.com/iHq8K8Z.jpg',
  },
  {
    name: 'Mildred Nazir',
    avatar: 'https://i.imgur.com/T2WwVfS.png',
  },
  {
    name: 'Sylvia Palmer',
    avatar: 'https://i.imgur.com/LpaY82x.png',
  },
  {
    name: 'Tori Malcolm',
    avatar: 'https://i.imgur.com/Nmx0Qxo.png',
  },
];

const main = async () => {
  try {
    await dbConnect();
    for (let interviewer of data) {
      await prisma.interviewer.create({
        data: { ...interviewer },
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
