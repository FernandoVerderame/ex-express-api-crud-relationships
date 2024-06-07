// Importo PrismaClient
const { PrismaClient } = require("@prisma/client");

// Inizializzo Prisma
const prisma = new PrismaClient();

const store = async (req, res, next) => {

    const { name } = req.body;

    const data = { name }

    try {
        const category = await prisma.category.create({ data });
        res.status(200).send(category);
    } catch (err) {
        next(err);
    }

}

const index = async (req, res, next) => {
    try {

        const categories = await prisma.category.findMany();
        res.json(categories);
    } catch (err) {
        next(err);
    }
}

const show = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        const category = await prisma.category.findUnique({
            where: { id }
        });
        if (category) {
            res.json(category);
        } else {
            throw new Error(`Category con id ${id} non trovata.`, 404);
        }
    } catch (err) {
        next(err);
    }
}


const update = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        const category = await prisma.category.update({
            where: { id },
            data: req.body,
        });
        res.json(category);
    } catch (err) {
        next(err);
    }
}

const destroy = async (req, res, next) => {

    try {
        const id = parseInt(req.params.id);
        await prisma.category.delete({
            where: { id },
        });
        res.json(`Category con id ${id} eliminata con successo.`);
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