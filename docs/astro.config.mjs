import { defineConfig, passthroughImageService } from 'astro/config';
import starlight from '@astrojs/starlight';

export const site = 'https://mee.foundation/';

export const sharedConfig = {
  title: 'Mee Foundation',
  logo: {
    light: '/src/assets/logo-light.svg',
    dark: '/src/assets/logo-dark.svg',
    replacesTitle: true,
  },
}

export default defineConfig({
  site,
  integrations: [
    starlight({
      ...sharedConfig,
      logo: {
        light: '/src/assets/logo-light.svg',
        dark: '/src/assets/logo-dark.svg',
        replacesTitle: true,
      },
      editLink: {
        baseUrl: 'https://github.com/meefoundation/docs/edit/develop/docs/',
      },
      social: {
        github: 'https://github.com/MeeFoundation',
      },
      customCss: process.env.NO_GRADIENTS ? [] : ['/src/assets/landing.css'],
      locales: {
        root: { label: 'English', lang: 'en' },
      },
      sidebar: [
        {
          label: 'For User',
          items: [
            {
              label: 'Start Here',
              items: [
                {
                  label: 'Getting Started',
                  link: 'user/getting-started',
                },
                {
                  label: 'Releases',
                  link: 'user/releases',
                }
              ],          
            },
            {
              label: 'Core Concepts',
              autogenerate: { directory: 'user/basics' },
            },
            {
              label: 'Contribution Guide',
              autogenerate: { directory: 'user/contributing' },
            }
          ]
        },
        {
          label: 'For Developers',
          items: [
            {
              label: 'Start Here',
              items: [
                {
                  label: 'Getting Started',
                  link: 'developers/getting-started',
                },
              ],          
            },
            {
              label: 'Integration Guide',
              autogenerate: { directory: 'developers/integration' },
    
            }
          ]
        },
        {
          label: "Ad Tech",
          items: [
            {
              label: 'Start Here',
              items: [
                {
                  label: 'Getting Started',
                  link: 'advertising/getting-started',
                },
              ],          
            },
            {
              label: 'Core Concepts',
              autogenerate: { directory: 'advertising/basics' },
            },
          ]
        }
      ],
      components: {
        Sidebar: './src/components/MultiSidebar.astro',
        EditLink: './src/components/EditLink.astro',
      },
    }),
  ],
});
