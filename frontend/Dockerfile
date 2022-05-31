FROM node:16.15-alpine3.14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --save --legacy-peer-deps

COPY . .

RUN npm run build