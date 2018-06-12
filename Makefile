# Build all of the images in the guestbook example
# Usage:
#   [REGISTRY="docker.io/ibmcom"] make build

REGISTRY?=docker.io/ibmcom

all: build

release: clean build push clean

# Build each image
build:
	REGISTRY=${REGISTRY} make -C v1/guestbook build
	REGISTRY=${REGISTRY} make -C v2/guestbook build
	REGISTRY=${REGISTRY} make -C v2/analyzer build

# push the image to an registry
push:
	REGISTRY=${REGISTRY} make -C v1/guestbook push
	REGISTRY=${REGISTRY} make -C v2/guestbook push
	REGISTRY=${REGISTRY} make -C v2/analyzer push

# remove previous images and containers
clean:
	REGISTRY=${REGISTRY} make -C v1/guestbook clean
	REGISTRY=${REGISTRY} make -C v2/guestbook clean
	REGISTRY=${REGISTRY} make -C v2/analyzer clean

.PHONY: release clean build push
