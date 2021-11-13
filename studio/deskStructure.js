import S from '@sanity/desk-tool/structure-builder'
import { MdSettings } from "react-icons/md";

const hiddenDocTypes = listItem =>
  !['hero', 'support', 'review', 'siteSettings'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        )
        .icon(MdSettings),
      S.listItem()
        .title('Hero')
        .schemaType('hero')
        .child(S.documentTypeList('hero').title('Hero')),
      S.listItem()
        .title('Support')
        .schemaType('support')
        .child(S.documentTypeList('support').title('Support')),
      S.listItem()
        .title('Reviews')
        .schemaType('review')
        .child(S.documentTypeList('review').title('Reviews')),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
