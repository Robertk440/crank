//% Application
(function()
	{
		var store=
			{
				application:''
			}

		//% Application instantiation
		store.application=angular.module('application',['angular-md5','ngAnimate','application.controllers','application.directives','application.services']);
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
