# sergeialimov.com

React based webapp built with webpack. Serves as a personal webpage of Sergei Alimov [sergeialimov.com](http://www.sergeialimov.com)


**Status:** Active

## Hi-level description
1. `src/core`
Contains core functionality files, such as redux store and app initialization file.
2. `src/scenes`
Each scene represents a different page with its own reducer, container and components.
3. `src/templates`
Contains components that are used in multiple scenes.


## Installation
1. `git clone git@github.com:sergeialimov/sergeialimov.com.git`
2. `cd sergeialimov.com`
3. `npm i` install node modules
4. `npm run dev` run application in dev mode

## NPM commands
1. `npm start` - run dev server in development mode with hot reloading
3. `npm run build` - build `index.html` and `bundle.js` files in `/build` folder
5. `npm run dev` - run webpack in watch mode
6. `npm run lint` - run eslint
7. `npm run fix` - run eslint with `--fix` flag

## Built with
1. [React](https://reactjs.org/) - frontend library
2. [Redux](https://redux.js.org/) - state managment library

#### Updated 13.06.2020