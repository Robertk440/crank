//% Accordion
//% Fed by JSON

var Accordion=(function()
	{
		//% Settings
		//% Stored nodes from the DOM
		var settings=function()
			{
				return{
					controller:
						{
							block:
								{
									dom:$('.accordion'),
									name:'accordion'
								},
							header:
								{
									dom:$('.accordion-header'),
									name:'accordion-header'
								},
							main:
								{
									dom:$('.accordion-main'),
									name:'accordion-main'
								},
						},
					injector:
						{
							block:
								{
									dom:$('.injector-accordion'),
									name:'injector'
								}
						},
					request:
						{
							url:$('.injector-accordion').data('accordion-request-url')
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
						items:[]
					}
			};
		//%

		var initialise=function()
			{
				settings();
				request();
			};

		var interface=function()
			{
				settings().controller.main.dom.hide();

				settings().controller.header.dom.on('click keypress',function()
					{
						toggle($(this),$(this).parents('.'+settings().controller.block.name),$(this).parents('.'+settings().controller.block.name).find('.'+settings().controller.main.name));
					}
				);

				$(document).on("mouseup keyup",function(e)
					{
						if(!settings().injector.block.dom.is(e.target)&& settings().injector.block.dom.has(e.target).length===0)
							{
								reset();
							};
					}
				);
			};

		var request=function()
			{
				$.getJSON(settings().request.url,function(request)
					{
						storage.response.items=request.items;

						$.each(storage.response.items,function(key,value)
							{
								settings().injector.block.dom
									.append('<section class="accordion"><header class="accordion-header" tabindex="0"><span class="accordion-header__title">'+value.title+'</span></header><article class="accordion-main" tabindex="0">'+value.body+'</article></section>');
							}
						);
					}
				).done(function()
					{
						interface();
					}
				).fail(function()
					{
						alert('Unable to retrieve accordion data.');
					}
				);
			};

		var reset=function()
			{
				settings().controller.block.dom.removeClass('active');
				settings().controller.main.dom.slideUp();
			};

		var toggle=function(header,block,main)
			{
				if(block.hasClass('active'))
					{
						settings().controller.block.dom.removeClass('active');
						main.slideUp();
					}
				else
					{
						settings().controller.main.dom.slideUp();
						main.slideDown();

						settings().controller.block.dom.removeClass('active');
						block.addClass('active');
					}
			};

		return{
				init:initialise
			};
	}
)();
