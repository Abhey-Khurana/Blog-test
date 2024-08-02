# Use the official Node.js image as a base image
FROM node:18

# Set the working directory in the container
WORKDIR ./server.js
# WORKDIR /Users/zestgeek-29/Documents/office work /JS-Practice/Task-2/Blog/server.js

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 5000

# Define the command to run the application
CMD ["npm", "start"]
