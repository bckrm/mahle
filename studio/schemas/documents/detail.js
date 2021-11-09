export default {
  name: 'detail',
  type: 'document',
  title: 'Detail',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'figure'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'bioPortableText'
    },
    {
      name: 'islink',
      title: 'isLink?',
      type: 'boolean'
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string'
    }
  ],
  preview: {
    select: {
      title: 'title',
      description: 'description',
      media: 'image'
    }
  }
}
