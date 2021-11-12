import {format} from 'date-fns'

export default {
  name: 'review',
  title: 'Review',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'popularity',
      title: 'Popularity',
      type: 'number',
      description: 'The popularity is a decimal number between 0 - 5',
    },
    {
      name: 'jobtitle',
      title: 'Job Title',
      type: 'string'
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      description: 'You can use this field to present the date a review has published',
      type: 'datetime'
    },
    {
      name: 'comment',
      title: 'Comment',
      type: 'projectPortableText'
    },
    {
      name: 'ispublished',
      title: 'Is Published?',
      type: 'boolean'
    }
  ]
}
