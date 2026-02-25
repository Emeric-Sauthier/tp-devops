FROM node:25.6.1-alpine3.23

WORKDIR /app

COPY package.json ./package.json
COPY yarn.lock ./yarn.lock
RUN yarn

COPY src ./src
COPY tsconfig.json ./tsconfig.json

CMD yarn dev