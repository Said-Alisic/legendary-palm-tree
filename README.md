# legendary-palm-tree

Product pricing domain micro-service built with NX, NestJS and a Docker database.

## Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [NodeJS and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## Setup

- 1. Navigate to the NX backend project `legendary-palm-tree`
- 2. Create new `.env` file that resembles the `.env.example`
- 3. Run `docker-compose up -d` to run the Docker postgres database
- 4. Run `npm-install` to install the node modules
- 5. Run `npm run api` to serve the NX backend API
- 6. Navigate to `http://localhost:3000/products` in your browser or favorite API testing tool to seed the database with 5 products and lists all products
- 7. Feel free to play around with the product pricing endpoints

## API

### Products endpoints

- (GET) `http://localhost:3000/products` - Seeds the database with 5 products and lists all products

### Product Pricings endpoints

- (POST) `http://localhost:3000/product/pricings` - Creates a new product pricing
- (GET) `http://localhost:3000/product/pricings` - Lists all product pricings
- (PATCH) `http://localhost:3000/product/pricings/{id}` - Updates an existing product pricing
- (DELETE) `http://localhost:3000/product/pricings/{id}` - Deletes an existing product pricing
