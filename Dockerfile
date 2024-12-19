FROM node:latest AS dev

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app

RUN npm ci

FROM dev
EXPOSE 3000

CMD ["npm","start"]

