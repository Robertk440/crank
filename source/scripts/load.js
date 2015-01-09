//# Load
// Using Load.js to load additional script files.
// These are ordered and set to load in a dependant way.

load('/dependencies/angular/angular.min.js').then(
	{
		libraries:['/dependencies/jquery/dist/jquery.js',
		'/dependencies/angular-route/angular-route.min.js'],

		application:['/scripts/application.js'],

		services:['/scripts/application/services/geolocation.js'],

		controllers:['/scripts/application/controllers/application.js']
	}
);
