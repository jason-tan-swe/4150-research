#!/bin/bash

# Delete Kubernetes manifests
echo "Deleting Kubernetes manifests..."
kubectl delete -f persistent-volumes/user-service-pvc.yml
kubectl delete -f persistent-volumes/product-service-pvc.yml
kubectl delete -f persistent-volumes/order-service-pvc.yml
kubectl delete -f deployments/user-service-deployment.yml
kubectl delete -f deployments/product-service-deployment.yml
kubectl delete -f deployments/order-service-deployment.yml
kubectl delete -f services/user-service-service.yml
kubectl delete -f services/product-service-service.yml
kubectl delete -f services/order-service-service.yml
kubectl delete -f ingress.yml

echo "Kubernetes manifests deleted successfully."