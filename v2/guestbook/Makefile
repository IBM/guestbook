# Build the guestbook example
# Usage:
#   [VERSION=v2] [REGISTRY="docker.io/ibmcom"] make build

VERSION?=v2
REGISTRY?=docker.io/ibmcom

all: build

release: clean build push clean

# Builds a docker image that builds the app and packages it into a
# minimal docker image
build:
	docker build --pull -t "${REGISTRY}/guestbook:${VERSION}" .

# push the image to an registry
push: build
	docker push ${REGISTRY}/guestbook:${VERSION}

# remove previous images
clean:
	docker rmi -f "${REGISTRY}/guestbook:${VERSION}" || true

.PHONY: release clean build push all
