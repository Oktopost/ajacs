namespace('MyApp.Example', function (window)
{
	var AbstractDecorator	= window.Ajacs.Base.AbstractResponseDecorator;
	
	
	function AjaxErrorDecorator() { AbstractDecorator.call(this); }	
	inherit(AjaxErrorDecorator, AbstractDecorator);
	
	
	AjaxErrorDecorator.prototype._onFail = function (jqXHR, textStatus, errorThrown)
	{
		console.error(jqXHR)
	};
	
	
	this.AjaxErrorDecorator = AjaxErrorDecorator;
})