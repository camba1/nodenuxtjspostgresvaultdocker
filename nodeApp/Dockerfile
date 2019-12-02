FROM node

WORKDIR /code
COPY package.json /code

RUN npm install -g nodemon@1.19.1
RUN npm install pg
RUN npm install express

RUN npm install

COPY . /code

EXPOSE 3000
CMD ["npm","start"]
