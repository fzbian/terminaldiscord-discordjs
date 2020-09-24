const Discord = require("discord.js");
const readline = require("readline");
const format = require("date-format");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})
let prefix = process.env.PREFIX;
require('dotenv').config();

const client = new Discord.Client();

client.on("ready", () => {
	console.log("[DISCORD TERMINAL " + client.user.tag + " (" + format("hh:mm", new Date()) + ")]");
});

client.on("message", message => {
		function commands(element) {
			if(element === "") {
				console.log("[CLYDE#1111 (" + format("hh:mm", new Date()) + "] You can't send empty messages!")
			}	
			if(element === prefix + "exit") {
				process.exit(0);
			}
		}
		function typeMessageL(toMessage) {
		rl.question(toMessage, function(nMessage) {
			commands(nMessage);
			client.users.cache.get(process.env.REMITENT_ID).send(nMessage)
 				typeMessage("[" + client.user.tag + " (" + format("hh:mm", new Date()) + ")]: ");
		 })
		}
		function typeMessage(toMessage) {
		rl.question(toMessage, function(nMessage) {
			commands(nMessage);
			client.users.cache.get(process.env.REMITENT_ID).send(nMessage)
				typeMessageL("[" + client.user.tag + "(" + format("hh:mm", new Date()) + ")]: ");
		 })
		}
	if(message.author.bot) return;
	if(message.channel.type === "dm") {
		console.log("\n[" + message.author.tag + " (" + format("hh:mm", new Date()) + ")]: " + message.content)	
	}
	typeMessage("[" + client.user.tag + "(" + format("hh:mm", new Date()) + ")]: ");
});

client.login(process.env.TOKEN);		
