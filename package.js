Package.describe({
	summary: "Latest version of Parsley.js packaged for meteor"
});

Package.on_use(function (api){
	api.add_files('lib/parsleyjs/parsley.js', 'client');
	api.add_files('lib/parsleyjs/parsley.extend.js', 'client');
});
