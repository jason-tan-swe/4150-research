#!/bin/bash

# Define an array of service directories and image names
services=(
  "user-service"
  "product-service"
  "order-service"
)

# Loop through each service and build the Docker image
for service in "${services[@]}"; do
  echo "Building Docker image for $service..."
  docker build -t $service:local ./$service
  if [ $? -ne 0 ]; then
    echo "Failed to build Docker image for $service"
    exit 1
  fi
done

echo "All Docker images built successfully."