# Use the official Node.js 18.14 image as the base image
FROM node:18.14

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and yarn.lock files to the container
COPY . .

# Install the app's dependencies
# RUN yarn install --frozen-lockfile

# Copy the rest of the app's source code to the container
# COPY . .

# Expose port 3000 for the app to listen on
EXPOSE 5137

# Start the app with the "yarn dev" command
CMD ["yarn", "dev", "--host"]
