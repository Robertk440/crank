//# UserController
(function()
	{
		var store=
			{
				controllers:
					{
						user:''
					}
			}

		//% Controllers instantiation
		store.controllers.user=angular.module('application.controllers.user',[]);
		//%

		//% User Controller
		store.controllers.user.controller('UserController',['$firebase','$http','$scope',function($firebase,$http,$scope)
			{

			}
		]);
	}
)();
