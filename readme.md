## Hubot Workshop

Verktøy: 

* Et terminalvindu (hvis du er på Windows anbefaler jeg å laste ned feks. [Git for Windows](https://git-for-windows.github.io/)), for mac kan du bruke den innebygde, evt. ohmyzsh, iterm2, fish, osv... Det samme gjelder for Mac som for Linux
* En editor (Sublime text, Atom, notepad++, visual code, vim, nano, osv...)


Hvordan komme i gang? Her følger en liste over hvordan vi kommer i gang med Hubot. I bunnen av dette dokumentet har jeg prøvd å forklare hva de ulike kommandoene gjør.

1. Installer node.js [Last ned her](https://nodejs.org/en/)
2. Åpne opp terminalen og sjekk at node og npm er installert

    node --version

    npm --version

Terminalen skal printe ut et versjonsnummer og dersom du ser det er alt ok

3. Installer hubot-generatoren via kommandoen under
    npm install -g yo generator-hubot

4. Opprett så en ny mappe, enten via filutforskeren (høyreklikk -> ny mappe) eller via terminalen og kommandoen under

    mkdir hubotmappe

    cd hubotmappe

5. Når du har navigert deg til hubotmappe i terminalen kan du skrive kommandoen under. Siden vi skal programmere mot Slack bruker vi --adapter=slack
    yo hubot --adapter=slack

