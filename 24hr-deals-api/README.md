# 24 Hour Deals API

Node.js + Express api + MongoDB <br>
You can run the service locally or through docker

## Run without Docker

### Set up mongo db locally 

<https://docs.mongodb.com/manual/installation>

### Express server
1. Install dependencies <br>`npm install`

2. Run express Server<br>`npm start`

## Docker

### Quick start

You can get everything up and running by executing <br>
`npm run-script docker-start` <br>
this just runs the following 2 commands

1. Build the Image
`docker build --rm -t 24hr-deals-api:1 .`

2. Bring up the API and MongoDB containers
`docker-compose up -d`<br> hosted the service on port 5000 

### Shutdown
`docker-compose down` <br> will shutdown the containers down and remove them

### Check the service logs
`docker-compose logs`

## Mongo
if you just wanna play with Mongo or check the data is in the db

1. Once the Mongo container is running you can get into it with <br>
`docker exec -it mongo bash`<br>

2. start up the mongo shell inside the container <br>
`mongo` <br>

3. you should now be able to query the database <br>
<https://docs.mongodb.com/manual/reference/mongo-shell/>
