import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'
import event from './schemas/event'

export default defineConfig({
  name: 'default',
  title: 'Find local chess website',

  projectId: 'p2oqk5fj',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Pending Events')
              .child(S.documentList().title('Pending Events').filter('_type == "event" && status == "pending"')),
            ...S.documentTypeListItems().filter(item => item.getId() !== 'event'),
            S.documentTypeListItem('event').title('All Events'),
          ]),
    }),
  ],

  schema: {
    types: [...schemaTypes, event],
  },
})
