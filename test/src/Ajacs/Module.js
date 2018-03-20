const root		= require('../../index');
const assert	= require('chai').assert;

const Module	= root.Ajacs.Module;
const Agent		= root.Ajacs.Agent;


suite('Module', () =>
{
	suite('agent', () =>
	{
		test('init', () =>
		{
			var module = new Module();
			assert.instanceOf(module.getAgent(), Agent);
		});
		
		test('fromBuilder', () =>
		{
			var module = new Module();
			assert.instanceOf(module.builder(null).getAgent(), Agent);
		});
	});
	
	suite('decorators', () =>
	{
		test('emptyOnInit', () =>
		{
			var module = new Module();
			assert.deepEqual([], module._decorators);
		});
		
		test('addSuccess', () =>
		{
			var module = new Module();
			module.addDecorator(function () {});
			
			assert.lengthOf(module._decorators, 1);
		});
		
		test('addFail', () =>
		{
			var module = new Module();
			assert.throws(function(){ module.addDecorator('foo') }, Error);
		});
	});
});