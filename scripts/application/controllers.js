//# Controllers
(function()
	{
		var store=
			{
				applicationControllers:''
			}

		//% Controllers instantiation
		store.applicationControllers=angular.module('application.controllers',[]);
		//%

		//% Application Controller
		// Global controller for the application
		store.applicationControllers.controller('ApplicationController',['$http','md5','$scope',function($http,md5,$scope)
			{
				$http.get('data/application.json').success(function(data)
					{
						$scope.application_data=data;
					}
				);

				$scope.email=md5.createHash("matthew@sandersons.id.au");
			}
		]);
	}
)();
