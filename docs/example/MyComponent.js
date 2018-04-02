namespace('MyApp.Example', function (window)
{
	var Component = window.Oyster.Component;
	
	
	var MyComponent = function () { Component.call(this); };
	inherit(MyComponent, Component);
	
	
	MyComponent.prototype._mount = function ()
	{
		this._myAjaxModule = this.manager('MyAjaxModule');
		this._data = null;
	};
	
	MyComponent.prototype._onFail = function()
	{
		console.error('getData() failed');
	};
	
	MyComponent.prototype._onDone = function(data)
	{
		this._data = data;
		console.info('got data');
	};
	
	
	MyComponent.prototype.getData = function (params)
	{
		this._myAjaxModule.builder(this).get('/', params).onFail(this._onFail).onDone(this._onDone);
	};
	
	this.MyComponent = MyComponent;
})