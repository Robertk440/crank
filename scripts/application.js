//% Application
(function()
	{
		//% Application instantiation
		var application=angular.module('Application',['Controllers.Application']);
		//%

		angular.element(document).ready(function()
			{
				angular.bootstrap(document,['Application']);
			}
		);
	}
)();
