/* eslint-disable prettier/prettier */
import { PrismaClient } from '@prisma/client';

// initialize the Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create one dummy contact
  const contact = await prisma.contact.upsert({
    where: { email: 'mbk@example.com' },
    update: {},
    create: {
      firstName: "Muhad",
      lastName: "BK",
      address: "Paduppu",
      city: "Kasaragod",
      country: "India",
      email: "mbk@example.com",
      phone: "88888888888",
      state: "Kerala",
      zipCode: "671541"
    },
  });

  console.log({ contact });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close the Prisma Client at the end
    await prisma.$disconnect();
  });
