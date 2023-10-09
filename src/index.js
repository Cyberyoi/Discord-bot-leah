require('dotenv').config()
const Discord = require("discord.js");
const {Client, Events, GatewayIntentBits, EmbedBuilder, SlashCommandBuilder, PermissionsBitField, Permissions} = require('discord.js')
const client = new Client ({intents: (GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent)}, )
const { RepeatMode } = require('discord-music-player');
const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
const command = args.shift();
let guildQueue = client.player.getQueue(message.guild.id);


client.on(Events.ClientReady, (x) => {
    console.log(`${x.user.tag} is ready`)
    client.user.setActivity(`Leah is munching`)

    const leahpus =  new SlashCommandBuilder()
    .setName ('leahpus')
    .setDescription('get Leah')

    const hello =  new SlashCommandBuilder()
    .setName ('hello')
    .setDescription('say hi')
    .addUserOption(option =>
        option
        .setName('user')
    .setDescription('The user says hi to')
    .setRequire(false)
        )

    const askleah = new SlashCommandBuilder()
    .setName ('ask Leah')
    .setDescription('ask her some things')
    .addUserOption(option =>
        option
    .setName('what are you coding in leah?')
    .setDescription('ask leah about her languages')
    .setRequire(false)
)
const add = new SlashCommandBuilder()
.setName(`add`)
.setDescription('this is math')
.addNumberOption (option =>
    option
    .setName ('first_number')
    .setDescription('first number')
    .setRequired(true)
    )
    .addNumberOption (option =>
        option
        .setName ('second_number')
        .setDescription('second number')
        .setRequired(true)
        )

    client.application.commands.create(leahpus)
    client.application.commands.create(hello)
    client.application.commands.create(askleah)
    client.application.commands.create(add)
})


client.on('interactionCreate', (interaction) => {
    if(!interaction.isChatInputCommand()) return
    if(interaction.commandName === 'leahpus') {
        interaction.reply('Meow :3')
        interaction.reply('@CyberYoi')
    }
    
    if(interaction.commandName === 'hello') {
        const userOption = interaction.options.getUser('user')
        if(userOption) {
interaction.reply(`Heyyyyy ${userOption.toString()}. ;)`)
        } else {
        interaction.reply('HAIIIIII :3')
        }
    }
    if(interaction.commandName==='add') {
        const firstNumber = interaction.options.getNumber('first_number')
        const secondNumber = interaction.options.getNumber('second_number')
        if(isNaN(firstNumber) || isNaN(secondNumber)) {
            interaction.reply('scuse me? i cant add nothing >:(')
        } 
        else {
            const result = firstNumber + secondNumber
            interaction.reply(`its ${result} ez maths B)`)
        }
    }
})

client.login(process.env.TOKEN)