// Single source of truth for identity/contact constants used across the site.
// Change a handle or email here, not in 7 files.
const githubUser = 'joshuacardozo1994';

export const site = {
  author: 'Joshua Cardozo',
  location: 'Goa, India',
  email: 'joshua.cardozo@gmail.com',
  githubUser,
  github: `https://github.com/${githubUser}`,
  cv: '/cv.pdf',
} as const;
