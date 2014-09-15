//# ApplicationController
(function()
	{
		var controllers;

		//% Controllers instantiation
		controllers=angular.module('controllers',['controllers.user']);
		//%

		//% Application Controller
		// Global controller for the application
		controllers.controller('ApplicationController',function($firebase,$firebaseSimpleLogin,$http,$location,$localStorage,md5,$route,$rootScope,$scope)
			{
				$scope.database='';
				$scope.database.sync='';
				$scope.database.auth='';

				//% Set up database
				//% Connect and set values to rootscope for application wide access
				$scope.database=new Firebase('https://amber-fire-7539.firebaseio.com/');
				$scope.database.sync=$firebase($scope.database);
				$scope.database.auth=$firebaseSimpleLogin($scope.database);
				//%
			}
		);
	}
)();
