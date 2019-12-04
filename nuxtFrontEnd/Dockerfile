FROM node

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN npm install nuxt
COPY . /usr/src/app/

RUN npm install

ENV HOST 0.0.0.0
EXPOSE 3000
CMD ["npm", "run", "dev"]
