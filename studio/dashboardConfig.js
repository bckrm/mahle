export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '61869e1b43db9f603e955545',
                  title: 'Sanity Studio',
                  name: 'mahle-studio',
                  apiId: 'cafea40f-6c76-42a2-92ab-a7bcab5e38e3'
                },
                {
                  buildHookId: '61869e1b83f7e93d1ba2854c',
                  title: 'Portfolio Website',
                  name: 'mahle',
                  apiId: '948656f6-e531-4cb9-852d-51d39a8670db'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/petrospatelis/mahle',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://mahle.netlify.app',
            category: 'apps'
          }
        ]
      }
    }
  ]
}
