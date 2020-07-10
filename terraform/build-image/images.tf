###############################################
###               Variables                 ###
###############################################
variable "reports-service-dockerfile" {
  default = "."
}
variable "reports-service-name" {
  default = "reports-service"
}
variable "reports-service-directory" {
  default = "reports-service"
}
variable "reports-service-source" {
  default = "source"
}
variable "reports-service-cleanup" {
  default = "rm -rf node_modules dist package-lock.json"
}
variable "reports-service-npminstall" {
  default = "npm install"
}
variable "reports-service-npmtest" {
  default = "npm test"
}
variable "reports-service-npmbuild" {
  default = "npm run build"
}

#################################################
### REPORTS-SERVICE : Build Image Service ###
#################################################
resource "null_resource" "reports-service-cleanup" {
  provisioner "local-exec" {
    working_dir = "${var.reports-service-source}"
    command = "${var.reports-service-cleanup}"
  }
}

resource "null_resource" "reports-service-install" {
  depends_on = [null_resource.reports-service-cleanup]
  provisioner "local-exec" {
    working_dir = "${var.reports-service-source}"
    command = "${var.reports-service-npminstall}"
  }
}

resource "null_resource" "reports-service-test" {
  depends_on = [null_resource.reports-service-install]
  provisioner "local-exec" {
    working_dir = "${var.reports-service-source}"
    command = "${var.reports-service-npmtest}"
  }
}

resource "null_resource" "reports-service-build" {
  depends_on = [null_resource.reports-service-install]
  provisioner "local-exec" {
    working_dir = "${var.reports-service-source}"
    command = "${var.reports-service-npmbuild}"
  }
}

resource "null_resource" "reports-service" {
  depends_on = [null_resource.reports-service-build]
  provisioner "local-exec" {
    command = "docker build -t ${var.reports-service-name} ${var.reports-service-dockerfile}"
  }
}
