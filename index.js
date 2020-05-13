const SlackBot = require('slackbots');
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const bot = new SlackBot({
	token: `${process.env.BOT_TOKEN}`,
	name: 'thecatbot',
});

bot.on('start', () => {
	const params = {
		icon_emoji: ':cat:',
	};

	bot.postMessageToChannel('random', 'Hey, are you okay?', params);
	bot.postMessageToChannel('chatbot', 'Hey, are you okay?', params);
});

bot.on('error', () => {
	console.log(err);
});
