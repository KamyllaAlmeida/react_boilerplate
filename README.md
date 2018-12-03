Chatty App
=====================

Chatty app allows users to communicate with each other without having to register accounts. It uses React, a popular front-end library created and used heavily by Facebook as well as modern tools for Node including Webpack and Babel.

## Final App

[Chatty page](/img/page.png)

### Usage

Clone the boilerplate and create your own git repo.

```
git clone git@github.com:lighthouse-labs/react-simple-boilerplate.git
cd react-simple-boilerplate
git remote rm origin
git remote add origin [YOUR NEW REPOSITORY]
# Manually update your package.json file
```

Install the dependencies.

```
npm install
```

Start the websocket server.

```
cd chatty_server
npm start
```
Then start the client server.

```
On the main folder.
npm start
open http://localhost:3000
```

### Static Files

You can store static files like images, fonts, etc in the `build` folder.

For example, if you copy a file called my_image.png into the build folder you can access it using `http://localhost:3000/build/my_image.png`.

### Linting

This boilerplate project includes React ESLint configuration.

```
npm run lint
```

### Dependencies

* React
* Webpack
* [babel-loader](https://github.com/babel/babel-loader)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
