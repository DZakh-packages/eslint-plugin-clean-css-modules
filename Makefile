ROOT=$(shell pwd)
BUILD=$(shell git log --pretty=format:'%h' -n 1)

LIB_TEST_DOCKER_TAG=lib-test:${BUILD}

test: build-test
	docker run -t --rm ${LIB_TEST_DOCKER_TAG}

build-test:
	docker build -t ${LIB_TEST_DOCKER_TAG} -f ./docker/Dockerfile.test .
