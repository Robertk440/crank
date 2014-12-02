//# Script
// Modular functions for building dynamic JavaScript
$(document).ready(function()
	{

	}
);

// Function:example
// Spec:/specs/example.js
// Example function documentation
// @param (type) parameter1
// @param (type) parameter2
var example=function(parameter1,parameter2,operator)
	{
		switch(operator)
			{
				case '+':
					var result=parameter1+parameter2;
					break;
				case '*':
					var result=parameter1*parameter2;
					break;
				default:
					var result=parameter1+parameter2;
			}

		return result
	}
