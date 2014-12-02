//# Test: /scripts/scripts.js
describe('Scripts',function()
	{
		it('add two parameters and return the result',function()
			{
				expect(example(1,2,'+')).toBe(3);
				expect(example(2,3,'+')).toBe(5);
			}
		);

		it('multiply two parameters and return the result',function()
			{
				expect(example(1,2,'*')).toBe(2);
				expect(example(2,3,'*')).toBe(6);
			}
		);

		it('defaults to the default case and returns added parameters when not operator is specified',function()
			{
				expect(example(1,2)).toBe(3);
				expect(example(2,3)).toBe(5);
			}
		);
	}
);
