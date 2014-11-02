//# Test: /scripts/plugins/accordion.js
describe('Accordion',function()
	{
		var header,
		block,
		main;

		beforeEach(function()
			{
				$('html').append('.accordion');
				$('.accordion')
					.append('.accordion-header')
					.append('.accordion-main');
			}
		);

		it('toggle between currently open and to be closed',function()
			{
				header=$('.accordion-header'),
				block=$('accordion'),
				main=$('.accordion-main');

				expect(Accordion.toggle(header,block,main)).toBe(true);
			}
		);
	}
);
