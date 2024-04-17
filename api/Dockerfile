FROM node:21.7.3-alpine

WORKDIR /app

COPY . /app

RUN npm install -g json-server

EXPOSE 3000

CMD ["json-server", "--watch", "./dotlib.json", "--host", "0.0.0.0"]
