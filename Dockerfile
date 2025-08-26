
# Use a Node.js base image with Yarn installed
FROM node:22.13.1-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and yarn.lock files
COPY ./package*.json  ./

# Install dependencies
RUN npm config set registry https://registry.npmmirror.com
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the app for production
RUN yarn build

# Serve the built React app with a static server
RUN npm install -g serve
CMD ["serve", "-s", "dist"]

# Expose the app port
EXPOSE 4000
