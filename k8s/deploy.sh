#!/bin/bash

# Apply Kubernetes manifests
echo "Applying Kubernetes manifests..."
kubectl apply -f persistent-volumes/user-service-pvc.yml
kubectl apply -f persistent-volumes/product-service-pvc.yml
kubectl apply -f persistent-volumes/order-service-pvc.yml
kubectl apply -f deployments/user-service-deployment.yml
kubectl apply -f deployments/product-service-deployment.yml
kubectl apply -f deployments/order-service-deployment.yml
kubectl apply -f services/user-service-service.yml
kubectl apply -f services/product-service-service.yml
kubectl apply -f services/order-service-service.yml
kubectl apply -f ingress.yml

echo "Kubernetes manifests applied successfully."