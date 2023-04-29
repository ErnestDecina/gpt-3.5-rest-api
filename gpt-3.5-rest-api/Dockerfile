FROM node:19.8.1-alpine3.16

WORKDIR /srv/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["node", "build/src/app.js"]



