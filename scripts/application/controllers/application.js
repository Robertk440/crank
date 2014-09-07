//# ApplicationController
(function()
	{
		var store=
			{
				controllers:'',
			}

		//% Controllers instantiation
		store.controllers=angular.module('application.controllers',['application.controllers.user']);
		//%

		//% Application Controller
		// Global controller for the application
		store.controllers.controller('ApplicationController',['$firebase','$http','$location','md5','$route','$rootScope','$scope',function($firebase,$http,$location,md5,$route,$rootScope,$scope)
			{
				//% Set up database
				//% Connect and set values to rootscope for application wide access
				$rootScope.database_url=new Firebase("https://amber-fire-7539.firebaseio.com/");
				$rootScope.database_sync=$firebase($rootScope.database_url);
				$rootScope.database_object=$rootScope.database_sync.$asObject();
				//%

				$rootScope.database_object.$bindTo($scope,"database_data");

				console.log($rootScope.database_object);
			}
		]);
	}
)();
