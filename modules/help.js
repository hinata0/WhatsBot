const config = require('../config');

async function mainF(text) {

    const commands = `Hey new member `

    if (text == "!help") {
        return commands

    } else if (text.startsWith("!help ")) {
        var param = text.split(" ")[1]
        if (param == "pmpermit") {
            return `*Pmpermit*\n\nIf an user messaged you, an automated message sent to him. If still he messages you for 3 times he will be muted for ${config.pmpermit_mutetime / 60} Minutes.\n\n_You can allow him for pm by these commands_ 👇\n*!allow* - Allow an user for PM\n*!disallow* - Disallow an allowed user for PM`
        } else if (param == "term") {
            return `*Terminal*\n\nYou can execute any command with this. By default it will run from _public_ directory. If you are leeching something it will be available publicly at\n_http://[Your-App-Url]/public_\n\n*!term [command]*\nTo execute a command`
        } else if (param == "weather") {
            return `*Weather*\n\nLookup a city's weather with this command.\n\n*!weather [Place-Name]*\nTo check a weather`
        } else if (param == "yt") {
            return `*Youtube*\n\nDownload a Youtube video with this command.\n\n*!yt [Youtube-Link]*\nor,\nReply a message with *!yt* to Download`
        } else if (param == "carbon") {
            return `*Carbon*\n\nGenerate beautiful image with carbon.now.sh. Just send the text it will generate an image for you.\n\n*!carbon [Text]*\nor,\nReply a message with *!carbon* to Create`
        } else if (param == "jiosaavn") {
            return `*Jiosaavn*\n\nDownload a Jiosaavn song with this module. \n\n*!jiosaavn [Jiosaavn-Link]*\nor,\nReply a message with *!jiosaavn* to Download`
        } else if (param == "zee5") {
            return `*Zee5*\n\nStream all content of zee5 for free with this module. \n\n*!zee5 [Particular-Episode/Movie-Link]*\n to Stream`
        } else if (param == "qr") {
            return `*QR*\n\nGenerate QR code with this module. Just send the text it will generate QR Code image for you.\n\n*!qr [Text]*\nor,\nReply a message with *!qr* to Create`
        } else if (param == "directlink") {
            return `*Directlink*\n\nIt will generate photo's directlink for you.\n\nReply a photo with *!directlink* to Create`
        } else if (param == "tr") {
            return `*Translator*\n\nIt will translate text in different languages.\n\n*!tr [Text]*\nor,\nReply a message with *!tr*\n\nor,\n\n*!tr[Output-Language] [Text]*\nor,\nReply a message with \n*!tr[Output-Language]*\nto translate it`
        } else if (param == "ud") {
            return `*Urban Dictionary*\n\nUrban Dictionary is a crowdsourced online dictionary for slang words and phrases.\n\n*!ud [Word]*\nto search a word using Urban Dictionary`
        } else if (param == "sticker") {
            return `*Sticker*\n\nCreate sticker from Image.\n\nReply an image with *!sticker* to get a sticker of that image.`
        } else if (param == "git") {
            return `*Github*\n\nGet a github repository in zip format with it's details.\n\nSend a message with *!git [Github-Url]* to execute.`
        } else if (param == "cricket") {
            return `*Cricket*\n\nGet cricket updates in a schedule.\n\nSend a message with\n*!cricket [Cribuzz-Url] [Interval-Time]m [Stop-Time]m* to execute.\n\n*Example:* If you want to get updates in every 2 minutes for 15 minutes then the command will be:\n\n!cricket https://www.cricbuzz.com/xyz 2m 15m\n\nTo stop updates before your stop time execute !cricketstop\n\nYou can set only one cricket update in a single chat (Group / Brodcast / Private)`
        } else if (param == "spam") {
            return `*Spam*\n\nSpam Messages. \n\n*!spam [count | text]*\nOR\nreply *!spam [count]* to any message`
        } else if (param == "crypto") {
            return `*Crypto*\n\nGet current price of cryptocurrency. \n\n*!crypto [crypto-code]*\n`
        } else if (param == "watch") {
            return `*Watch*\n\nGet information about where to watch a Movie/Show. \n\n*!watch [movie-name]*\n`
        } else if (param == "shorten") {
            return `*Shorten*\n\nCreates short URL for any valid URL. \n\n*!shorten [valid-url]*\n`
        } else if (param == "ocr") {
            return `*OCR*\n\nReads text from any readable image. \n\n*Reply a photo with !ocr to read text from that image.*\n`
        } else if (param == "emailverifier") {
            return `*Email Verifier*\n\nTest an Email's validity before it bounce. \n\n*Reply an email with !emailverifier*\nor,\n*!emailverifier [Email Address]*\n\n⚡ Powered by infospace.club`
        } else {
            return commands
        }
    }
}


module.exports = {
    mainF
}
