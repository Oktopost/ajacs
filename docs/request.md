# oktopost-ajacs
## Request

[Request object](https://github.com/Oktopost/ajacs/blob/master/src/Ajacs/Request.js) used to represent current 
request properties such as
* URL
* Request method (GET/POST)
* Array of HTTP headers
* Request body (form data, json object, etc)
* The type of data that you're expecting back from the server
* Content Type parameter

Each property is accessible with getters and can be changed with setters. 
By default each request object initialized with method GET, dataType 'json' and contentType 
'application/x-www-form-urlencoded'.


To create new Request object do `var myReqeust = new window.Ajacs.Reqeust()`