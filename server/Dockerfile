FROM node:25.6.1-alpine3.23 AS dev

WORKDIR /app

COPY package.json ./package.json
COPY yarn.lock ./yarn.lock
RUN yarn

COPY src ./src
COPY tsconfig.json ./tsconfig.json

CMD yarn dev


# Building node project
FROM node:25.6.1-alpine3.23 AS build

WORKDIR /app

COPY package.json ./package.json
COPY --from=dev /app/node_modules ./node_modules
COPY src ./src
COPY tsconfig.json ./tsconfig.json
RUN yarn build


# Downloading dependencies for production
FROM node:25.6.1-alpine3.23 AS deps

WORKDIR /app

COPY package.json ./package.json
RUN yarn --production=true


# Retrieve dependencies & built project to start
FROM node:25.6.1-alpine3.23 AS main

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY package.json ./package.json

CMD yarn start