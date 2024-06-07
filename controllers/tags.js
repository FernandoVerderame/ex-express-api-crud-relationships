// Importo PrismaClient
const { PrismaClient } = require("@prisma/client");

// Inizializzo Prisma
const prisma = new PrismaClient();

const store = async (req, res, next) => {

    const { name } = req.body;

    const data = { name }

    try {
        const tag = await prisma.tag.create({ data });
        res.status(200).send(tag);
    } catch (err) {
        next(err);
    }

}

const index = async (req, res, next) => {
    try {

        const tags = await prisma.tag.findMany();
        res.json(tags);
    } catch (err) {
        next(err);
    }
}

const show = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        const tag = await prisma.tag.findUnique({
            where: { id }
        });
        if (tag) {
            res.json(tag);
        } else {
            throw new Error(`Tag con id ${id} non trovato.`);
        }
    } catch (err) {
        next(err);
    }
}


const update = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        const tag = await prisma.tag.update({
            where: { id },
            data: req.body,
        });
        res.json(tag);
    } catch (err) {
        next(err);
    }
}

const destroy = async (req, res, next) => {

    try {
        const id = parseInt(req.params.id);
        await prisma.tag.delete({
            where: { id },
        });
        res.json(`Tag con id ${id} eliminato con successo.`);
    } catch (err) {
        next(err);
    }

}

module.exports = {
    store,
    index,
    show,
    update,
    destroy
}