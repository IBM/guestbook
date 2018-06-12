# Build the analyzer example
# Usage:
#   [VERSION=v1] [REGISTRY="docker.io/ibmcom"] make build

VERSION?=v1.1
REGISTRY?=docker.io/ibmcom

all: build

release: clean build push clean

# Builds a docker image that builds the app and packages it into a
# minimal docker image
build:
	docker build --pull -t "${REGISTRY}/analyzer:${VERSION}" .

# push the image to an registry
push:
	docker push ${REGISTRY}/analyzer:${VERSION}

# remove previous images
clean:
	docker rmi -f "${REGISTRY}/analyzer:${VERSION}" || true

.PHONY: release clean build push all
