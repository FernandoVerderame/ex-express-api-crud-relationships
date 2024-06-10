const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const validationSlug = {
    slug: {
        in: ["params"],
        custom: {
            options: async (value) => {
                const slug = await prisma.post.findUnique({ where: { slug: value } });

                if (!slug) throw new Error(`Non esiste un post con slug: ${value}`);

                return true;
            }

        }
    }
}

module.exports = validationSlug;