// Carousel
// Fed by JSON

var Carousel=(function()
	{
		// Function:settings
		// Stored nodes from the DOM
		var settings=function()
			{
				return{
					controller:
						{
							advance:
								{
									dom:$('.carousel-interface-advance'),
									name:'carousel-interface-advance'
								},
							block:
								{
									dom:$('.carousel'),
									name:'carousel'
								},
							enclosure:
								{
									dom:$('.carousel-list-enclosure'),
									name:'carousel-list-enclosure'
								},
							header:
								{
									dom:$('.carousel-header'),
									name:'carousel-header'
								},
							list:
								{
									dom:$('.carousel-list'),
									name:'carousel-list'
								},
							main:
								{
									dom:$('.carousel-main'),
									name:'carousel-main'
								},
							retard:
								{
									dom:$('.carousel-interface-retard'),
									name:'carousel-interface-retard'
								}
						},
					injector:
						{
							block:
								{
									dom:$('.injector-carousel'),
									name:'injector-carousel'
								}
						},
					request:
						{
							url:$('.injector-carousel').data('carousel-request-url')
						}
				}
			};
		//

		// Variable:storage
		// Stored data that is changeable
		var storage=
			{
				response:
					{
						items:[],
						measure:0
					},
				state:
					{
						position:0
					}
			};
		//

		// Function:initialise
		var initialise=function()
			{
				settings();
				request();
			};
		//

		// Function:advance
		var advance=function()
			{
				if(storage.state.position<storage.response.measure&&storage.state.position>=0)
					{
						storage.state.position++;
						settings().controller.enclosure.dom.hide();
						settings().controller.enclosure.dom.eq(storage.state.position).show();
					}

				if(storage.state.position==storage.response.measure)
					{
						storage.state.position=0;
						settings().controller.enclosure.dom.hide();
						settings().controller.enclosure.dom.eq(storage.state.position).show();
					}
			};
		//

		// Function:interface
		var interface=function()
			{
				settings().controller.enclosure.dom.hide();
				settings().controller.enclosure.dom.first().show();

				storage.response.measure=storage.response.items.length;

				settings().controller.advance.dom.on('click keypress',function()
					{
						advance();
					}
				);

				settings().controller.retard.dom.on('click keypress',function()
					{
						retard();
					}
				);
			};
		//

		// Function:request
		var request=function()
			{
				$.getJSON(settings().request.url,function(request)
					{
						storage.response.items=request.items;

						settings().injector.block.dom
							.append('<section class="carousel"><ul class="carousel-list"></ul><nav class="carousel-interface"><span class="carousel-interface-advance" tabindex="0">Advance</span><span class="carousel-interface-retard" tabindex="0">Retard</span></nav></section>');

						$.each(storage.response.items,function(key,value)
							{
								settings().controller.list.dom
									.append('<li class="carousel-list-enclosure"><header class="carousel-header" tabindex="0"><span class="carousel-header__title">'+value.title+'</span></header><section class="carousel-main" tabindex="0"><img alt="'+value.title+'" class="carousel-main-media" src="'+value.media+'"><article class="carousel-main-content"><p>'+value.body+'</p></article></section>')
							}
						);
					}
				).done(function()
					{
						interface();
					}
				).fail(function()
					{
						alert('Unable to retrieve carousel data.');
					}
				);
			};
		//

		// Function:reset
		var reset=function()
			{

			};
		//

		// Function:retard
		var retard=function()
			{
				if(storage.state.position<storage.response.measure&&storage.state.position>0)
					{
						storage.state.position--;
						settings().controller.enclosure.dom.hide();
						settings().controller.enclosure.dom.eq(storage.state.position).show();
					}
				else if(storage.state.position==0)
					{
						storage.state.position=(storage.response.measure-1);
						settings().controller.enclosure.dom.hide();
						settings().controller.enclosure.dom.eq(storage.state.position).show();
					}

				if(storage.state.position==storage.response.measure)
					{
						storage.state.position--;
						settings().controller.enclosure.dom.hide();
						settings().controller.enclosure.dom.eq(storage.state.position).show();
					}
			};
		//

		// Return
		// Set up externally accessible functions. On the left is the accessor
		// externally, on the right the internal function
		return{
				init:initialise
			};
		//
	}
)();
