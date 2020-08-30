FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run ng build -- --prod

# second stage
FROM nginx:alpine
COPY --from=node /app/dist/frontend-paypal-integration /usr/share/nginx/html
