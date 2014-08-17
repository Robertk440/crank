//% Carousel
//% Fed by JSON

var Carousel=(function()
	{
		//% Settings
		//% Stored nodes from the DOM
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
		//%

		//% Storage
		//% Stored data that is changeable
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
		//%

		var initialise=function()
			{
				settings();
				request();
			};

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

		var reset=function()
			{

			};

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

		return{
				init:initialise
			};
	}
)();
