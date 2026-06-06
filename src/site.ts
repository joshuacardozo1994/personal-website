// Single source of truth for identity/contact constants used across the site.
// Change a handle or email here, not in 7 files.
const githubUser = 'joshuacardozo1994';

export const site = {
  author: 'Joshua Cardozo',
  location: 'Goa, India',
  email: 'joshua.cardozo@gmail.com',
  githubUser,
  github: `https://github.com/${githubUser}`,
  cvPage: '/cv',            // the on-site CV viewer
  cv: '/cv-light.pdf',      // default download (light)
  cvLight: '/cv-light.pdf', // theme-matched downloads
  cvDark: '/cv-dark.pdf',
} as const;
