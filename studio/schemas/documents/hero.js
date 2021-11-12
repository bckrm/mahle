
export default {
  name: 'hero',
  type: 'document',
  title: 'Hero',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle'
    },
    {
      name: 'heroimage',
      title: 'Hero Image',
      type: 'figure'
    },
    {
      name: 'herodescriptiontitle',
      type: 'string',
      title: 'Hero Description Title'
    },
    {
      name: 'herodescriptionsubtitle',
      type: 'string',
      title: 'Hero Description Subtitle'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'bioPortableText'
    },
    {
      name: 'herodescriptionimage',
      title: 'Hero Description Image',
      type: 'figure'
    },
  ]
}
