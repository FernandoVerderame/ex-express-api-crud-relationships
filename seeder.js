const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const posts = [
    {
        id: 1,
        title: "Introduzione a JavaScript",
        slug: "introduzione-javascript",
        content: "In questo articolo esploreremo le basi di JavaScript, un linguaggio di programmazione essenziale per lo sviluppo web.",
        published: true,
        categoryId: 2,
        tags: [1, 4, 5]
    },
    {
        id: 2,
        title: "Guida al CSS Flexbox",
        slug: "guida-css-flexbox",
        content: "Flexbox è un layout model in CSS3 progettato per aiutare a distribuire spazio lungo un container e allineare gli elementi.",
        published: false,
        categoryId: 1,
        tags: [2, 3]
    },
    {
        id: 3,
        title: "Comprendere le Promesse in JavaScript",
        slug: "comprendere-promesse-javascript",
        content: "Le Promesse in JavaScript rappresentano il completamento (o fallimento) eventuale di un'operazione asincrona e i suoi valori risultanti.",
        published: true,
        categoryId: 2,
        tags: [1, 5]
    },
    {
        id: 4,
        title: "Introduzione a TypeScript",
        slug: "introduzione-typescript",
        content: "TypeScript è un superset tipizzato di JavaScript che si compila in JavaScript semplice.",
        published: true,
        categoryId: 2,
        tags: [1, 5, 6]
    },
    {
        id: 5,
        title: "Creare API RESTful con Node.js",
        slug: "creare-api-restful-nodejs",
        content: "Impara come creare un'API RESTful utilizzando Node.js ed Express.",
        published: false,
        categoryId: 2,
        tags: [5, 7]
    },
    {
        id: 6,
        title: "Guida a Async/Await in JavaScript",
        slug: "guida-async-await-javascript",
        content: "Async/Await semplifica la scrittura di codice asincrono in JavaScript, rendendolo simile al codice sincrono.",
        published: true,
        categoryId: 2,
        tags: [1, 5]
    },
    {
        id: 7,
        title: "Vue.js per Principianti",
        slug: "vuejs-principianti",
        content: "Vue.js è un framework progressivo per costruire interfacce utente.",
        published: false,
        categoryId: 1,
        tags: [1, 8, 9]
    },
    {
        id: 8,
        title: "Gestione dello Stato con Redux",
        slug: "gestione-stato-redux",
        content: "Redux è un contenitore di stato prevedibile per applicazioni JavaScript.",
        published: true,
        categoryId: 2,
        tags: [4, 6]
    },
    {
        id: 9,
        title: "Introduzione a GraphQL",
        slug: "introduzione-graphql",
        content: "GraphQL è un linguaggio di query per API e un runtime per l'esecuzione di tali query.",
        published: true,
        categoryId: 2,
        tags: [1, 4, 5]
    },
    {
        id: 10,
        title: "Caratteristiche Moderne di JavaScript",
        slug: "caratteristiche-moderne-javascript",
        content: "Esploriamo alcune delle caratteristiche moderne disponibili in JavaScript (ES6 e oltre).",
        published: false,
        categoryId: 2,
        tags: [1, 4]
    },
    {
        id: 11,
        title: "Creare App Mobili con React Native",
        slug: "creare-app-mobili-react-native",
        content: "React Native permette di creare app veramente native e non compromette l'esperienza degli utenti.",
        published: true,
        categoryId: 2,
        tags: [4, 5]
    },
    {
        id: 12,
        title: "Rendering Server-Side con Next.js",
        slug: "rendering-server-side-nextjs",
        content: "Next.js è un framework React che abilita il rendering server-side e la generazione statica del sito.",
        published: false,
        categoryId: 2,
        tags: [4, 5, 6]
    },
    {
        id: 13,
        title: "Comprendere il DOM",
        slug: "comprendere-dom",
        content: "Il DOM è un'interfaccia di programmazione per documenti web.",
        published: true,
        categoryId: 2,
        tags: [3, 4, 5]
    },
    {
        id: 14,
        title: "Nozioni di Base sull'Accessibilità Web",
        slug: "nozioni-base-accessibilita-web",
        content: "L'accessibilità web significa che i siti web, gli strumenti e le tecnologie sono progettati e sviluppati in modo che le persone con disabilità possano usarli.",
        published: true,
        categoryId: 7,
        tags: [4, 5]
    },
    {
        id: 15,
        title: "Testare Applicazioni JavaScript",
        slug: "testare-applicazioni-javascript",
        content: "Impara come testare le applicazioni JavaScript utilizzando vari framework di test.",
        published: false,
        categoryId: 2,
        tags: [1, 5, 6]
    },
    {
        id: 16,
        title: "Suggerimenti per l'Ottimizzazione delle Prestazioni",
        slug: "suggerimenti-ottimizzazione-prestazioni",
        content: "Migliora le prestazioni delle tue applicazioni web con questi suggerimenti di ottimizzazione.",
        published: true,
        categoryId: 2,
        tags: [4, 5]
    },
    {
        id: 17,
        title: "Distribuire Applicazioni con Docker",
        slug: "distribuire-applicazioni-docker",
        content: "Docker è un set di prodotti piattaforma come servizio che utilizzano la virtualizzazione a livello di sistema operativo per consegnare software in pacchetti chiamati container.",
        published: true,
        categoryId: 2,
        tags: [4, 5, 6]
    },
    {
        id: 18,
        title: "GraphQL vs REST: Un Confronto",
        slug: "graphql-vs-rest-confronto",
        content: "Esploriamo le differenze tra GraphQL e REST e vediamo quale si adatta meglio alle tue esigenze.",
        published: true,
        categoryId: 2,
        tags: [1, 4, 5]
    },
    {
        id: 19,
        title: "Guida a Svelte per Principianti",
        slug: "guida-svelte-principianti",
        content: "Svelte è un nuovo framework JavaScript che compila i componenti in codice efficiente che aggiorna il DOM.",
        published: false,
        categoryId: 2,
        tags: [1, 5, 6]
    },
    {
        id: 20,
        title: "Le Basi di Webpack",
        slug: "basi-webpack",
        content: "Webpack è un modulo bundler per JavaScript che permette di gestire dipendenze e asset in modo efficiente.",
        published: true,
        categoryId: 2,
        tags: [1, 5, 6]
    }
];

const categories = [
    { id: 1, name: "Tecnologia" },
    { id: 2, name: "Programmazione" },
    { id: 3, name: "Design" },
    { id: 4, name: "Marketing" },
    { id: 5, name: "Fotografia" },
    { id: 6, name: "Finanza" },
    { id: 7, name: "Salute" },
    { id: 8, name: "Sport" },
    { id: 9, name: "Viaggi" },
    { id: 10, name: "Cucina" }
];

const tags = [
    { id: 1, name: "JavaScript" },
    { id: 2, name: "CSS" },
    { id: 3, name: "HTML" },
    { id: 4, name: "React" },
    { id: 5, name: "Node.js" },
    { id: 6, name: "MongoDB" },
    { id: 7, name: "Express" },
    { id: 8, name: "Angular" },
    { id: 9, name: "Vue" },
    { id: 10, name: "SQL" }
];

// Categorie
// prisma.category.createMany({
//     data: categories
// })
//     .then()
//     .catch(err => console.error(err));

// // Tag
// prisma.tag.createMany({
//     data: tags
// })
//     .then()
//     .catch(err => console.error(err));

// Posts
posts.forEach(post => {

    const { id, title, slug, content, categoryId, published, tags } = post;

    const data = {
        id,
        title,
        slug,
        content,
        categoryId,
        published,
        tags: { connect: tags.map(id => ({ id })) }
    }

    prisma.post.create({ data }).then().catch(err => console.error(err));

})
