const { PrismaClient } = require('@prisma/client')
const dotenv = require('dotenv')

dotenv.config()
const prisma = new PrismaClient()

async function main() {
  await prisma.$connect()

  const post = await prisma.recipes.findMany()
  console.log(post)
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })
