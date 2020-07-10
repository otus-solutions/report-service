# reports-service

# Build Code
`npm run production --prefix source/`

# Terraform

## Build Image
`terraform init terraform/build-image`
`terraform apply terraform/build-image`

## Build Container
`terraform init terraform/run-container`
`terraform apply terraform/run-container`

# !Terraform

## Build Code
`npm run production --prefix source/`

## Build Image
`docker build -t reports-service .`

## Build Container
`sudo docker run -d -p 80:8080
-e MEMORY=1024
--name reports-service reports-service`

# Contato
contato@otus-solutions.com.br