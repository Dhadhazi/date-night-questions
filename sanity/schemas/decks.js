export default {
  name: 'deck',
  title: 'Decks',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 100 },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Short description about the deck',
    },
    {
      name: 'category',
      title: 'Choose a category',
      type: 'reference',
      to: [{type: 'category'}]
    },
    {
      name: 'background',
      title: 'Choose a background pattern',
      type: 'reference',
      to: [{type: 'background'}]
    },
    {
      name: 'questions',
      title: 'Questions',
      type: 'array',
      of: [{type: 'string'}]
    },
  ],
};