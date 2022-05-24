FROM node:lts-alpine AS build
# ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install 
# --production --silent && mv node_modules ../
COPY . .
EXPOSE 8000
# RUN chown -R node /usr/src/app
# USER node
CMD ["npm", "run", "dev"]

# FROM nginx:latest AS stage
# COPY --from=build /usr/src/app/dist /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx" ,"-g", "daemon off;"]