FROM node

WORKDIR /code
COPY package.json /code

RUN npm install -g nodemon
RUN npm install pg
RUN npm install express

RUN npm install

COPY . /code

EXPOSE 3000
CMD ["npm","start"]
