#!/bin/bash

# Navigate to the services directory and build Docker images
echo "Building Docker images..."
(cd services && ./build-images.sh)
if [ $? -ne 0 ]; then
  echo "Failed to build Docker images"
  exit 1
fi

# Navigate to the k8s directory and apply Kubernetes manifests
echo "Applying Kubernetes manifests..."
(cd k8s && ./deploy.sh)
if [ $? -ne 0 ]; then
  echo "Failed to apply Kubernetes manifests"
  exit 1
fi

echo "Deployment completed successfully."