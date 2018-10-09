# react-starter-kit
Based on React 16 and React Router 4

## Features
- Hot Reloading with Webpack Serve and React Hot Loader.
- Support for js, scss, css, png, jpg, svg, ttf, eot, svg, otf from the box.
- Usage of ES6+ features with Babel.
- JS linting with ESLint.
- Handling styles with Autoprefixer and PostCSS.
- HTML and EJS templates support with HTML Webpack Plugin.

Redux, MobX or any other way to manage state management choice is based on the project requirements.

## npm scripts
- _npm start_ - start BrowserSync with Webpack Serve.
- _npm run build_ - clean _dist_ folder and build project in it.
- _npm run analyze_ - the same as _build_ command + open Webpack Bundle Analyzer server.

## Prefered folders structure so far
- _dist/_ - output folder for Webpack in production mode.
- _src/_ - entry point for Webpack (index.js), main .scss file (styles.scss), potscss config. 
  - _/scss/_ - .scss files.
  - _/scripts/_ - .js files.
  - _/templates/_ - template files.
  	- _/pages/_ - main templates for pages. Automaticly picked up by HTML Webpack Plugin.
  	- _/parts/_ - templates for headers, section etc. Not built by Webpack by default.
  - _/static/_ - various static files to be included in the project. 
  
Inner structure of _src_ subfolders may vary though files are prefered to be grouped by domain.
