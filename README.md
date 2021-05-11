# Controller API Microservice

## Introduction
Controller API service is a microservice that exposes an endpoint to user to send messages to a predefined set of contact. These messages are then added to a queue

## Table of Contents
1. <a href="#tech-stack-used">Technologies Used</a>
2. <a href="#application-features">Application Features</a>
3. <a href="#how-to-use">How To Use</a>
4. <a href="#author">Author</a>
4. <a href="#license">License</a>


## Technologies Used

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Body-parser](https://www.npmjs.com/package/body-parser)
- [Babel](https://babeljs.io) 
- [Eslint](https://eslint.org/)
- [Airbnb](https://www.npmjs.com/package/eslint-config-airbnb) - - [style guide](https://github.com/airbnb/javascript)
- [Redis Queue Package: Bull](https://www.npmjs.com/package/bull)
- [Yarn](https://redis.io/)
- [Nodemon](https://www.npmjs.com/package/nodemon)

## Application Features

* A new user can be authenticated
* An aunthenticated user can send message to a user group

## API endpoints
```
##USERS
POST Request -> localhost:8000/api/users

##MESSAGES
POST Request -> localhost:8000/api/messages

```
## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Yarn](https://yarnpkg.com/en/docs/install) and [Node.js](https://nodejs.org/en/download/) 
(which comes with [npm](http://npmjs.com)) installed on your computer. You also need to have redis server installed loccally.

From your command line:

```bash
# Clone this repository
$ git clone https://github.com/julietezekwe/controller-api

# Go into the repository
$ cd controller-api

# configurations
$ copy the content of .env.sample into a new file .env and provide all the needed variables

# Install dependencies
$ yarn install

# Create .env file for environmental variables in your root directory like the .env.example file


# Run the app
$ yarn watch
```

## Author

Chidimma Juliet Ezekwe

## License

ISC

---
