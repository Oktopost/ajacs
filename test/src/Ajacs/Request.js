const root		= require('../../index');
const assert	= require('chai').assert;

const Request	= root.Ajacs.Request;


suite('Request', () =>
{
	suite('sanity', () =>
	{
		test('initWithoutUrl', () =>
		{
			var request = new Request();
			assert.isFalse(request.hasUrl());
			assert.isNull(request.getUrl());
		});
		
		test('initWithoutHeaders', () =>
		{
			var request = new Request();
			assert.isFalse(request.hasHeaders());
			assert.isEmpty(request.getHeaders());
		});
		
		test('initWithoutBody', () =>
		{
			var request = new Request();
			assert.isFalse(request.hasBody());
			assert.isEmpty(request.getBody());
		});
	});
	
	suite('gettersAndSetters', () =>
	{
		test('url', () =>
		{
			var request = new Request();
			request.setUrl('foo');
			assert.strictEqual('foo', request.getUrl());
		});
		
		test('header', () =>
		{
			var request = new Request();
			request.setHeader('foo', 'bar');
			assert.deepEqual({foo:'bar'}, request.getHeaders());
		});
		
		test('headers', () =>
		{
			var request = new Request();
			var headers = {foo: 'bar', baz: 'bar'};
			request.setHeaders(headers);
			assert.deepEqual(headers, request.getHeaders());
		});
		
		suite('body', () =>
		{
			test('object', () =>
			{
				var request = new Request();
				var body = {foo: 'bar'};
				request.setBody(body);
				assert.deepEqual(body, request.getBody())
			});
			
			test('array', () =>
			{
				var request = new Request();
				var body = ['foo', 'bar'];
				request.setBody(body);
				assert.deepEqual(body, request.getBody());
			});
			
			test('text', () =>
			{
				var request = new Request();
				var body = 'foobar';
				request.setBody(body);
				assert.equal(body, request.getBody());
			});
		});
		
		test('dataType', () =>
		{
			var request = new Request();
			request.setDataType('text');
			assert.equal('text', request.getDataType());
		});
	
		test('contentType', () =>
		{
			var request = new Request();
			request.setContentType('text/plain');
			assert.equal('text/plain', request.getContentType());
		});
	});
});