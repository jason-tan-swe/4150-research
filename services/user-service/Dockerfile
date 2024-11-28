# Use Node.js base image
FROM node:22

# Set working directory
WORKDIR /usr/src/app

# Copy only the package manager lockfile and package.json
COPY package.json pnpm-lock.yaml ./

# Install pnpm globally in the container
RUN npm install -g pnpm

# Install dependencies using pnpm
RUN pnpm install --frozen-lockfile

# Copy the rest of the application files
COPY . .

# Ensure node_modules is not copied from the host machine
RUN rm -rf node_modules && pnpm install --frozen-lockfile

# Expose the application port
EXPOSE 8080

# Start the application
CMD ["pnpm", "start"]