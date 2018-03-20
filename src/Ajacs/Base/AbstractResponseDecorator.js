namespace('Ajacs.Base', function (root)
{
	var classify	= root.Classy.classify;
	
	
	/**
	 * @class AbstractResponseDecorator
	 * @alias Ajacs.Base.AbstractResponseDecorator
	 * @constructor
	 */
	var AbstractResponseDecorator = function () { classify(this); };
	
	
	AbstractResponseDecorator.prototype._onDone 		= function (data, textStatus, jqXHR) {};
	AbstractResponseDecorator.prototype._onFail 		= function (jqXHR, textStatus, errorThrown) {};
	AbstractResponseDecorator.prototype._onComplete		= function (dataOrJQXHR, textStatus, jqXHROrErrorThrown) {};
	AbstractResponseDecorator.prototype._onBeforeSend	= function (jqXHR, params, options) {};
	
	
	AbstractResponseDecorator.prototype.decorate = function (ajaxAgent)
	{
		ajaxAgent.onDone(this._onDone);
		ajaxAgent.onFail(this._onFail);
		ajaxAgent.onComplete(this._onComplete);
		ajaxAgent.onBeforeSend(this._onBeforeSend);
	};
	
	
	this.AbstractResponseDecorator = AbstractResponseDecorator;
});