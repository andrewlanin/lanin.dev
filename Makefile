.PHONY: deps
deps:
	bundle install

.PHONY: serve
serve:
	bundle exec jekyll serve --drafts --host 0.0.0.0 --trace
