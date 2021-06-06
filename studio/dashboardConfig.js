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
                  buildHookId: '60bc385c7dcd20ebb68e6021',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-asazbuxx',
                  apiId: '9da94252-8395-4ca2-992e-48d21d492c13'
                },
                {
                  buildHookId: '60bc385da151b69e555eeaac',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-z7wue81o',
                  apiId: '31203aaa-9c31-4fbe-8507-4032c46d3212'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dichenafederico/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-z7wue81o.netlify.app', category: 'apps'}
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
