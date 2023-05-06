FROM node:lts-slim AS client
WORKDIR /app
COPY client/ ./client/
RUN cd client && npm install && npm run build

FROM node:lts-slim AS server
WORKDIR /app
COPY --from=client /app/client/build ./client/build
COPY /package*.json ./
RUN npm install
COPY src/config/server.js ./

EXPOSE 8080

CMD ["start"]