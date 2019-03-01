import { Project } from './project';

export const PROJECTS: Project[] = [
  {name: 'ClimateLens',
    fullsizeimage: './assets/img/climatelens_fullsize.png',
    thumbnail: './assets/img/climatelens_thumbnail.png',
    imgDir: './assets/img/climatelens/',
    description: 'A concept app design marrying the emerging ' +
      'technology of augmented reality with a current social ' +
      'issue, climate change that aimed to bring awareness and' +
      ' provide a call to action for users.',
    link: '/climatelens'},
  {name: 'Investment Bank Microsite',
    fullsizeimage: './assets/img/microsite_fullsize.png',
    thumbnail: './assets/img/microsite_thumbnail.png',
    imgDir: './assets/img/microsite/',
    description: '',
    link: '/investment-microsite'},
  {name: 'Portfolio Website',
    fullsizeimage: './assets/img/climatelens_thumbnail.png',
    thumbnail: './assets/img/climatelens_thumbnail.png',
    imgDir: './assets/img/portfolio/',
    description: '',
    link: 'portfolio-website-project'},
  {name: 'Case Studies',
    fullsizeimage: './assets/img/climatelens_thumbnail.png',
    thumbnail: './assets/img/climatelens_thumbnail.png',
    imgDir: './assets/img/case_studies/',
    description: '',
    link: 'case-studies'},
];
