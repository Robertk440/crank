//# Test: /scripts/scripts.js
describe('Addition',function()
	{
		var num1=10,
			num2=20;

		it('Adds two numbers and returns the result',function()
			{
				expect(add(num1,num2)).toBe(30);
			}
		);
	}
);

describe('Subtraction',function()
	{
		var num1=2,
			num2=1;

		it('Subtracts one number from another and returns the result',function()
			{
				expect(subtract(num1,num2)).toBe(1);
			}
		);
	}
);
