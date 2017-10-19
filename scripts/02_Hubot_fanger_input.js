// Commands:
//    hubot hva skal vi ha til ?? - Responderer med hva man skal ha til frokost, lunsj eller middag basert på spørsmålet

/*
    I dette eksempelet skal vi se på hvordan vi kan "fange" input fra brukeren, feks deler av en setning

    Oppgaver:
        1. Skriv en kommando som matcher deler av input. Eksempler kan være å få tak i enkel pluss, minus, deling og gange. 
        feks ved input = 1 + 3, få hubot til å svare med 4, eller 1 * 3 = 3. 

        Bruk gjerne regex101.com for å teste ut regex, eller bruk stackoverflow og google for det det er verdt.

*/

module.exports = function(robot) {
    robot.respond(/hva skal vi ha til ([^?]*)/i, function(res) {
        const mat = res.match[1]; // her henter vi ut det som matcher regexen vår. res.match[0] returnerer hele stringen.
        switch(mat) { // En enkel switch brukes for å sjekke hva man har spurt om
            case "frokost":
                res.reply("Vi skal ha egg og bacon til frokost");
                break;
            case "lunsj":
                res.reply("Vi skal ha skillingsbolle og en kopp kaffe til lunsj");
                break;
            case "middag":
                res.reply("Vi skal ha pasta og laks til middag");
                break;
            default:
                res.reply("Huh...? Jeg forstår deg ikke :( ");
                break;
        }
    });
}