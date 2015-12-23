var slack = require('slack')
var env = require('node-env-file')
var path = require('path')
var bot = slack.rtm.client()

// load environment variables
env(path.join(__dirname, '.env'))

// grab the auth token
var token = process.env.SLACK_TOKEN

// handler for messages
bot.message(msg=> {
  if (msg.text === 'pingpong') {
    var channel = msg.channel
    var text = 'pong! pong!'
    slack.chat.postMessage({token, channel, text}, console.log)
  }
})

// start listening
bot.listen({token})
