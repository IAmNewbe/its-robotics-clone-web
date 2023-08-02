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

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

#### Folder overview

```
.
├── public
│   ├── index.html                 
│   
├── src
|   ├── Assets                    (contains all images, css files, font files.)
│   │   ├── Gallery               (contain main Image/banner, icon, company img) 
│   │   └── Team                  (contain ITS Robotics Team Images Gallery) 
|   |       ├── Abinara-1
|   |       ├── Abu Robocon
|   |       ├── Banyubramanta
|   |       ├── Barunastra
|   |       ├── Bayucaraka
|   |       ├── Ichiro
|   |       ├── Iris
|   |       ├── Rival
|   |       └── Virose
|   |    
|   |
│   ├── components                (React components)
│   │   ├── Navbar.js
│   │   ├── 
│   │   ├── 
│   │   └── 
│   │
│   ├── containers        
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   ├── 
│   │   └── 
|   |
│   ├── Pages                       
│   │   ├── Achievements.js
│   │   ├── Home.js
│   │   ├── News.js
│   │   ├── OurEvent.js
│   │   └── Team.js
|   |
│   ├── App.js
│   │
│   └── index.js                 (basic design-system in react)
│       
│
├── static                       (no code: images, json, locales,...)
│   ├── assets
│   └── locales
|       
├── 
├── docker-compose.yml           (database service for now)
├── package.json                 (the workspace config)
└── tailwind.config.js           (tailwind config)
```