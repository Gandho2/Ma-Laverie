```Dockerfile
FROM node:18

WORKDIR /app

COPY . .

RUN npm init -y

CMD ["node", "index.js"]
