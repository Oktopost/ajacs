namespace('Ajacs', function (root)
{
	var Agent		= root.Ajacs.Agent;
	var Request		= root.Ajacs.Request;
	
	var classify	= root.Classy.classify;
	var is			= root.Plankton.is;
	var foreach		= root.Plankton.foreach;
	
	var HttpMethod	= root.Ajacs.HttpMethod;
	
	
	/**
	 * @class Module
	 * @alias Ajacs.Module
	 * @constructor
	 */
	var Module = function () { classify(this); this._init() };
	
	
	Module.prototype._init = function ()
	{
		this._decorators = [];
	};
	
	
	Module.prototype._decorate = function (ajaxAgent)
	{
		foreach(this._decorators, function (decorator)
		{
			if (is.function(decorator))
			{
				decorator(ajaxAgent);
			}
			else if (is.object(decorator) && is.function(decorator.decorate))
			{
				decorator.decorate(ajaxAgent);
			}
		});
	};
	
	
	/**
	 * @param {[]|*} decorator
	 * @return {Module}
	 */
	Module.prototype.addDecorator = function (decorator)
	{
		if (is.array(decorator))
		{
			foreach(decorator, this, function (item)
			{
				this.addDecorator(item);
			})
		}
		else
		{
			if (is.function(decorator) || (is.object(decorator) && is.function(decorator.decorate)))
			{
				this._decorators.push(decorator);
			}
			else
			{
				throw new Error('Unsupported decorator');
			}
		}
		
		return this;
	};
	
	Module.prototype.getAgent = function (action)
	{
		var result = new Agent(action);
		
		if (is(this._decorators))
			this._decorate(result);
		
		return result;
	};
	
	Module.prototype.builder = function (action)
	{
		var module = this;
		
		return {
			get: function (url, params)
			{
				return module.getAgent(action)
					.send(new Request().setUrl(url).setBody(params).setRequestType(HttpMethod.GET));
			},
			post: function (url, params)
			{
				return module.getAgent(action)
					.send(new Request().setUrl(url).setBody(params).setRequestType(HttpMethod.POST));
			},
			delete: function (url, params)
			{
				return module.getAgent(action)
					.send(new Request().setUrl(url).setBody(params).setRequestType(HttpMethod.DELETE));
			},
			put: function (url, params)
			{
				return module.getAgent(action)
					.send(new Request().setUrl(url).setBody(params).setRequestType(HttpMethod.PUT));
			},
			getAgent: function ()
			{
				return module.getAgent(action);
			}
		}
	};

	
	this.Module = Module;
});