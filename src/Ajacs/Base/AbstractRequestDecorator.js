namespace('Ajacs.Base', function (root)
{
	var classify	= root.Classy.classify;
	
	
	/**
	 * @class AbstractRequestDecorator
	 * @alias Ajacs.Base.AbstractRequestDecorator
	 * @constructor
	 */
	var AbstractRequestDecorator = function () { classify(this); };
	
	
	AbstractRequestDecorator.prototype._onDone 			= function (data, textStatus, jqXHR) {};
	AbstractRequestDecorator.prototype._onFail 			= function (jqXHR, textStatus, errorThrown) {};
	AbstractRequestDecorator.prototype._onComplete		= function (dataOrJQXHR, textStatus, jqXHROrErrorThrown) {};
	AbstractRequestDecorator.prototype._onBeforeSend	= function (jqXHR, params, options) {};
	
	
	AbstractRequestDecorator.prototype.decorate = function (ajaxAgent)
	{
		ajaxAgent.onDone(this._onDone);
		ajaxAgent.onFail(this._onFail);
		ajaxAgent.onComplete(this._onComplete);
		ajaxAgent.onBeforeSend(this._onBeforeSend);
	};
	
	
	this.AbstractRequestDecorator = AbstractRequestDecorator;
});