'use strict'

var RedLightning = require('../lib/redlightning');

var token = process.env.BOT_API_KEY;
var name = process.env.BOT_NAME;

var redlightning = new RedLightning({
    token: token,
    name: name
});

redlightning.run();