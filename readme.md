# Slack Example

This repo demonstrates a simple `slack` bot that listens for `pingpong` and sends a response `pong! pong!`.

## install

1. Clone this repo and run `npm i`
2. Create a file in the root called `.env` with the following:

```
SLACK_TOKEN=xxxx-your-slack-token-here-xxxx
```

(You can score a token here: https://api.slack.com/web)

## run

1. Run `npm start` (or `node index`)
2. Send a message in your Slack `pingpong`
