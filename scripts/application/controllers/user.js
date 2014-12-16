//# User
// Viewing, adding, modifying users - any action related to a user should be stored
// within this controller.

application.controller('UserController',function($http,$scope)
	{
		$scope.users={};
		$scope.users.list={};
		$scope.users.pages={};
		$scope.users.pages.total;
		$scope.users.pages.current=1;
		$scope.users.pages.returned;

		$scope.getUsers=function()
			{
				$http.get('http://reqr.es/api/users?page='+$scope.users.pages.current).success(function(data,status,headers,config)
					{
						$scope.users.list=data;
						$scope.users.pages.total=data.total_pages;
						$scope.users.pages.returned=data.page;
					}
				);
			}

		$scope.getUsers();
	}
);
