G=../node_modules/gulp/bin/gulp.js

b:
	cd build; \
	$(G);

w: 
	cd build; \
	$(G) watch

s:
	cd build; \
	node server.js
