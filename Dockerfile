FROM node:slim

WORKDIR /react-counter-app

COPY package.json .
RUN npm i

COPY . .
CMD npm run dev