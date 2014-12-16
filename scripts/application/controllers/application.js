//# Application
// This is the global application controller. It encompasses the entire application
// and should be used to store appropriately global information.
(function()
	{
		// Instantiation
		var controllers=angular.module('Application');
		//

		controllers.controller('ApplicationController',function($scope)
			{
				$scope.show_demos=false;
			}
		);
	}
)();
