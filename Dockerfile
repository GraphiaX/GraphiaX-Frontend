# Use an official Node.js runtime as the base image
FROM node:alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package files and install dependencies (separately to benefit from caching)
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --only=production

# Copy the rest of the application files
COPY . ./

# Expose the port that your app listens on (if needed)
EXPOSE 3000

# Command to start the app
CMD ["npm", "start"]
