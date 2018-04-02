# oktopost-ajacs
## Decorators

Request decorators are used to modify request before it sent and/or update your application state after.

Decorator can be added to the module at any time by calling `ajaxModule.decorate(new MyDecorator())`
Each decorator should have public method `decorate(ajaxAgent)`.
With ajaxAgent you can 
* update request with `ajaxAgent.onBeforeSend()`
* handle any error response with `ajaxAgent.onFail()`
* handle any success response with `ajaxAgent.onDone`
* handle any completed request with `ajaxAgent.onComplete`

To simplify your code your decorator can inherit [Ajacs.Base.AbstractRequestDecorator](https://github
.com/Oktopost/ajacs/blob/master/src/Ajacs/Base/AbstractRequestDecorator.js)
In that case instead of creating method `decorate` you can simply add methods that you're need.
I.e. `MyDecorator.prototype._onBeforeSend = function(jqXHR, params, options){}`