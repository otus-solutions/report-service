# outcomes-service
This project aims to carry out all activities related to outcomes and follow-up of participants.

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
`docker build -t outcomes-service .`

## Build Container
`sudo docker run -d -p 80:8080
-e MEMORY=1024
-e DATABASE_HOSTNAME='outcomes-db'
-e DATABASE_POR=27017
-e DATABASE_USER='user'
-e DATABASE_PASS='user'
-e DATABASE='outcomes-database'
--name outcomes-service outcomes-service`

# Contato
contato@otus-solutions.com.br