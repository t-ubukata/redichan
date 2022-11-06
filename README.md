# redichan_frontend

Redichan web frontend application.

## Installation

### Prerequisites

- Ubuntu or MacOS
- git
- Nods.js v18.x

```
git clone https://github.com/t-ubukata/redichan_frontend.git
cd redichan_frontend
npm install
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
Please note it you need to ```npm run json-server``` before testing.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run lint`

Runs ESLint.

### `npm run fix`

Runs ```npm run format && npm run lint:fix```.

### `npm run format`

Runs Prettier.

### `npm run lint:fix`

Runs ```eslint --fix 'src/**/*.{js,jsx,ts,tsx}'```

### `npm run json-server`

Runs mock API server, which is ```json-server --watch db.json --routes routes.json --middlewares middleware.js --port 4000```.

