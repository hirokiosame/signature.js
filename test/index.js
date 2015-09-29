import signature from '../src';


function test1() {

	return signature(
		[['function', 'cb']],
		[[Array, 'where']],
		[[Array, 'where'], ['function', 'cb']],
		[[Array, 'where'], [Array, 'replacements'], ['function', 'cb']]
	)(arguments);
}


var _object = {},
	_array = [],
	_function = function(){},
	_number = 20,
	_string = 'hello world',
	_boolean = true,
	__boolean = false;



console.log(test1(_function));
console.log(test1(_boolean));
console.log(test1(_object));
console.log(test1(_array));
console.log(test1(_array, _function, _number));
console.log(test1(_string));
