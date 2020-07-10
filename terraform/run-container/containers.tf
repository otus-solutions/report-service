variable "reports-service-port"{
  default = 53003
}

variable "reports-service-name"{
  default = "reports-service:latest"
}

variable "reports-service-network"{
  default = "otus-api-network"
}

resource "docker_image" "reports-service" {
  name = "${var.reports-service-name}"
}

resource "docker_container" "reports-service" {
  name = "reports-service"
  image = "${docker_image.reports-service.name}"
  ports {
	internal = 8080
	external = "${var.reports-service-port}"
  }
  networks_advanced {
    name = "${var.reports-service-network}"
  }
}
