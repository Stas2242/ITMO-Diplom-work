import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {

    const productsCount = await prisma.goods.count();
        const skip = Math.floor(Math.random() * productsCount);
        return await prisma.goods.findMany({
            take: 4,
            skip: skip,
        })
});