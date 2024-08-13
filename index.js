const { Client, GatewayIntentBits } = require('discord.js');
const { run, getRandomGreeting } = require("./services/gemini")
const dotenv = require('dotenv');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
dotenv.config()

client.on("messageCreate", (message)=> {
    if(message.author.bot) return;
    if(message.content.startsWith("GenAI")) {
        const prompt = message.content.split("GenAI ")[1]
        message.reply({
            content: "Generating answer..."
        })
        run(prompt).then((res)=>{
            message.reply({content:res})
        }).catch((err) => {
            message.reply({content:"Some error occured!"})
        })
        return;
    }
    message.reply({
        content: getRandomGreeting()
    })
})

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
  
    console.log(interaction)

    if (interaction.commandName === 'about') {
      await interaction.reply(getRandomGreeting());
    }
  });

client.login(process.env.DISCORD_BOT_TOKEN)