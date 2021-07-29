const { Discord, MessageEmbed ,Client } = require('discord.js');
const client = new Client();
const { MessageButton } = require('discord-buttons')(client);
const moment = require('moment');
const ayar = require('./ayarlar.json');

client.on('ready', async => {
  client.user.setPresence({ activity: { name: ayar.bot.durum, type: ayar.bot.type }, status: `${ayar.bot.statuss}` });
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  let BotSesKanalı = client.channels.cache.get(ayar.bot.botSesKanal);
  if (BotSesKanalı) BotSesKanalı.join().catch(err => console.error("Bot Ses Kanalına Bağlanamadı!"));
})

client.on("message", (message) => {


if (message.content !== "!button" || message.author.id === ayar.bot.Owner || message.author.bot) return;
//Button İsim Renk ID

// Button1
let Button1 = new MessageButton()
  .setStyle(ayar.colors.color1) 
  .setEmoji(ayar.emojis.Emoji1)
  .setLabel(ayar.names.name1)
  .setID('Button1'); 

// Button2
let Button2 = new MessageButton()
  .setStyle(ayar.colors.color2)
  .setEmoji(ayar.emojis.Emoji2) 
  .setLabel(ayar.names.name2) 
  .setID('Button2');

// Button3
let Button3 = new MessageButton()
  .setStyle(ayar.colors.color3) 
  .setEmoji(ayar.emojis.Emoji3)
  .setLabel(ayar.names.name3) 
  .setID('Button3'); 

//Button Mesaj ve Ayar Kısmı
message.channel.send(`
${ayar.emojis.messageemoji} ${ayar.names.text}
**__ROLLER__**;
${ayar.emojis.emoji1} <@&${ayar.Roles.Button1}>
${ayar.emojis.emoji2} <@&${ayar.Roles.Button2}>
${ayar.emojis.emoji3} <@&${ayar.Roles.Button3}>
`, { 
  buttons: [ Button1, Button2, Button3]
});
});

client.on('clickButton', async (button) => {
  // Button1
    if (button.id === 'Button1') {
        if (button.clicker.member.roles.cache.get(ayar.Roles.Button1)) {
            await button.clicker.member.roles.remove(ayar.Roles.Button1)
            await button.think(true);
            await button.reply.edit(`**${ayar.names.name1}** Rolü Üzerinizden Alındı!`)
        } else {
            await button.clicker.member.roles.add(ayar.Roles.Button1)
            await button.think(true);
            await button.reply.edit(`**${ayar.names.name1}** Rolü Üzerinize Verildi!`)
        }
    }

  // Button2
    if (button.id === 'Button2') {
        if (button.clicker.member.roles.cache.get(ayar.Roles.Button2)) {
            await button.clicker.member.roles.remove(ayar.Roles.Button2)
            await button.think(true);
            await button.reply.edit(`**${ayar.names.name2}** Rolü Üzerinizden Alındı!`)
        } else {
            await button.clicker.member.roles.add(ayar.Roles.Button2)
            await button.think(true);
            await button.reply.edit(`**${ayar.names.name2}** Rolü Üzerinize Verildi!`)
        }

    }
  // Button3
    if (button.id === 'Button3') {
        if (button.clicker.member.roles.cache.get(ayar.Roles.Button3)) {
            await button.clicker.member.roles.remove(ayar.Roles.Button3)
            await button.think(true);
            await button.reply.edit(`**${ayar.names.name3}** Rolü Üzerinizden Alındı!`)
        } else {
            await button.clicker.member.roles.add(ayar.Roles.Button3)
            await button.think(true);
            await button.reply.edit(`**${ayar.names.name3}** Rolü Üzerinize Verildi!`)
        }
    }
});


client.login(ayar.bot.token).catch(() => console.log('Token eksik veya hatalı lütfen tokeni kontrol ediniz :c'))
