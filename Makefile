.PHONY: deps
deps:
	bundle install

.PHONY: serve
serve:
	bundle exec jekyll serve --host=0.0.0.0