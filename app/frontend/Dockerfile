FROM node:16.14-alpine

WORKDIR /app-frontend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

# Inicie o servidor
CMD ["npm", "run", "dev"]
