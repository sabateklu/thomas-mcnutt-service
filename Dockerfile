FROM node:14

RUN mkdir -p /app

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3003

CMD ["node", "Server/start"]

