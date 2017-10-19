// Commands:
//    hello - Responderer med hello
//    hubot hvem er din mester - Responderer med "Du er min mester"


/*

Alle Hubot-script må exportere en funksjon som gjort under. hubot-variabelen er tilgjengelig som parameter
og blir brukt for å lytte på meldinger man skriver direkte til den, eller generelt i en Slack-kanal

Oppgaver:
        1. Skriv en hubot-kommando som lytter på samtaler og svarer generelt
        2. Skriv en hubot-kommando som responderer på en kommando hubot blir gitt, og svarer direkte til brukeren

*/

module.exports = function(hubot) {
    // Fortell Hubot at vi vil høre på alle meldinger  som blir skrevet
    // Vi bruker en veldig enkel regex her, og i-en sier at vi ikke bryr oss om store eller små bokstaver (case-insensitive)
    // .hear-metoden lytter på alle meldinger som blir skrevet
    hubot.hear(/hello/i, function(res) { // function(res) er en callback-funksjon som blir kalt når hubot hører ordet hello
        res.send("Hello my friend"); // send skriver tilbake til konsollen/Slack-kanalen uten å spesifisere en bruker
    });

    // Når man bruker .respond-metoden må man først skrive navnet til boten før kommandoen
    hubot.respond(/hvem er din mester/i, function(res) {
        res.reply("Du er min mester"); // Reply gjør at boten svarer med brukernavn: melding
    });
}