import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const site = 'https://mee.foundation/';

export default defineConfig({
  site,
  integrations: [
    starlight({
      title: 'Mee Foundation',
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
          label: 'Start Here',
          items: [
            {
              label: 'Getting Started',
              link: 'getting-started',
            },
            {
              label: 'Releases',
              link: 'releases',
            }
          ],          
        },
        {
          label: 'Core Concepts',
          autogenerate: { directory: 'basics' },
        },
        {
          label: 'Integration Guide',
          autogenerate: { directory: 'integration' },

        },
        {
          label: 'Contribution Guide',
          autogenerate: { directory: 'contributing' },
        }
      ],
    }),
  ],
});
