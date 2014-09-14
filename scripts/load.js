//# Load
// Using Modernizr Load to load additional script files
// Modernizr Grunt builds out the required file with Load, make sure you run the
// Default grunt task to generate this. It is created as "moderzir-build.js" in the dependencies/modernizr

//# Dependecies
Modernizr.load(
	[
		'/dependencies/jquery/dist/jquery.js',
		'/dependencies/angular/angular.min.js',
		'/dependencies/firebase/firebase.js',
		'/dependencies/angular-animate/angular-animate.min.js',
		'/dependencies/angularfire/dist/angularfire.min.js',
		'/dependencies/angular-route/angular-route.min.js',
		'/dependencies/angular-sanitize/angular-sanitize.min.js',
		'/dependencies/angular-md5/angular-md5.min.js',
		'/dependencies/ngstorage/ngStorage.min.js'
	]
);
//#

//# Polyfills
Modernizr.load(
	[
		'//cdn.polyfill.io/v1/polyfill.min.js'
	]
);
//#

//# Application
Modernizr.load(
	[
		'/scripts/application/controllers/user.js',
		'/scripts/application/controllers/application.js',
		'/scripts/application/directives.js',
		'/scripts/application/services.js',
		'/scripts/application.js'
	]
);
//#
