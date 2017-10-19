module.exports = function(hubot) {
    hubot.hear(/hello/i, function(res) {
        res.send("Hello my friend");
    })
}