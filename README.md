# React starter kit with Parcel

The simplest possible way to get started with React. Using [Parcel](https://parceljs.org/) gets you a dev server with hot reloading of JS and SASS.

### Get started

1. `npm install` to install Parcel, React, and Sass (only needs to be done the first time)
1. `npm start` to build everything, watch for changes, and run the site
1. Go to http://localhost:1234 to see your site

Any changes to HTML, CSS, or JS will automatically show up without refreshing. Build output is served from `/dev-dist` in case you want to see what it looks like.

### Build for deployment

1. Run `npm run build`

That's it. Build output lands in `/dist`. This is a working static site and can be dropped on any web server.

### How it works

The starting point is `src/index.html`. See how it refers to JS and SCSS files by relative paths like `./index.js`. The browser wouldn't know what to do with those paths if you opened `index.html` directly, but Parcel follows them to 

* find the source files
* do some work on them (e.g., bundle dependencies, turn JSX into normal JS), and 
* replace your relative paths with working links to the resulting files

Because Parcel is doing all the work, the only configuration needed here is the definition of `build` and `start` in `package.json`.

Note that this is Parcel 1. [Parcel 2](https://medium.com/@devongovett/parcel-2-0-0-alpha-1-is-here-8b160c6e3f7e) is being worked on but it's not out yet.