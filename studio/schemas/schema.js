// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import feature from './documents/feature'
import specification from './documents/specification'
import siteSettings from './documents/siteSettings'
import hero from './documents/hero'
import product from './documents/product'
import accessory from './documents/accessory'
import faq from './documents/faq'
import educational_resource from './documents/educational_resource'
import detail from './documents/detail'
import support from './documents/support'
import review from './documents/review'

// Object types
import bioPortableText from './objects/bioPortableText'
import figure from './objects/figure'
import projectPortableText from './objects/projectPortableText'
import simplePortableText from './objects/simplePortableText'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    bioPortableText,
    figure,
    projectPortableText,
    simplePortableText,
    product,
    accessory,
    hero,
    faq,
    educational_resource,
    detail,
    support,
    review,
    // The following are document types which will appear
    // in the studio.
    feature,
    specification,
    siteSettings
  ])
})
