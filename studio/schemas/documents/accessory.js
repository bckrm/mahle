import {format} from 'date-fns'

export default {
  name: 'accessory',
  title: 'Accessories',
  type: 'document',
  fields: [
    {
      name: 'sku',
      title: 'SKU',
      type: 'string'
    },
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
        source: 'sku',
        maxLength: 96
      }
    },
    {
      name: 'image',
      title: 'Image',
      type: 'figure'
    }
  ],
  preview: {
    select: {
      sku: 'sku',
      title: 'title',
      media: 'image'
    }
  }
}
