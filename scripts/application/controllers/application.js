//# Application
// This is the global application controller. It encompasses the entire application
// and should be used to store appropriately global information.

application.controller('ApplicationController',function($geolocation,$scope)
	{
		$scope.position;

		$geolocation().then(function(position)
			{
				$scope.position=position;
			}
		);
	}
);
