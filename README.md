# BLOGGED

This is a blog application made using MERN Stack.

## Features

1. Individual user profiles
2. Read and write blogs
3. Filter blogs according to category or/and user

## Requirments
[Node -v14](https://nodejs.org/en/)

## Steps for installation

1. Clone the repository
```terminal
git clone https://github.com/amazingandyyy/mern.git
```
2. Install dependencies
```terminal
yarn install
```
3. Create a .env file
```terminal
touch .env
```
4. Add your [MongoDB Atlas URL](https://www.mongodb.com/cloud/atlas) to the env file as 'MONGO_URL'
5. Start the server
```terminal
npm start
```
5. Go to [http://localhost:5000/](http://localhost:5000/) to access the website.

## For React development
1. Go to client folder
```terminal
cd client/
```
2. Install dependencies
```terminal
yarn install
```
3. Start React
```terminal
npm start
```

## Docker
1. Build
```terminal
docker build -t mern-blog .
```
2. Run
```terminal
docker run -it -p 5000:5000 mern-blog
```
