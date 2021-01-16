import { resolve } from 'path';

async function turnDecksIntoPages({ graphql, actions }) {
  const { data } = await graphql(`
  query {
    decks: allSanityDeck {
      nodes {
        _id
        slug {
          current
        }
      }
    }
  }
  `);
  

  data.decks.nodes.forEach((deck) => {
    actions.createPage({
      component: resolve('./src/templates/Deck.js'),
      path: `/${deck.slug.current}`,
      context: {
        slug: deck.slug.current,
      },
    });
  });
}

export async function createPages(params) {
  await turnDecksIntoPages(params)
}