FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install --frozen-lockfile

COPY . .
RUN npm run build:pwa

FROM node:22-alpine

WORKDIR /app
COPY --from=build /app/dist ./dist
COPY package*.json ./

RUN npm install --production

CMD ["npm", "run", "preview"]