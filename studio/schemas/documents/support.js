import {format} from 'date-fns'

export default {
  name: 'support',
  title: 'Support',
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
    {
      name: 'details',
      title: 'Details',
      type: 'array',
      of: [{type: 'reference', to: {type: 'detail'}}]
    },
  ]
}
