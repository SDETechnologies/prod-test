# build environment
FROM node:14-alpine as react-build
WORKDIR /app
COPY . ./
# RUN yarn
# RUN yarn build
RUN npm run build

# server environment
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/configfile.template

# COPY --from=react-build /app/build /usr/share/nginx/html
COPY --from=react-build /app/client/build /usr/share/nginx/html

ENV PORT 8080
# ENV HOST 0.0.0.0
ENV HOST https://cra-cloud-run-snc4sjprxq-uc.a.run.app
EXPOSE 8080
CMD sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/configfile.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"

# RUN npm start
CMD ["npm start"];

