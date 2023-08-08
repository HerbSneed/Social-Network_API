# Social Network API

## Description

 This is an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. 

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Application Functionality

```md
GIVEN a social network API
WHEN the USER enters the command to invoke the application
THEN the server is started and the Mongoose models are synced to the MongoDB database
WHEN the USER opens API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN the USER test API POST, PUT, and DELETE routes in Insomnia
THEN they are able to successfully create, update, and delete users and thoughts in the database
WHEN the USER test API POST and DELETE routes in Insomnia
THEN they are able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Instructions
1. In the IDE of your choice type npm install in your terminal command line to install all dependencies.

2. Type node server.js or npm run dev (nodemon server).

3. Now the server is up and run open Insomnia, Postman or your api platform of choice to begin testing the routes.

## Technologies
Express JS
MongoDB
Mongoose
Nodemon

## Links
GitHub
https://github.com/HerbSneed/Social-Network_API

Video Walkthrough

