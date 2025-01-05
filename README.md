# Portfolio Website 2.0

A personal portfolio website to serve as a self-introduction, organize personal projects, and link to various means of contact.

- URL: https://michael-wang.ca
- Alternate URL: https://new-website-phi-liart.vercel.app

- Language: JavaScript
- Framework: NextJS
- Host: Vercel
- Additional Modules:
    - React-Bootstrap (CSS)
    - ESLint (Linting)
    - Jest (Unit testing)
    - React Testing Library (Unit testing)

## Usage

- `npm run dev`: start the website locally in development mode
- `npm run build`: compile a production build of the website
- `npm run start`: start the website locally in production mode
- `npm run lint`: lint the code
- `npm run test`: run the Jest unit tests

## CHANGELOG

- 4 January 2025: Removed Resume
- 29 November 2024: Updated NodeJS from v16 to v22
- 4 March 2023: Refactor README.md
- 3 March 2023: audited package.lock, implemented [codeql pipeline](.github\workflows\codeql.yml)
- 30 January 2023: Add ESLint, refactor React components from .js to .jsx, delete unused files
- 29 January 2023: Replace dead Cors Heroku dyno with cors-anywhere, tinker with CSS to make page look better when not fullscreen
- 3 January 2023: Customize the favicons
- 29 September 2022: Make the project cards a component apart from the main index page
- 23 August 2022: Refactor project card layout and add images to the project cards
- 5 August 2022: Implement [Github Actions Pipeline](.github\workflows\node.js.yml) to test and lint the code
- 3 August 2022: Implement [unit testing](./tests/) using Jest and React-Testing-Library
- 29 July 2022: Implement the Projects section of the main page
- 17 July 2022: Further tinkering with CSS (margins, component alignment, etc.)
- 10 July 2022: Minor overhaul of CSS, added [Navbar](./components/navbar.jsx) and icons
- 16 May 2022: Add CSS and [Layout.js](./components/layout.jsx)
- 24 April 2022: Implement XKCD comic widget
- 23 April 2022: Initial commit for basic site and features
