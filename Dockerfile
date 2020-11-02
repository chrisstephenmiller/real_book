FROM node:12.19.0-alpine3.12
WORKDIR /app

COPY package.json /app
RUN yarn

COPY public /app/public
COPY server /app/server
COPY src /app/src
RUN yarn build

EXPOSE 8080

CMD yarn start-prod