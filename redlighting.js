//THIS SHIT IS LIKE SO IMPORTANT

// HTTP Post example:

// token=PMblzlRP2XMQlqJNBgVEKEfc
// team_id=T0001
// team_domain=example
// channel_id=C2147483705
// channel_name=test
// user_id=U2147483697
// user_name=Steve
// command=/weather
// text=94070
// response_url=https://hooks.slack.com/commands/1234/5678

//lib/redlightining.js

'use strict';

var util = require('util');
var path = require('path');
var fs = require('fs')
var Bot = require('slackbots');

//constructor
var RedLighting = function Constructor(settings) {
    this.settings = settings;
    this.settings.name = this.settings.name || 'redlightningbot';

    this.user. = null;
};

util.inherits(RedLighting, Bot);

module.export = RedLighting;

//run function
RedLighting.prototype.run = function() {
    RedLighting.super_.call(this., this.settings);

    this.on('start', this._onStart);
    this.on('message', this._onMessage);
};


//on start function
RedLighting.prototype._onStart = function() {
    this._loadBotUser();
    this._firstRunCheck();
};

//on load function
RedLighting.prototype._onLoadBotUser = function () {
    var self = this;
    this.user = this.users.filters(function (user) {
        return user.name == self.name;

    })[0];
};

//first run check function
RedLighting.prototype._firstRunCheck = function () {
    var self = this;

    var currentTime = (new Date()).toJson();

    //this is a first run
    if(!record) {
        self._welcomeMessage();
        return "RED LIGHTING MUTHA FUCKA"
    }
};

//welcome message function
RedLighting.prototype._welcomeMessage = function(){
    this.postMessageToChannel(this.channels[0].name, "WADDUP FAM, It's ya boi. RED LIGHTNING!",
        {as_user: true});
};