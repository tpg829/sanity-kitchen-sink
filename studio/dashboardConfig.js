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
                  buildHookId: '605208ff004e8891065ea661',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ikp34p76',
                  apiId: '379155ba-b4fa-4c52-9f6e-d230dba2682a'
                },
                {
                  buildHookId: '60520900391e92966b363128',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-k1f3zyak',
                  apiId: '038499f0-bcf2-41b2-b811-ee259597a9f9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tpg829/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-k1f3zyak.netlify.app', category: 'apps'}
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
