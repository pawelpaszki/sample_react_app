FROM node:slim

WORKDIR /react-counter-app

COPY package.json .
RUN npm cache clean --force
RUN npm i

COPY . .
CMD npm run dev