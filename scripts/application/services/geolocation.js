//# Geolocation
// Angular wrapper for the HTML5 geolocation API

application.service('$geolocation',function($q,$window)
	{
		return function()
			{
				var deferred=$q.defer();

				if(!$window.navigator)
					{
						deferred.reject(new Error('Geolocation is not supported'));
					}
				else
					{
						$window.navigator.geolocation.getCurrentPosition(function(position)
							{
								deferred.resolve(
									{
										lat:position.coords.latitude,
										lng:position.coords.longitude
									}
								);
					},deferred.reject);
			}

			return deferred.promise;
		};
	}
);
