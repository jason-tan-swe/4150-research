# Use Node.js base image
FROM node:22


# Copy only the package manager lockfile and package.json
COPY package.json pnpm-lock.yaml ./

# Copy the rest of the application files
COPY . /usr/src/app

# Set working directory
WORKDIR /usr/src/app

# Install pnpm globally in the container
RUN npm install -g pnpm

# Install dependencies using pnpm
RUN pnpm install --frozen-lockfile

# Ensure node_modules is not copied from the host machine
RUN rm -rf node_modules && pnpm install --frozen-lockfile

# Expose the application port
EXPOSE 8082

# Start the application
CMD ["pnpm", "start"]