//% Application
(function()
	{
		var application;

		//% Application instantiation
		application=angular.module('application',['angular-md5','ngAnimate','ngRoute','ngStorage','firebase','controllers','directives','services']);
		//%

		//% Configuration
		application.config(['$routeProvider',function($routeProvider)
			{
				$routeProvider.
					when('/',
						{
							templateUrl:'/templates/home.html'
						}
					);
			}
		]);
		//%

		//% Bootstrap
		angular.element(document).ready(function()
			{
				angular.bootstrap(document,['application']);
			}
		);
		//%
	}
)();
