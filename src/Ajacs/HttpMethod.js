namespace('Ajacs', function (root)
{
	var Enum = root.Classy.Enum;
	
	
	var HttpMethod = {
		GET: 	'GET',
		POST: 	'POST'
	};
	
	this.HttpMethod = Enum(HttpMethod);
});