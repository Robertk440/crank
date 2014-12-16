//# Application
// Main application function that provides bootstraping
// and routing, as well as configuration and core dependecy
// injection.
(function()
	{
		// Bootstrapping
		// We bootstrap the web app here, making sure the document element is ready before we do
		// so. We then bootstrap it as the generic "Application".
		angular.element(document).ready(function()
			{
				angular.bootstrap(document,['Application']);
			}
		);
		//

		// Application instantiation
		// This is where we pass in all dependancies for the application - from controllers
		// to ngmodules, they must first be passed in here to be made available.
		var application=angular.module('Application',['ngRoute','Controllers.User','ApplicationController']);
		//

		// Configuration
		// Specify actions that occur when a URL is hit - send a template,
		// or redirect.
		application.config(function($locationProvider,$routeProvider)
			{
				$locationProvider.html5Mode(
					{
						enabled:true,
						requireBase:false
					}
				);

				$routeProvider
					.when('/',
						{
							templateUrl:'templates/home.html'
						}
					)
					.otherwise(
						{
							redirectTo:'/'
						}
					);
			}
		);
		//
	}
)();
