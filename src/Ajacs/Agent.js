namespace('Ajacs', function (root)
{
	var Event		= root.Duct.Event;
	var classify	= root.Classy.classify;
	var is			= root.Plankton.is;
	var func		= root.Plankton.func;
	
	
	/**
	 * @class Agent
	 * @alias Ajacs.Agent
	 * @param {LifeTime} LT
	 * @constructor
	 */
	var Agent = function(LT)
	{
		classify(this);
		
		this._onDone 		= new Event('AjacsAgent.onDone');
		this._onFail 		= new Event('AjacsAgent.onFail');
		this._onComplete 	= new Event('AjacsAgent.onComplete');
		this._onBeforeSend 	= new Event('AjacsAgent.onBeforeSend');
		this._onProgress	= new Event('AjaxsAgent.onProgress')
		
		this._headers 	= {};
		this._LT		= LT || null;
	};
	
	
	Agent.prototype._subscribeToEvent = function (event, item, callback)
	{
		if (is.function(item) && is(this._LT))
		{
			callback 	= item;
			item 		= this._LT;
		}
		
		event.add(item, callback);
	};
	
	Agent.prototype._triggerBeforeSend = function(xhr, params)
	{
		var options = { cancel: false };
		this._onBeforeSend.trigger(xhr, params, options);
		
		return !options.cancel;
	};
	
	/**
	 * @param {Ajacs.Request} request
	 * @return {{type: *, url: *, dataType: *, data: *, headers: *, beforeSend: (function(*=, *=): boolean)|*}}
	 * @private
	 */
	Agent.prototype._prepareRequestOptions = function (request)
	{
		var progress = this._onProgress;
		var result = {
			type: 		request.getRequestType(),
			url: 		request.getUrl(),
			dataType:	request.getDataType(),
			data:		request.getBody(),
			headers:	request.getHeaders(),
			xhr:		function ()
						 {
							 var result = '';
							 var xhr = new window.XMLHttpRequest();
							 xhr.addEventListener("progress", function (e)
							 {
								 var newData = e.currentTarget.response.substring(result.length);
								 result = e.currentTarget.response;
								 progress.trigger(newData, e.currentTarget.headers);
							 }, false);
					   
							 return xhr;
						 },
			beforeSend:	this._triggerBeforeSend
		};
		
		if (request.hasBody() && request.isPostRequest())
			result.contentType = request.getContentType();
		
		return result;
	};
	
	Agent.prototype._sendRequest = function (requestOptions)
	{
		var xhr = $.ajax(requestOptions);
		
		xhr.done(this._onDone.trigger);
		xhr.fail(this._onFail.trigger);
		xhr.always(this._onComplete.trigger);
	};
	
	Agent.prototype._sendRequestAsync = function (requestOptions)
	{
		var async = func.async(this._sendRequest);
		async(requestOptions);
	};
	
	
	Agent.prototype.cancel = function ()
	{
		this._onDone.destroy();
		this._onFail.destroy();
		this._onComplete.destroy();
		this._onBeforeSend.destroy();
	};
	
	Agent.prototype.onDone = function (item, callback)
	{
		this._subscribeToEvent(this._onDone, item, callback);
		return this;
	};
	
	Agent.prototype.onFail = function (item, callback)
	{
		this._subscribeToEvent(this._onFail, item, callback);
		return this;
	};
	
	Agent.prototype.onComplete = function (item, callback)
	{
		this._subscribeToEvent(this._onComplete, item, callback);
		return this;
	};
	
	Agent.prototype.onBeforeSend = function (item, callback)
	{
		this._subscribeToEvent(this._onBeforeSend, item, callback);
		return this;
	};
	
	Agent.prototype.onProgress = function (item, callback)
	{
		this._subscribeToEvent(this._onProgress, item, callback)
		return this;
	}
	
	/**
	 * @param {Ajacs.Request} request
	 * @return {Agent}
	 */
	Agent.prototype.send = function (request)
	{
		this._sendRequestAsync(this._prepareRequestOptions(request));
		return this;
	};
	
	
	this.Agent = Agent;
});