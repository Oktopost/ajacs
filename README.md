# oktopost-ajacs

Ajacs library for [Oyster](http://github.com/Oktopost/Oyster) components

[![Build Status](https://travis-ci.org/Oktopost/ajacs.svg?branch=master)](https://travis-ci.org/Oktopost/ajacs)
[![Coverage Status](https://coveralls.io/repos/github/Oktopost/ajacs/badge.svg?branch=master&1)](https://coveralls.io/github/Oktopost/ajacs?branch=master)

## Installation
```npm i --save oktopost-ajacs```

## Simple request
```
var ajacs = new window.Ajacs.Module();
ajacs.builder(OysterComponent).get(url, params);
```

More docs are [here](docs/README.md)