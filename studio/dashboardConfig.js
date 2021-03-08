export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60469a38ebd03b097ca2fff2',
                  title: 'Sanity Studio',
                  name: 'miletuslabs-org-studio',
                  apiId: '21588a56-3210-43a9-8765-70903b1716e4'
                },
                {
                  buildHookId: '60469a38b8af50091f5f047e',
                  title: 'Blog Website',
                  name: 'miletuslabs-org',
                  apiId: 'f665ee01-e10d-4920-89ac-14c3ccaa9712'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/menyiseg/miletuslabs-org',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://miletuslabs-org.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
