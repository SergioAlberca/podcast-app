## Podcast App

Web application to search podcast and her episodes developed with react, typescript, , redux, css modules and vite.

## Features

<dl>
  <dt>Clean Architecture</dt>
  <dd>You can design applications with very low coupling and independent of technical implementation details, such as databases and frameworks. That way, the application becomes easy to maintain and flexible to change. It also becomes intrinsically testable. Here I’ll show how I structure my clean architecture projects. </dd>

  <dt>Next generation JavaScript</dt>
  <dd>Use template strings, object destructuring, arrow functions, JSX syntax and more.</dd>

  <dt>Redux with Redux Toolkit</dt>
  <dd>It helps us to structure our application as far as state management is concerned, understanding state as that information of the application, which when its value changes, causes said application to be updated to represent the change.</dd>

  <dt>CSS Modules</dt>
  <dd>CSS Modules is a CSS framework that allows you to write CSS classes and animations that have a default local scope and thus avoid the problems caused by global scope in CSS.</dd>

  <dt>Vitest</dt>
  <dd>Vite native test runner</dd>
</dl>

## Quick start

1.  Make sure that you have Node.js v8.15.1 and npm v5 or above installed.
2.  Clone this repo using `git clone https://github.com/SergioAlberca/podcast-app.git`
3.  Move to the appropriate directory: `cd podcast-app`.<br />
4.  Create a `.env.dev` file with environment variables which are written below.
5.  Create a `.env.production` file with environment variables which are written below.
6.  Run `npm i` in order to install dependencies and clean the git repo.<br />
    _At this point you can run `npm run dev` to see the podcast app at `http://127.0.0.1:5173/`._
7.  Run `npm run build` to create the production package.
8.  Run `npm run build:dev` to create the production package without minified files.
9.  Run `npm run lint` to check lint.
10. Run `npm run test` to run the test suites.
11. Run `npm run coverage` to generate the coverage folder.

## Documentation

- [Vite](https://vitejs.dev/) : Vite Next Generation Frontend Tooling.
- [Testing](https://vitest.dev/) : Vitest Blazing Fast Unit Test Framework.
- [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) : The Clean Architecture.
- [Redux Toolkit](https://redux-toolkit.js.org/) : The official, opinionated, batteries-included toolset for efficient Redux development.
- [React](https://es.reactjs.org/) : A JavaScript library for building user interfaces

## Environment variables

`.env.dev`
VITE_BASE_URL="https://itunes.apple.com"
VITE_CORS_URL="https://api.allorigins.win"
VITE_MODE="dev"

`.env.production`
VITE_BASE_URL="https://itunes.apple.com"
VITE_CORS_URL="https://api.allorigins.win"
VITE_MODE="production"
