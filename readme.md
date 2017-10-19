## Hubot Workshop

Join slack her: [Klikk her for å joine Fagutvalget-Hackathon på Slack](https://join.slack.com/t/fagutvalget-hackathon/shared_invite/enQtMjU5ODAxNzAyNTY3LTU5YmEyM2MzMDY0MWIyNWNkZTViMTU1YmU2YjkzMjBjMTY1OTEwMmJiMjk1NTViYmNkNjQ1NGM2NzA5OWU0YzY)

Verktøy: 

* Et terminalvindu (hvis du er på Windows anbefaler jeg å laste ned feks. [Git for Windows](https://git-for-windows.github.io/)), for Mac og Linux kan du bruke den innebygde terminalen, evt. ohmyzsh, iterm2, fish, osv...
* En editor (Sublime text, Atom, notepad++, visual code, vim, nano, osv...)

Hubot-dokumentasjon [finner du her](https://hubot.github.com/docs/)

Hvordan komme i gang? Her følger en liste over hvordan vi kommer i gang med Hubot. 

##### For å utvikle lokalt

1. Installer node.js: [Last ned her](https://nodejs.org/en/)
2. Åpne opp terminalen og sjekk at node og npm er installert

     ````
        $ node --version

        $ npm --version
     ````

Terminalen skal printe ut et versjonsnummer og dersom du ser det er alt ok

3. Installer hubot-generatoren via kommandoen under
    npm install -g yo generator-hubot

4. Opprett så en ny mappe, enten via filutforskeren (høyreklikk -> ny mappe) eller via terminalen og kommandoen under

    ````
    $ mkdir hubotmappe

    $ cd hubotmappe
    ````

5. Når du har navigert deg til hubotmappen i terminalen kan du skrive kommandoen under. Siden vi skal programmere mot Slack bruker vi --adapter=slack
    ````
    $ yo hubot --adapter=slack
    ````
    
6. Hubot-generatoren vil da starte og du får noen spørsmål som du svarer på, før dependencies blir lastet ned. Etter et par minutter har du fått en del nye filer i mappen. Åpne mappen i editoren og så er du klar for å programmere Huboten din.

7. Last ned scripts-mappen fra [Hubot-workshop git-repoet](https://github.com/sndrem/Hubot-workshop) og overskriv scripts-mappen som ble automatisk generert. Her ligger en del eksempler på ulike ting man kan gjøre med Hubot. 

Alle script som Hubot skal bruke skriver som javascript- eller coffeescript-filer i scripts-mappen. Man trenger ikke fortelle hubot hvor disse filene ligger, det vet han selv.

##### Deploye Hubot til en server (Heroku)
For at vi skal slippe å kjøre Hubot lokalt i terminalen kan vi deploye Hubot til en server et annet sted. Et, av flere enkle løsninger er å bruke Heroku sitt gratisalternativ. Heroku lar oss med enkle kommandoer i terminalen pushe hubot til servern, og enkelt oppdatere med ny funksjonalitet, på samme måte som man pusher til feks. Github.

[Hubot Heroku Keep-alive](https://github.com/hubot-scripts/hubot-heroku-keepalive)

[Heroku.com](https://heroku.com)