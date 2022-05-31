FROM node:16.15-alpine3.14

WORKDIR /usr/src/app/api

COPY package*.json ./

RUN npm install

COPY . .
