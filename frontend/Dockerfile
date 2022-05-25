FROM node:lts-alpine AS build-stage
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install && mv node_modules ../
COPY . .
RUN npm run build
EXPOSE 8000
CMD ["npm", "run", "build"]

FROM nginx:latest AS prod-stage
COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]