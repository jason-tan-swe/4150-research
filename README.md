# CIS*4150 Research Project

***Note: All things were done on an M1 Macbook***

[The Paper!](https://github.com/user-attachments/files/18838835/CIS.4150.pdf)


----

## Starting the Project

### Need to deploy the whole app onto your local cluster?

Do this from root:
```
./deploy.sh
```

### Need to start the project?
Do the following in order
1. Install Docker
1. Install Minikube
1. Install Kubectl
1. Start the cluster using the following command; adjust as needed for your specs
```
minikube start --cpus=4 --memory=8192 --driver=docker
```
1. Ensure cluster is running with ingress
```
minikube status
minikube addons enable ingress
```
1. Use this command in your terminal
```
minikube tunnel
```
1. Access via heading to any of the following:
```
http://localhost/users/1
http://localhost/products
http://localhost/orders/1
```

## Starting with AKS (Azure Kubernetes)
Requirements
- pnpm
- Docker
- kubectl
- Azure CLI
- An Azure account.
- An Azure Kubernetes Service (AKS) cluster provisioned.
- An Azure Container Registry (ACR) created.
- A Service Principal with appropriate roles (e.g., Contributor, AcrPull).
- `ACR_PASSWORD`: Azure Container Registry password.
- `AZURE_CREDENTIALS`: Service principal credentials in JSON format.
- `KUBECONFIG`: Base64-encoded Kubernetes configuration file.
- `NGROK_AUTHTOKEN` (if ngrok is used).
- Modify your own .kube/config to point towards the AKS

## Kubernetes Troubleshooting

### Need to test that all endpoints are running smoothly within the Kubernetes cluster?

```
kubectl run test-pod --image=curlimages/curl -it --rm -- /bin/sh
```

### Need to see the pods running?
```
kubectl get pods
```

### Need to see if the services are running?
```
kubectl get services
```

### Need to see logs?
```
kubectl logs <pod-name>
```

### Need to see persistent volumes?
```
kubectl get pvc
```

### Need to see what endpoints are available?
```
kubectl get endpoints
```

### Need to see logs in AKS?
```
kubectl logs -n ingress-nginx -l app.kubernetes.io/name=ingress-nginx
```
