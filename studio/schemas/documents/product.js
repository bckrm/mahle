import {format} from 'date-fns'

export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Some frontend will require a slug to be set to be able to show the project',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'projectPortableText'
    },
    {
      name: 'link',
      title: 'Executable File Link',
      type: 'string'
    },
    {
      name: 'productImage',
      title: 'Product image',
      type: 'figure'
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{type: 'reference', to: {type: 'feature'}}]
    },
    {
      name: 'specifications',
      title: 'Specifications',
      type: 'array',
      of: [{type: 'reference', to: {type: 'specification'}}]
    }
  ],
  preview: {
    select: {
      title: 'title',
      description: '_rawDescription',
      media: 'productImage',
      features: 'features',
      specifications: 'specifications'
    }
  }
}
