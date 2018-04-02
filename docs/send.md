# oktopost-ajacs
## Send request

To send your request you need to get a new instance of Agent from AjacsModule. 
You can do it by calling `ajacsModule.getAgent(OysterComponent).send(myReqeust)`

Also you can send new request immediately by calling `ajacsModule.builder(OysterComponent).get(url, params)` or 
`ajacsModule.builder(OysterComponent).post(url, params)`, but without any additional headers.