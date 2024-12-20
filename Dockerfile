# Build app into a image file
FROM node:20 AS build
WORKDIR /app
COPY . .
RUN npm install && npm run build

# Serve the app using a node server
FROM node:20
WORKDIR /app
COPY --from=build /app/build /app/build
RUN npm install -g serve

EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]
