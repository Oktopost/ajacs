namespace('Ajacs', function (root)
{
	var Enum = root.Classy.Enum;
	
	
	var HttpMethod = {
		GET: 	'GET',
		POST: 	'POST',
		DELETE:	'DELETE',
		PUT:	'PUT'
	};
	
	this.HttpMethod = Enum(HttpMethod);
});