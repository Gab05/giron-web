# Giron Web App

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Firebase Deploy

Steps to deploy to firebase:

- Make sure you are logged in using `firebase login`
- Run `npm run build`
- Deploy using `firebase deploy`
- To deploy web app only, add param `firebase deploy --only hosting`
- To deploy functions only, add param `firebase deploy --only functions`

## Firebase configs and secrets

This project expects the `src/firebase-config.js` file which has been voluntarily excluded from version control.

The project expects the file to export the following firebase objects:
```javascript
export { firebaseApp, firebaseConfig, firebaseStorage };
```
Which should be defined and initialized in this file. These are initialized through the `firebase` and `@firebase/storage` libraries and require the firebase project configuration object available in the Project console, settings page.
