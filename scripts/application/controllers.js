//# Controllers
(function()
	{
		var store=
			{
				applicationControllers:''
			}

		store.applicationControllers=angular.module('application.controllers',[]);

		//% Application Controller
		// Global controller for the application
		store.applicationControllers.controller('ApplicationController',['$http','$scope',function($http,$scope)
			{
				$http.get('data/application.json').success(function(data)
					{
						$scope.applicationData=data;
					}
				);
			}
		]);
	}
)();
