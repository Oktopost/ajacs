namespace('MyApp.Example', function (window)
{
	var Ajacs = window.Ajacs.Module;
	var Module = window.Oyster.Module;
	var inherit = window.Classy.inherit;
	
	var AjaxErrorDecorator = window.MyApp.Example.AjaxErrorDecorator;
	
	
	var MyAjaxModule = function () { Module.call(this); };
	inherit(MyAjaxModule, Module);
	MyAjaxModule.prototype.moduleName = function () { return 'MyAjaxModule' };
	
	
	MyAjaxModule.prototype.onLoad = function ()
	{
		this._ajacs = new Ajacs();
		this._ajacs.addDecorator(new AjaxErrorDecorator());
		
		this._nonDecoratedAjacs = new Ajacs();
	};
	
	MyAjaxModule.prototype.builder = function (action)
	{
		return this._ajacs.builder(action);
	};
	
	MyAjaxModule.prototype.silent = function (action)
	{
		return this._nonDecoratedAjacs.builder(action);
	};
})