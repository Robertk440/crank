//# ApplicationController
(function()
	{
		var controllers;

		//% Controllers instantiation
		controllers=angular.module('controllers',['controllers.user']);
		//%

		//% Application Controller
		// Global controller for the application
		controllers.controller('ApplicationController',['$firebase','$http','$location','$localStorage','md5','$route','$rootScope','$scope',function($firebase,$http,$location,$localStorage,md5,$route,$rootScope,$scope)
			{
				//% Set up database
				//% Connect and set values to rootscope for application wide access
				$rootScope.database_url=new Firebase("https://amber-fire-7539.firebaseio.com/");
				$rootScope.database_sync=$firebase($rootScope.database_url);
				$rootScope.database_object=$rootScope.database_sync.$asObject();
				//%

				$rootScope.database_object.$bindTo($scope,"database_data");

				$rootScope.storage_data=$localStorage;
			}
		]);
	}
)();
