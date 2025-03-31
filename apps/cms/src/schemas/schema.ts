import {defineType, defineField} from 'sanity'

export const schemaTypes = [
  defineType({
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
      defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
      }),
      defineField({
        name: 'body',
        title: 'Body',
        type: 'text',
      }),
    ],
  }),
]
