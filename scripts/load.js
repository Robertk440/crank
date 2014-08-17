//% Load
//% Using RequireJS to load additional script files

require.config(
	{
		baseUrl:'/scripts',
		paths:
			{
				'accordion':'plugins/accordion',
				'angular':'/dependencies/angular/angular.min',
				'angular_animate':'/dependencies/angular-animate/angular-animate.min',
				'angular_route':'/dependencies/angular-route/angular-route.min',
				'angular_sanitize':'/dependencies/angular-sanitize/angular-sanitize.min',
				'app':'application',
				'carousel':'plugins/carousel',
				'jquery':'/dependencies/jquery/dist/jquery',
				'modernizr':'/dependencies/modernizr/modernizr',
				'scripts':'scripts',
				'skycons':'/dependencies/skycons/skycons'
			},
		shim:
			{
				'accordion':
					{
						deps:['jquery']
					},

				'angular':
					{
						deps:['jquery'],
						exports:'angular'
					},

				'angular_animate':
					{
						deps:['angular','jquery']
					},

				'angular_route':
					{
						deps:['angular','jquery']
					},

				'angular_sanitize':
					{
						deps:['angular','jquery']
					},

				'app':
					{
						deps:['angular','jquery']
					},

				'carousel':
					{
						deps:['jquery']
					},

				'jquery':
					{
						deps:[''],
						exports:'$'
					},

				'modernizr':
					{
						deps:['jquery']
					},

				'scripts':
					{
						deps:['skycons','jquery']
					},

				'skycons':
					{
						deps:['jquery']
					}
			}
	}
);

define(function(require)
	{
		var $=require('jquery'),
			accordion=require('accordion'),
			angular=require('angular'),
			angular_animate=require('angular_animate'),
			angular_route=require('angular_route'),
			angular_sanitize=require('angular_sanitize'),
			app=require('app'),
			carousel=require('carousel'),
			jquery=require('jquery'),
			modernizr=require('modernizr'),
			scripts=require('scripts'),
			skycons=require('skycons');

		//% Initialise
		$(document).ready(function()
			{
				// Accordion.init();
				App.init();
				// Carousel.init();
			}
		);
		//%
	}
);
