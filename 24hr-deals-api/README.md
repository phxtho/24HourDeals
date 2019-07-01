# 24 Hour Deals API

Node.js + Express api + MongoDB <br>
You can run the service locally or through docker

## Docker

### Build Image
`docker build --rm -t 24hr-deals-api:1 .`

### Run
`docker-compose up -d`<br> will bring up the containers for the API and Database and host the service on port 5000 

### Shutdown
`docker-compose down` <br> will shutdown the containers down and remove them

## Run without Docker

### Install dependencies

`npm install`

### Run express Server

`npm start`

### Install mongo db locally 

<https://docs.mongodb.com/manual/installation>