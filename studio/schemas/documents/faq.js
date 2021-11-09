import {format} from 'date-fns'

export default {
  name: 'faq',
  title: 'FAQs',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'bioPortableText'
    },
  ],
  preview: {
    select: {
      title: 'title',
      description: 'description'
    }
  }
}
