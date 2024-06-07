// Importo PrismaClient
const { PrismaClient } = require("@prisma/client");

// Inizializzo Prisma
const prisma = new PrismaClient();

// Importo la funzione per generare lo slug
const createSlug = require("../utils/slug.js");

// Store dei Posts
const store = async (req, res, next) => {

    const { title, content } = req.body;

    // Genero lo slug
    const slug = createSlug(title);

    const data = {
        title,
        slug: slug,
        image: req.body.image ? req.body.image : '',
        content,
        published: req.body.published ? true : false
    }

    try {
        const post = await prisma.post.create({ data });
        res.status(200).send(post);
    } catch (err) {
        next(err);
    }
}


// Index dei Posts
const index = async (req, res, next) => {

    try {
        const where = {};
        const { published, text, page = 1, limit = 5 } = req.query;

        // Filtro pubblicato
        if (published) where.published = published === 'true';

        // Filtro text
        if (text) {
            where.OR = [
                { title: { contains: text } },
                { content: { contains: text } }
            ];
        }

        // Paginazione
        const offset = (page - 1) * limit;

        const totalItems = await prisma.post.count({ where });
        const totalPages = Math.ceil(totalItems / limit);

        if (page > totalPages) {
            throw new Error(`La pagina ${page} non esiste.`);
        }

        const posts = await prisma.post.findMany({
            where,
            take: parseInt(limit),
            skip: parseInt(offset)
        });
        res.json({
            data: posts,
            page,
            totalItems,
            totalPages
        });
    } catch (err) {
        next(err);
    }
}

// Show dei Posts
const show = async (req, res, next) => {
    try {
        const { slug } = req.params;
        const post = await prisma.post.findUnique({
            where: { slug: slug }
        });

        if (post) {
            res.json(post);
        } else {
            res.status(404).json({ error: `Post con slug ${slug} non trovata` })
        }

    } catch (err) {
        next(err);
    }
}

// Update dei Posts
const update = async (req, res, next) => {
    try {
        const { slug } = req.params;
        const post = await prisma.post.update({
            where: { slug },
            data: req.body
        });
        res.json(post);
    } catch (err) {
        next(err);
    }
}

// Destroy dei Posts
const destroy = async (req, res, next) => {
    try {
        const { slug } = req.params;
        const post = await prisma.post.delete({
            where: { slug }
        });
        res.json(`Post con slug ${slug} eliminato con successo.`);
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