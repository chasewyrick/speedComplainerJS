# SpeedComplainerJS
---
This project is inspired by [james-atkinson's SpeedComplainer](https://github.com/james-atkinson/speedcomplainer). 

Like James's program, it handles configuration in a json file which should look something like this:

```
{
    "expectSpeed": "1000", 
    "timeToTest": "5000", 
    "ISP": "yourShittyISP",
    "consumer_key": "",
    "consumer_secret": "",
    "access_token_key": "",
    "access_token_secret": ""
}
```
- expectSpeed is the speed you're paying for
- timeToTest is the time to test your download speed in ms. I found 5 seconds was good.
- ISP is your ISP's twitter account. 
- `consumer_key, consumer_key, access_token_key, access_token_secret` are you secret keys from your application. You can make a new app [here.](https://apps.twitter.com/app/new)


## How do i run this?
---
### Automatic Installation
Well, for anyone with a bash or shell based terminal, this nifty command will download everything for you. You will need to set your consumer_key and all that manually, though.
```
git clone git@github.com:olvrb/speedComplainerJS.git && cd speedComplainerJS && npm install 
```

### Manual Installation
I assume you know what to do with this if you're here.
```
$ git clone git@github.com:olvrb/speedComplainerJS.git
$ cd speedComplainerJS
$ npm install
```