# TDD in React TypeScript using Jest and Enzyme

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
In this project, I am using the Test Driven Development with [Jest](https://jestjs.io/) and [Enzyme](https://enzymejs.github.io/enzyme/).

## Prerequisites

Jest is already configured and installed with Create React App.
We just need to install `enzyme` and `enzyme-adapter-react`.

- PS: Currently, there is no official `enzyme-adapter-react-17` for the React 17 version.
  So, I am using a version from the community. [Issue](https://github.com/enzymejs/enzyme/issues/2429).

```
npm install -D enzyme @wojtekmaj/enzyme-adapter-react-17
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
