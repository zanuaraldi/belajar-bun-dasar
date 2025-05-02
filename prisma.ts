import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const contact = await prisma.contact.create({
    data: {
        name: "Zanuar Aldi Syahputra",
        email: "aldi@example.com",
        phone: "081234567890"
    }
})

console.info(contact);