/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        'basic': '#023047',
        'secondary': '#8ecae6',
      },
      typography: ({ theme }) => ({
        basic: {
          css: {
            '--tw-prose-body': theme('colors.basic[800]'),
            '--tw-prose-headings': theme('colors.basic[900]'),
            '--tw-prose-lead': theme('colors.basic[700]'),
            '--tw-prose-links': theme('colors.basic[900]'),
            '--tw-prose-bold': theme('colors.basic[900]'),
            '--tw-prose-counters': theme('colors.basic[600]'),
            '--tw-prose-bullets': theme('colors.basic[400]'),
            '--tw-prose-hr': theme('colors.basic[300]'),
            '--tw-prose-quotes': theme('colors.basic[900]'),
            '--tw-prose-quote-borders': theme('colors.basic[300]'),
            '--tw-prose-captions': theme('colors.basic[700]'),
            '--tw-prose-code': theme('colors.basic[900]'),
            '--tw-prose-pre-code': theme('colors.basic[100]'),
            '--tw-prose-pre-bg': theme('colors.basic[900]'),
            '--tw-prose-th-borders': theme('colors.basic[300]'),
            '--tw-prose-td-borders': theme('colors.basic[200]'),
            '--tw-prose-invert-body': theme('colors.basic[200]'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.basic[300]'),
            '--tw-prose-invert-links': theme('colors.white'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.basic[400]'),
            '--tw-prose-invert-bullets': theme('colors.basic[600]'),
            '--tw-prose-invert-hr': theme('colors.basic[700]'),
            '--tw-prose-invert-quotes': theme('colors.basic[100]'),
            '--tw-prose-invert-quote-borders': theme('colors.basic[700]'),
            '--tw-prose-invert-captions': theme('colors.basic[400]'),
            '--tw-prose-invert-code': theme('colors.white'),
            '--tw-prose-invert-pre-code': theme('colors.basic[300]'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.basic[600]'),
            '--tw-prose-invert-td-borders': theme('colors.basic[700]'),
          },
        },
      }),
    },
    
    
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

