FROM node:lts-slim AS client
WORKDIR /app
COPY client/ ./client/
RUN cd client && npm install && npm run build

FROM node:lts-slim AS server
WORKDIR /root/
COPY --from=client /usr/src/app/client/build ./client/build
COPY server/package*.json ./server/
RUN cd server && npm install
COPY server/index.js ./server/

EXPOSE 8080

CMD ["node", "./server/index.js"]