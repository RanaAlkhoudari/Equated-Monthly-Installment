# Equated Monthly Installment

## Getting Started

To get started you need to:

-Clone the repository

-Checkout to the master branch

### Note: Make sure to upgrade node to a new version, preferably to 20.10.0

-Install the dependencies: ```npm install```

-Create a .env file in the root and add the port like ```REACT_APP_PORT```

-Create another .env file inside the server folder and add the same port like ```PORT```

-Run ```npm start``` to start the React application 

-Change directory to server and run  ```node server.js```

-To run the tests, inside the server folder run ```npm test```

## Structure

```
.
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── server
│   ├── controllers
│   │   └── emi.js
│   ├── database
│   │   └── connect.js
│   ├── helpers
│   │   ├── calculateEmi.js
│   │   ├── handleErrorMessages.js
│   │   └── validateInputs.js
│   ├── models
│   │   └── emiModel.js
│   ├── server.js
│   └── tests
│       ├── apiRequests.test.js
│       ├── calculateEmi.test.js
│       └── validateInputs.test.js
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── components
    │   ├── EmailAddress.js
    │   ├── Error.js
    │   ├── Footer.js
    │   ├── Form.js
    │   ├── InterestRate.js
    │   ├── LoanTerm.js
    │   ├── LoanValue.js
    │   └── Navbar.js
    ├── helpers
    │   ├── isEmailValid.js
    │   └── validateInputLength.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── reportWebVitals.js
    ├── setupTests.js
    └── tests
        └── App.test.jsx
```

## Libraries/Frameworks

- nodejs: JS runtime for backend

- mongoose: mongodb database library for nodejs

- express: back end web application framework for Node.js

- MongoMemoryServer: spins up an actual/real MongoDB server programmatically from within nodejs
  
- React: library for web and native user interfaces

- Jest: JavaScript Testing Framework

  ## Api Calls

| Method | Url | Info
| --- | --- | --- |
| POST | /calculateEmi |  Creates a new emi
| GET | /calculateEmi |  Gets an emi

#### STRUCTURE

| Field | Type | Required | 
| --- | --- | --- |
| loanValue | number | yes |  
| interestRate | number | yes |
| loanTerm| number | yes |
| email | string | yes |
| emi | string | no |

 ## Status codes
 
| Statuscode | Statusmessage | Description 
| --- | --- | --- | 
| 200 | Ok | Everything proceeded according to the specifications
| 201 | Created | The request has been fulfilled 
| 400 | Bad Request | Input values are invalid 
| 404 | Not Found | The API URL does not point to a valid resource (Send a Get request and find no data)
| 500 | Internal Server Error | A generic error message, given when an unexpected condition is encountered and no more specific message is suitable


##############


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
