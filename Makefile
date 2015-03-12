G=../node_modules/gulp/bin/gulp.js
P=./node_modules/pulldown/bin/cli.js

s:
	npm install

b:
	cd build; \
	$(G) --env production;

w: 
	cd build; \
	$(G) watch

i:
	$(P) $(l) -o ./src/vendors/scripts