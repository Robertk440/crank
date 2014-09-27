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
		'/dependencies/angularfire/dist/angularfire.min.js',
		'/dependencies/firebase-simple-login/firebase-simple-login.js',
		'/dependencies/angular-animate/angular-animate.min.js',
		'/dependencies/angularfire/dist/angularfire.min.js',
		'/dependencies/angular-route/angular-route.min.js',
		'/dependencies/angular-sanitize/angular-sanitize.min.js',
		'/dependencies/angular-md5/angular-md5.min.js',
		'/dependencies/ngstorage/ngStorage.min.js',
		'/scripts/application.js'
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

	]
);
//#

//# Controllers
Modernizr.load(
	[
		'/scripts/application/controllers.js'
	]
);
//#

//# Directives
Modernizr.load(
	[
		'/scripts/application/directives.js'
	]
);
//#

//# Factories
Modernizr.load(
	[
		'/scripts/application/factories.js'
	]
);
//#

//# Services
Modernizr.load(
	[
		'/scripts/application/services.js'
	]
);
//#
