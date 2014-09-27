//# UserController
(function()
	{
		var user;

		//% Controllers instantiation
		user=angular.module('controllers.user',[]);
		//%

		//% User Controller
		user.controller('UserController',function($firebase,$firebaseSimpleLogin,$http,$scope)
			{
				$scope.user={};
				$scope.user.email={};

				//% Create User
				// Take an email and password and send to Firebase for storing
				$scope.createUser=function(email,password)
					{
						$scope.user.email=email;
						$scope.user.password=password;

						$scope.database.auth.$createUser($scope.user.email,$scope.user.password).then(function(user)
							{
								console.log('Create: ',user);
							}
						);
					};
				//%

				//% Login
				$scope.loginUser=function(email,password)
					{
						$scope.user.email=email;
						$scope.user.password=password;

						$scope.database.auth.$login('password',$scope.user).then(function(user)
							{
								console.log('Login: ',user);
							}
						);
					};
				//%
			}
		);
	}
)();
