export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
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
                  buildHookId: '5f858f75af5db2010d830b5b',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-o67ovr1t',
                  apiId: '899438ba-4597-41da-a66a-d989e0468a60'
                },
                {
                  buildHookId: '5f858f752ad4260e519aa30e',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-3xox9t1c',
                  apiId: '09832abd-f8f6-4ded-9b78-a4a6c10ccbd4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Srinibondugula/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-3xox9t1c.netlify.app', category: 'apps'}
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
