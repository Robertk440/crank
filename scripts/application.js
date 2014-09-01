//% Application
(function()
	{
		var store=
			{
				application:''
			}

		//% Application instantiation
		store.application=angular.module('application',['angular-md5','ngAnimate','ngRoute','firebase','application.controllers','application.directives','application.services']);
		//%

		//% Configuration
		store.application.config(['$routeProvider',function($routeProvider)
			{
				$routeProvider.
					otherwise(
						{
							redirectTo:function(routeParams,path,search)
								{
									return "/";
								}
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
