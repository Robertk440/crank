//# Controllers
(function()
	{
		var store=
			{
				controllers:'',
				database:
					{
						url:'',
						request:'',
						sync:''
					}
			}

		//% Controllers instantiation
		store.controllers=angular.module('application.controllers',[]);
		//%

		//% Application Controller
		// Global controller for the application
		store.controllers.controller('ApplicationController',['$firebase','$http','$location','md5','$route','$scope',function($firebase,$http,$location,md5,$route,$scope)
			{
				store.database.url=new Firebase("https://amber-fire-7539.firebaseio.com/");
				store.database.sync=$firebase(store.database.url);
				store.database.request=store.database.sync.$asObject();

				store.database.request.$loaded().then(function()
					{
						$scope.application_data=store.database.request;
					}
				);
			}
		]);
	}
)();
