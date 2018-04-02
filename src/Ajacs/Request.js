namespace('Ajacs', function (root)
{
	var classify	= root.Classy.classify;
	var is			= root.Plankton.is;
	var foreach		= root.Plankton.foreach;
	var HttpMethod	= root.Ajacs.HttpMethod;
	
	
	/**
	 * @class Request
	 * @alias Ajacs.Request
	 * @constructor
	 */
	var Request = function ()
	{
		classify(this);
		
		this._url			= null;
		this._requestType	= HttpMethod.GET;
		this._headers		= {};
		this._body			= {};
		this._dataType		= 'json';
		this._contentType 	= 'application/x-www-form-urlencoded';
	};
	
	
	Request.prototype.setUrl = function (url)
	{
		this._url = url;
		return this;
	};
	
	Request.prototype.getUrl = function ()
	{
		return this._url;
	};
	
	Request.prototype.hasUrl = function ()
	{
		return is(this._url);
	};
	
	Request.prototype.setHeader = function (key, value)
	{
		this._headers[key] = value;
		return this;
	};
	
	Request.prototype.setHeaders = function (headers)
	{
		foreach.pair(headers, this, function (key, val)
		{
			this.setHeader(key, val);
		});
		
		return this;
	};
	
	Request.prototype.hasHeaders = function ()
	{
		return is(this._headers);
	};
	
	Request.prototype.getHeaders = function ()
	{
		return this._headers;
	};
	
	Request.prototype.setBody = function (body)
	{
		this._body = body;
		return this;
	};
	
	Request.prototype.getBody = function ()
	{
		return this._body;
	};
	
	Request.prototype.hasBody = function ()
	{
		return is(this._body);
	};
	
	Request.prototype.setDataType = function (type)
	{
		this._dataType = type;
		return this;
	};
	
	Request.prototype.getDataType = function ()
	{
		return this._dataType;
	};
	
	Request.prototype.setContentType = function(type)
	{
		this._contentType = type;
		return this;
	};
	
	Request.prototype.getContentType = function ()
	{
		return this._contentType;
	};
	
	Request.prototype.setRequestType = function (type)
	{
		this._requestType = type;
		return this;
	};
	
	Request.prototype.getRequestType = function ()
	{
		return this._requestType;
	};
	
	
	this.Request = Request;
});