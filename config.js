const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.devs = "923135673658"
global.port =process.env.PORT
global.appUrl=process.env.APP_URL||""                       // put your app url here,
global.email="samsamsun789@gmail.com"
global.location="Lahore,Punjab,Pakistan"
global.mongodb= process.env.MONGODB_URI || ""
global.DATABASE_URI=process.env.DATABASE_URL
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.scan = "https://suhail-md-g1y0.onrender.com/";
global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/Itxxwasi/WASI-BOT";
global.gurl = process.env.GURL  || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website =process.env.GURL|| "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j" ; 
global.THUMB_IMAGE=process.env.THUMB_IMAGE|| "https://telegra.ph/file/50ffa78397cbdfef12a1f.jpg" ; // SET LOGO FOR IMAGE 




global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923436062975";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923436062975";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/
  style:process.env.STYLE|| "2",  // put '1' & "2" here to check bot styles


  HANDLERS:process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH  || "main",
  VERSION:process.env.VERSION || "v.1.2.7",
  caption:process.env.CAPTION || "© 𝙥𝙤𝙬𝙚𝙧𝙚𝙙 𝙗𝙮 𝙒𝘼𝙎𝙄-𝙏𝙀𝘾𝙃 * 』*『 *𝙎𝙐𝘽𝘾𝙍𝙄𝘽𝙀 𝙒𝘼𝙎𝙄𝙏𝙀𝘾𝙃 𝙊𝙉 𝙔𝙏』* \n youtube.com/@wasitech1"),
 

 
  author: process.env.PACK_AUTHER || "MALIK",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "𝙒𝘼𝙎𝙄-𝙏𝙀𝘾𝙃",
  ownername:process.env.OWNER_NAME|| "𝙄𝙏𝙓-MALIK",


  sessionName:process.env.SESSION_ID|| "SUHAIL_08_33_08_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjMzLFxuICAgICAgICA3MixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDY3LFxuICAgICAgICA0MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDkwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjA4LFxuICAgICAgICA3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDYxLFxuICAgICAgICAxOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDk0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDgwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMixcbiAgICAgICAgMTUxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTA1LFxuICAgICAgICA0NixcbiAgICAgICAgNjcsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTU0LFxuICAgICAgICAyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgODcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDcxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDYsXG4gICAgICAgIDk4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDU4LFxuICAgICAgICA5MSxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDUyLFxuICAgICAgICA4OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDg5LFxuICAgICAgICAxODYsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDk4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDY5LFxuICAgICAgICAxODYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjI0LFxuICAgICAgICA5MixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDQyLFxuICAgICAgICA0NixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODYsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDcxLFxuICAgICAgICA5MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTE5LFxuICAgICAgICAxODYsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDgsXG4gICAgICAgIDEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjE0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1MixcbiAgICAgICAgOTcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5NixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTAsXG4gICAgICAgIDksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTEzLFxuICAgICAgICA2NCxcbiAgICAgICAgODEsXG4gICAgICAgIDI3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTEyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTk0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODUsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjI0LFxuICAgICAgICA5NyxcbiAgICAgICAgODUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDM0LFxuICAgICAgICA1OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjksXG4gICAgICAgIDUzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRnBQV1RuWkg3VndWS1ZwSVJTOFVyKy9aTDFtNEh2RmUvQThzbko0aFVSRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjM0MzYwNjI5NzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjY4Q0ZFOEFCQzAzQkQ0NUFFQTBDQzg2Qzg4M0Y0ODcxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyNDc0NzYxMFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJDZkdPQXlEVVN0MjB1bEpPRXQzM3N3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjE1NmRjZmMzLThjZjAtNDZiYi04MGE4LWQ1NGRiNjBmMTIwN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDIsXG4gICAgICAyNDcsXG4gICAgICAxNzMsXG4gICAgICA3NCxcbiAgICAgIDcwLFxuICAgICAgMjA1LFxuICAgICAgMjI4LFxuICAgICAgMjE1LFxuICAgICAgMjksXG4gICAgICAzMixcbiAgICAgIDEwNSxcbiAgICAgIDIwNCxcbiAgICAgIDQyLFxuICAgICAgMjQ2LFxuICAgICAgMTgyLFxuICAgICAgMjU0LFxuICAgICAgMTU0LFxuICAgICAgMTMyLFxuICAgICAgMTY2LFxuICAgICAgMTQzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI5LFxuICAgICAgOTEsXG4gICAgICAyMDksXG4gICAgICA3MCxcbiAgICAgIDcwLFxuICAgICAgMTI0LFxuICAgICAgMTU5LFxuICAgICAgMzcsXG4gICAgICAzMCxcbiAgICAgIDEzNCxcbiAgICAgIDI0LFxuICAgICAgMTMyLFxuICAgICAgNTYsXG4gICAgICA2OCxcbiAgICAgIDE5NyxcbiAgICAgIDIwMSxcbiAgICAgIDIwNSxcbiAgICAgIDEzOSxcbiAgICAgIDE3NixcbiAgICAgIDExN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJNTkZRNjMzTFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDM2MDYyOTc1Ojc3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzgzMzE4NDA0NTg5NTA6NzdAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi8J2RjPCdkZzwnZGiLi5cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNMnl4YXNFRU5LZXRyWUdHQkVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlR2RXRqQjQvalhJWEJ5VFg1SlNZdCtjaEgwZFlGZC90RW5OZ3VZWXQxa2M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRkJtbXh4cERJbWN0TjVZS2xhUFlKcFR2a0RBZTBINXZrY0c1T0pXejZHOWdkY2F1Lyt1R09zbkIyV2NVWnRRcFlnUlF6V0ViSE5mWEFoQnNoR3VOQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWUNVbDMvU3gwYUx4Szl2ZDlydURESzdMRDZCNFlKbUJhM1RyV2lvSHVBRW9pWFc1SDRWT1ViZFJHRHRqNnhtSGZ1Nk1kdnVaSXFpRG4xdDZ6Y0pnQkE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDM2MDYyOTc1Ojc3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNDc0NzYwNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxhbVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTGFtLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQ3krNHViNW53QWtobkdsTHRMQzlETXdhUFkyd3ZkY3RyUVB5VVgrUTZjVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTY1MDU2MzMzLFwiY3VycmVudEluZGV4XCI6MTEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwzXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0=",  // PUT SESSION ID HERE 
  errorChat: process.env.ERROR_CHAT || "",
  warncount: process.env.WARN_COUNT || 3,
  userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  disablepm: process.env.DISABLE_PM || "false",
  MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  readcmds:process.env.READ_COMMANDS|| "false", 
  KOYEB_API: process.env.KOYEB_API  || "false",
readmessage:process.env.READ_MESSAGE|| "false",
 aitts_Voice_Id:process.env.AITTS_ID|| "37",
 alwaysonline:process.env.WAPRESENCE|| "available", // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'
 

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY|| "",
  read_status: process.env.AUTO_READ_STATUS || "false",
  save_status: process.env.AUTO_SAVE_STATUS || "false",


  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "wasi",

};

global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 
