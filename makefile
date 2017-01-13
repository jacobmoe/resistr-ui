.PHONY: build test
NODE_ENV ?= development

default:
	make build && make start-dev-server

build:
	node node_modules/.bin/webpack && cp src/index.html build/index.html

test:
	@echo "setup tests"

start-dev-server:
	node node_modules/.bin/webpack-dev-server --content-base build/
