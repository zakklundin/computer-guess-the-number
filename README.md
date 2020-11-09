# Computer Guess the Number

Vi ska nu vända på steken och göra det motsatta. Vi (människan) ska tänka på ett hemligt nummer och **datorn ska försöka gissa vilket det är!**

1. Användaren tänker på ett nummer och säger till när den är redo.
2. Datorn gissar på ett nummer.
3. Användaren ger feedback genom att klicka på en av tre knappar ("Too high!", "Too low!", "Correct!")
4. Gå till punkt 4

<!-- Demo-länk här. -->

## Innan du börjar
1. Starta den lokala servern genom att klicka på **Go Live** och titta på sidan i sitt nuvaranda skick. Öppna *Developer Tools* i Chrome.
2. Kolla igenom källkoden till `index.html`. Vilka element finns i bodyn och hur hänger de ihop med vad du ser på skärmen?
3. Kolla igenom `index.js`.

Diskutera igenom **uppgiften och den befintliga koden** tillsammans med din grupp. Repetera för varandra vad uppgiften går ut på och vad som är stegen framåt.

**Det är gruppens ansvar att alla förstår vad uppgiften går ut på innan ni sätter igång**. Därefter kan man arbeta enskilt och ta hjälp av varandra vid behov.

## Steg 1 Färdigställ användargränssnittet

Användargränssnittet är inte helt klart.
1. Lägg till en till knapp med texten *"Correct!"* mellan de andra två knapparna. Ge den id:t `is-correct-btn`
2. Skapa en funktion `setMessage(msg)` som sätter meddelandet på sidan (elementet som har `id="message`)
3. När användaren säger att gissningen var rätt, sätt meddelandet till `"Woho! :)"`. **Testa att knappen fungerar.**
4. Avkommentera den sista raden i funktionen `start`. Det är ett exempel på **string interpolation**.

Innan du går vidare:
* Vad heter *användargränssnitt* på engelska?
* Vad står förkortningen *GUI* för?
* Hur många argument tar funktionen `addEventListener`?
* Öppna upp konsolen och utforska string interpolation.

## Steg 2 Implementera linjär sökning
En väldig enkel metod är att göra så kallad "linjär sökning". Man söker alltså från början till slut, ett tal i taget `0, 1, 2, 3, 4, 5, ...` eller från slutet `100, 99, 98, 97, ...`.

När användaren klickar *"Too low!"*, öka gissningen med 1.
<details>
<summary>Ledtråd</summary>

````javascript
    guess++ // betyder guess = guess + 1
````
</details>

När användaren klickar *"Too high!"*, minska gissningen med 1.

Uppdatera meddelandet till användaren med den nya gissningen.
<details>
<summary>Ledtråd</summary>

Anropa `setMessage` på samma sätt som det görs i funktionen `start`. Lägg anropet sist i funktionerna som hanterar knapptrycken.
</details>

**Testa att det fungerar när startgissningen är 100.**

**Testa att det fungerar när startgissningen är 50**

Innan du går vidare:
* Hur många gissningar behöver datorn i genomsnitt? (om talet ligger mellan 0 och 100 och datorn alltid börjar från 0)
* Hur många gissningar behöver datorn i värsta fall?

## Steg 3 Implementera random sökning
En annan strategi är att helt enkelt chansa sig fram. Gör så att datorn varje gång gör en random gissning på ett heltal mellan 0 och 100.

Implementera denna strategi.

Innan du går vidare:
* Behöver datorn fler eller färre gissningar i genomsnitt med denna strategi?
* Hur många gissningar behöver datorn i värsta fall?

## Steg 4 Implementera binär sökning
Vad är den bästa strategin?

Jo, det är att alltid chansa på mittenvärdet. Man behöver uppdatera minsta och högsta möjliga värdet.

`50 // För lågt!`

Aha! Då vet jag att det är mellan 50 och 100. Jag gissar mittemellan.

`75 // För högt!`

Aha! Då vet jag att det är mellan 50 och 75. Jag gissar mittemellan.

`62 // För lågt!`

Aha! Då vet jag att det är mellan 62 och 75. Jag gissar mittemellan.

`68 // Rätt!`

Implementera denna strategi.

<details>
<summary>Ledtråd 1</summary>
Du behöver skapa nya globala variabler för att minnas det högsta och minsta möjliga värdet.
````javascript
    let guess = 50
    let minGuess = MIN_NUMBER
    let maxGuess = MAX_NUMBER
````
</details>
<details>
<summary>Ledtråd 2</summary>
Vad är värdet mitt emellan `minGuess` och `maxGuess`?
````javascript
    (minGuess + maxGuess) / 2
````
</details>

# Grattis!
Innan du går vidare:
* Vad är en anonym funktion? Hitta en eller flera anonyma funktioner i `index.js`. Varför heter det "anonym" funktion?
* Vad är ett argument för något? Hitta argument på tre olika ställen i koden.
* Vad är en parameter för något? Hitta parametrar på tre olika ställen i koden.
* Vad är en global variabel för något? Hitta en global variabel i koden.

## Fördjupning. Godtyckligt intervall och bättre slutmeddelande

1. Lägg till ett bättre slutmeddelande som visar vad den rätta gissningen var. Använd string interpolation.
2. Gör så att det är ett godtyckligt intervall istället för bara mellan 0 och 100

Innan du går vidare:
* Om det hemliga talet är mellan 0 och 16, hur många gissningar behövs i snitt vid binär sökning?
* Om det hemliga talet är mellan 0 och 1024, hur många gissningar behövs i snitt vid binär sökning? Ledtråd:

## Fördjupning. Räkna och redovisa hur många gissningar som krävdes.
Självförklarande.

## Fördjupning (avancerat): User Bot!
Skapa en bot, så att datorn kan spela mot sig själv!

Använd `setInterval` så att bot:en bara gissar en gång i sekunden (annars går det för snabbt för ögat)

Lägg till en knapp på första sidan, så att man kan välja om man ska svara själv som användare eller om man ska starta boten.

<!-- Demo-länk här. -->
