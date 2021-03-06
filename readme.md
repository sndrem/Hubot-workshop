## Hubot Workshop
Her følger en introduksjon til Hubot og hvordan man kommer i gang med utvikling av Hubot. Jeg har prøvd å lage en enkel guide, men ønsker du enda mer informasjon kan jeg anbefale den litt mer [dyptgående guiden til Bekk som du finner her](https://github.com/bekk/chatops-workshop).

Denne guiden tar først og fremst for seg utvikling lokalt, men mot slutten av guiden og workshopen skal vi gå gjennom hvordan man kan deploye boten til Heroku og dermed ha kontakt med den via Slack, selv når din egen maskin er avslått.

**Join slack her**: [Klikk her for å joine Fagutvalget-Hackathon på Slack](https://join.slack.com/t/fagutvalget-hackathon/shared_invite/enQtMjU5ODAxNzAyNTY3LTU5YmEyM2MzMDY0MWIyNWNkZTViMTU1YmU2YjkzMjBjMTY1OTEwMmJiMjk1NTViYmNkNjQ1NGM2NzA5OWU0YzY)

Verktøy: 

* Et terminalvindu (hvis du er på Windows anbefaler jeg å laste ned feks. [Git for Windows](https://git-for-windows.github.io/)), for Mac og Linux kan du bruke den innebygde terminalen, evt. ohmyzsh, iterm2, fish, osv...
..* [Iterm2](https://www.iterm2.com/)
..*
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
    ````
    npm install -g yo generator-hubot
    ````

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

7. (Dersom du har klonet repoet direkte fra Github kan du hoppe over dette steget). Last ned scripts-mappen fra [Hubot-workshop git-repoet](https://github.com/sndrem/Hubot-workshop) og overskriv scripts-mappen som ble automatisk generert. Her ligger en del eksempler på ulike ting man kan gjøre med Hubot. 

Alle script som Hubot skal bruke skrives som javascript- eller coffeescript-filer i scripts-mappen. Man trenger ikke fortelle hubot hvor disse filene ligger, det vet han selv.

Før du går videre, ta gjerne og se gjennom [oppgavene som ligger her](https://github.com/sndrem/Hubot-workshop/blob/master/oppgaver.md)

##### Deploye Hubot til en server (Heroku)
For at vi skal slippe å kjøre Hubot lokalt i terminalen kan vi deploye Hubot til en server et annet sted. Et, av flere enkle løsninger er å bruke Heroku sitt gratisalternativ. Heroku lar oss med enkle kommandoer i terminalen pushe hubot til servern, og enkelt oppdatere med ny funksjonalitet, på samme måte som man pusher til feks. Github.

[Hubot Heroku Keep-alive](https://github.com/hubot-scripts/hubot-heroku-keepalive)

[Heroku.com](https://heroku.com)
