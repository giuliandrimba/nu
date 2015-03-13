G=../node_modules/gulp/bin/gulp.js
B=./node_modules/bower/bin/bower

s:
	npm install

b:
	cd build; \
	$(G) --env production;

w:
	cd build; \
	$(G) watch

i:
	$(B) install $(l) --save
