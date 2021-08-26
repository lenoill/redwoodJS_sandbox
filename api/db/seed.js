const { PrismaClient } = require('@prisma/client')
const dotenv = require('dotenv')

dotenv.config()
const prisma = new PrismaClient()

async function main() {
  await prisma.$connect()

  const post = await prisma.recipes.findUnique({
    where: {
      id: '611505cc8e5468252c400150',
    },
  })
  console.log(post)
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })
