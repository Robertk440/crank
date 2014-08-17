//% Application
var App=(function()
	{
		//% Storage
		//% Stored data that is changeable
		var storage=
			{
				app:'',
				api:
					{
						owm:
							{
								key:'79cf84dc572fc5fd2a4358542fb22dd4',
								url:'http://api.openweathermap.org/data/2.5/'
							}
					},
				local:
					{
						lat:'',
						lon:'',
						units:'metric'
					}
			};

		var controllers=function()
			{

			};

		var directives=function()
			{
				//% Forecast
				//% Get the forecast and present it!
				storage.app.directive('forecast',['$http',function($http)
					{
						return{
							controller:function($scope)
								{
									navigator.geolocation.getCurrentPosition(function(position)
										{
											storage.local.lat=position.coords.latitude;
											storage.local.lon=position.coords.longitude;

											$http.get(storage.api.owm.url+'weather?lat='+storage.local.lat+'&lon='+storage.local.lon+'&units='+storage.local.units+'&&APPID='+storage.api.owm.key).success(function(data)
												{
													$scope.forecast=data;
												}
											);
										}
									);
								},
							controllerAs:'forecast',
							restrict:'AE',
							templateUrl:'/components/forecast.html'
						};
					}
				]);
				//%

				//% Prediction
				//% Get the forecast and present it (for the next 7 days)
				storage.app.directive('prediction',['$http',function($http)
					{
						return{
							controller:function($scope)
								{
									navigator.geolocation.getCurrentPosition(function(position)
										{
											storage.local.lat=position.coords.latitude;
											storage.local.lon=position.coords.longitude;

											$http.get(storage.api.owm.url+'forecast/daily?lat='+storage.local.lat+'&lon='+storage.local.lon+'&units='+storage.local.units+'&cnt=7&APPID='+storage.api.owm.key).success(function(data)
												{
													$scope.days=data.list;
												}
											);
										}
									);
								},
							controllerAs:'prediction',
							restrict:'AE',
							templateUrl:'/components/prediction.html'
						};
					}
				]);
				//%

				//% Product

					//% Navigation
					storage.app.directive('productNavigation',['$http',function($http)
						{
							return{
								controller:function($scope)
									{
										$http.get('data/navigation/product.json').success(function(data)
											{
												$scope.pages=data;

												$scope.activate($scope.pages[0]);
											}
										);

										$scope.activate=function(page)
											{
												$scope.selected=page;
											}

										$scope.isActive=function(page)
											{
												return $scope.selected===page;
											}
									},
								controllerAs:'pages',
								retrict:'AE',
								templateUrl:'/components/product-navigation.html'
							};
						}
					]);
					//%

				//%
			};

		//% Initialise
		//% Entry point for starting function
		var initialise=function()
			{
				//% Initialise app
				storage.app=angular.module('app',['ngAnimate','ngRoute','ngSanitize']);
				//%

				//% Bootstrap
				angular.element(document).ready(function()
					{
						angular.bootstrap(document,['app']);
					}
				);
				//%

				controllers();
				directives();
				router();
			};

		var router=function()
			{
				storage.app.config(['$routeProvider',function($routeProvider)
					{
						$routeProvider.
							when('/today',
								{
									templateUrl:'/routes/forecast/index.html'
								}
							).
							when('/:pageId',
								{
									templateUrl:'/routes/prediction/index.html'
								}
							).
							otherwise(
								{
									redirectTo:'/today'
								}
							);
					}
				]);
			};

		return{
				init:initialise
			};
	}
)();
