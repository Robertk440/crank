//% Application
(function()
	{
		//% Application instantiation
		// This is where we pass in all dependancies for the application - from controllers
		// to ngmodules, they must first be passed in here to be made available.
		var application=angular.module('Application',['ngRoute','Controllers.Application']);
		//%

		//% Bootstrapping
		// We bootstrap the web app here, making sure the document element is ready before we do
		// so. We then bootstrap it as the generic "Application".
		angular.element(document).ready(function()
			{
				angular.bootstrap(document,['Application']);
			}
		);
		//%

		//% Router
		application.config(function($locationProvider,$routeProvider)
			{
				$locationProvider.html5Mode(true);

				$routeProvider
					.when('/',
						{
							template:'<h1>TEST</h1>'
						}
					)
					.otherwise(
						{
							redirectTo:'/'
						}
					);
			}
		);
		//%
	}
)();
