FROM node:10.9.2

COPY . .

RUN npm install

EXPOSE 8000

CMD npm start
