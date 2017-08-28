# le-challenge-s3

Use S3 for storing challenge key from ACME and serve it in canner hosting

## install
``` sh
$ npm install @canner/le-challenge-s3
```

## Using

My setup is using with [le-store-s3](https://github.com/llun/le-store-s3) to store all certificates inside S3 and use AWS API gateway to serve challenge.

After API Gateway is setup, run script below to register domain
```js
const S3 = {
  bucketName: 'letsencrypt'
}

const store = require('le-store-s3').create({ S3 })
const challenge = require('le-challenge-s3').create({ S3 })

const instance = LE.create({
  store,
  challenges: { 'http-01': challenge },
  challengeType: 'http-01',
  agreeToTerms (opts, callback) {
    callback(null, opts.tosUrl)
  }
})
instance.register({
  domains: ['awesome.domain'],
  email: 'green@rabbit.candy',
  agreeTos: true,
  rsaKeySize: 2048,
  challengeType: 'http-01'
})
```
or invoke lambda function with below event
```json
{
  "email": "green@rabbit.candy",
  "domain": "awesome.domain"
}
```

## License

ISC
