// Commands:
//    gitmoji - Hubot presenterer en liste over alle gitmojiene man kan bruke i commit-meldinger

module.exports = function(hubot) {
    hubot.hear(/gitmoji/i, function(res) {
        hubot.http("https://raw.githubusercontent.com/carloscuesta/gitmoji/master/src/data/gitmojis.json")
             .header("Accept", "application/json")
             .get()(function(err, response, body) {
                 const data = JSON.parse(body).gitmojis;
                 const x = data.map(emoji => `${emoji.emoji} - ${emoji.code} - ${emoji.description}\n\n`).join("");
                 res.send(x);
             });
    });
}