NODE_ENV ?= development

build:
	node node_modules/.bin/webpack && cp src/index.html build/index.html

