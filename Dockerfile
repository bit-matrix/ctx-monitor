FROM node:14.17.6 as builder

ARG UI_API_URL
ARG UI_DB_URL
ARG UI_CTX_MONITOR_URL

ENV PUBLIC_URL $UI_CTX_MONITOR_URL
ENV UI_API_URL $UI_API_URL
ENV UI_DB_URL $UI_DB_URL

RUN mkdir /app
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . ./
RUN npm run-script build

FROM nginx:stable-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 81
STOPSIGNAL SIGINT
CMD ["nginx", "-g", "daemon off;"]