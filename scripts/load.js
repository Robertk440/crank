//# Load
// Using Modernizr Load to load additional script files
// Modernizr Grunt builds out the required file with Load, make sure you run the
// Default grunt task to generate this. It is created as "moderzir-build.js" in the dependencies/modernizr

//# Dependecies
Modernizr.load(
	[
		'/dependencies/angular/angular.min.js',
		'/dependencies/jquery/dist/jquery.js',
		'/dependencies/angular-route/angular-route.min.js'
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

//# Controllers
Modernizr.load(
	[
		'/scripts/application/controllers/application.js',
		'/scripts/application/controllers/user.js'
	]
);
//#

//# Directives
Modernizr.load(
	[

	]
);
//#

//# Factories
Modernizr.load(
	[

	]
);
//#

//# Services
Modernizr.load(
	[

	]
);
//#

//# Application
Modernizr.load(
	[
		'/scripts/application.js'
	]
);
//#
