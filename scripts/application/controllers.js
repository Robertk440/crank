//# Controllers
(function()
	{
		var store=
			{
				applicationControllers:'',
				reference:'',
				request:'',
				sync:''
			}

		//% Controllers instantiation
		store.applicationControllers=angular.module('application.controllers',[]);
		//%

		//% Application Controller
		// Global controller for the application
		store.applicationControllers.controller('ApplicationController',['$firebase','$http','$location','md5','$route','$scope',function($firebase,$http,$location,md5,$route,$scope)
			{
				store.reference=new Firebase("https://amber-fire-7539.firebaseio.com/");
				store.sync=$firebase(store.reference);
				store.request=store.sync.$asObject();

				store.request.$loaded().then(function()
					{
						$scope.application_data=store.request;
					}
				);
			}
		]);
	}
)();
