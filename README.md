# CryptoTracker Client
Create a wallet of cryptocurrency coins you want to follow. See chronological visualizations of coin prices measured in days, weeks or months dating as far back as 2010 all the way to the present.

This repo is the front-end client, built in React.  You can see the app live at [https://cryptotracker-omega.vercel.app/](https://cryptotracker-omega.vercel.app/)

The app is meant for desktop use, but will still scale for tablet and mobile viewing.

To check out the app, you can use the following dummy account to see the onboarding experience:

#### Demo Account Details

* email: sampleuser@sampleuser.com
* password: foobar

## Introduction

If you'd like to learn more about Crypto Tracker, discover cryptocurrency coins you haven't heard about or just want to see general cryptocurrency prices, you have come to the right place. With this app you will be able to explore cryptocurrency coins, save the ones you like in a wallet and refer to them whenever you'd like.

## Screenshots

| Home       | Favorites   | Search     | Login       | Dashboard   | New Dash   | Results     |
|------------|-------------|------------|-------------|-------------|------------|-------------|
| <img src="/assets/cryptotracker-home-public.png" width="250"> | <img src="/assets/cryptotracker-home-favorites-public.png" width="250"> | <img src="/assets/cryptotracker-home-search-public.png" width="250"> | <img src="/assets/cryptotracker-login.png" width="250"> | <img src="/assets/cryptotracker-dashboard.png" width="250"> | <img src="/assets/cryptotracker-dashfiller.png" width="250"> | <img src="/assets/cryptotracker-search-query-public.png" width="250"> |

## Technology

#### Front End

* React
  * Create React App
  * React Router
* HTML5
* CSS3 (scratch - no frameworks)

#### Testing

* Jest (screen captures & smoke tests)

#### Production

* Deployed via Vercel

## Getting Started

1. Get api key for the Cryptocompare API: https://min-api.cryptocompare.com/

2. Create a `.env.local` file in the project root and add the following:  

````
NODE=development  
REACT_APP_CRYPTOCOMPARE_API_KEY=`<CRYPTOCOMPARE API KEY GOES HERE>`  
REACT_APP_API_KEY=`<SERVER API KEY GOES HERE - IF APPLICABLE>`  

````

3. Run `npm install` to load dependencies

4. Run `npm test` to ensure a stable build

This is only the front end client, so develop locally you'll need the backend server as well.

To get the backend up and running see [https://github.com/nelsandersoncreative/cryptotracker-server](https://github.com/nelsandersoncreative/cryptotracker-server)

Deployments are handled through Vercel  



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
# crypotracker
