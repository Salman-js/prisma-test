import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      email: 'salman@gmail.com',
      name: 'Salman',
    },
  });
  console.log(user);
}

main()
  .catch((e) => console.log(e.code))
  .finally(async () => await prisma.$disconnect());
