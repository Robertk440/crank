//% Application
(function()
	{
		var store=
			{
				application:''
			}

		//% Application instantiation
		store.application=angular.module('application',['angular-md5','ngAnimate','ngRoute','ngStorage','firebase','application.controllers','application.directives','application.services']);
		//%

		//% Configuration
		store.application.config(['$routeProvider',function($routeProvider)
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
