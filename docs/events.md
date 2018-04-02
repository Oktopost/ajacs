# oktopost-ajacs
## Events

Any amount of event listeners can be added to Agent events with methods
* `onBeforeSend`
* `onFail`
* `onDone`
* `onComplete`

For example to process data from response you can do something similar to:
`ajacsModule.builder(OysterComponent).get('/get-data', {foo:'bar'}).onDone(function(data){ })`