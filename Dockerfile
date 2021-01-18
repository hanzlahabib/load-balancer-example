FROM node:alpine
RUN pwd
WORKDIR /app
RUN npm install
COPY . .
CMD ["npm", "run", "start"]