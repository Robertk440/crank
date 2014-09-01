//% Application
(function()
	{
		var store=
			{
				application:''
			}

		store.application=angular.module('application',['angular-md5','application.controllers','application.directives','application.services']);

		angular.element(document).ready(function()
			{
				angular.bootstrap(document,['application']);
			}
		);
	}
)();
