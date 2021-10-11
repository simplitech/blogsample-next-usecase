import {PrismaClient} from "@prisma/client"
import crypto from "crypto"
import faker from "faker"

const prisma = new PrismaClient()

const password = 'tester'
const passwordSha256x2 = crypto.createHash('sha256').update(crypto.createHash('sha256')
  .update(password)
  .digest('hex')).digest('hex')

async function main() {
  await prisma.user.deleteMany()
  await prisma.post.deleteMany()

  for (let i = 0; i < 5; i++) {
    await prisma.user.create({
      data: {
        email: faker.internet.email(),
        password: passwordSha256x2,
        name: faker.name.findName(),
        avatarUrl: `https://i.pravatar.cc/150?u=${faker.random.alphaNumeric()}`,
        role: 'ADMIN',
        posts: {
          create: Array(faker.datatype.number({ min: 0, max: 40 })).fill(0).map(() => ({
            title: faker.company.bs(),
            bannerUrl: `https://picsum.photos/seed/${faker.random.alphaNumeric()}/600/400`,
            body: faker.lorem.paragraphs(5),
            published: true,
            createdAt: faker.date.past()
          })),
        },
      }
    })
  }
}

main().catch(e => {
  console.error(e)
  process.exit(1)
}).finally(async () => {
  await prisma.$disconnect()
})
