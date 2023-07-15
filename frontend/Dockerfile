# Use an official Node.js runtime as the base image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if exists)
COPY /web/package*.json ./

# Install project dependencies
RUN npm ci --only=production

# Copy the entire React project to the working directory
COPY /web .

# Build the React app for production
RUN npm run build

# Serve the static files with a lightweight HTTP server
RUN npm install -g serve
CMD ["serve", "-s", "build", "-l", "3000"]

# Expose port 3000 for the server
EXPOSE 3000
