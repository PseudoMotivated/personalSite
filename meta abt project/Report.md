# Rapport om projektet
## Uppdrag
__Övergripande beskrivning av vad du gjort och varför du valt att göra just det.__

Jag har valt att göra en personlig sida, där jag kan lägga upp mitt cv samt publicera bloggar. Det hjälper (har jag hört) om man ska söka jobb i teknikvärlden. Jag valde att göra det för att jag skulle göra det oavsätt, så det blev två fåglar med en sten med denna uppgift.
 
## Mål och målgrupper
__Beskriv målen för webbplatsen. Vad ska webbplatsen åstadkomma?__

__Beskriv vilka webbplatsen vänder sig till och vilka behov de har.__

Vad webbplatsen ska åstadkomma är:
-	Höja sannolikheten att jag blir anställd. ( Jag är min egen klient ).
-	Se skön ut.
-	Det ska vara enkelt och snabbt att uppdatera den med nya bloggar.
-	Bloggarna ska vara i markdown och bli rendrade till webben.
( Bloggarna kommer vara rätt tekniska )

Målgrupp: 
-	Potentiella arbetsgivare
-	Teknik intresserade med fokus på linux och homelabbing 
-	De som vill läsa bloggarna (ovan)

## Innehåll och funktioner
__Vilka tekniker använde du (HTML, CSS, …) och hur använde du respektive teknik.__

Teknik jag använde:
- React + Tailwind css

Användes för att skapa modulära komponenter, och kunna styla sidan snabbt och snyggt. React är ett javascript framework och tailwind css är som fördefinierade css utility klasser, så man stylar inline i classname.
- Vite

Vite förbehandlar hemsidan innan den publiceras, det kompilerar och tar hand om importer. Det har hjälpt enormt med att kunna ha dynamiskt rendrad markdown.
- FramerMotion

Webbanimations library, använde det för att rotera en linjär gradient bakom BlogEntry och knapp komponenter för att uppnå en snygg effekt. Och snygg effekt vid hover.

- En plugin för att rendra markdown till webben (vite-plugin-markdown)

Uhhh, rendrar markdown till webben.

## Struktur och navigering
__Hur du grupperat informationen och hur användaren hittar.__
 
 ```mermaid
 flowchart
 
Home --> Blogs --> l[Individuella Bloggar]

Allt --> Privacy

 ```
## Grafisk form
__Hur webbplatsen fått ett gemensamt utseende så man känner igen sig (logo, färg, typsnitt…).__

Vad jag gjorde:
-	Format gemensamma färger med css variabler
-	Gemensam header, nav och footer med react komponenter.
- Återanvänt komponenter som urvals karusellen

## Utformning av webbplats
__Beskriv upplägget av arbetet med webbplatsen.__

Började med att designa ungefärligt upplägg med draw.io, filen för det är tillgänglig i samma mapp som rapporten.

__Vilka val togs under skapandet?__

Markdown skulle vara formatet för bloggarna för det är det man skriver teknisk documentation med i industrin, bloggarna skulle också rendras dynamiskt och på klientsida för att skalan kommer vara liten, och jag kommer förmodligen inte ha så mycket text totalt över alla bloggar eller så många bloggar att det blir segt för klienten att loopa igenom alla bloggar för att generera taggar eller thumbnails.

__Hur konstruerades de olika sidorna?__

Blogg sidan har en urvals karusell överst och sedan rendrar den en array med alla bloggar, den arrayen kan filtras med input via att toggla taggar eller att söka. Taggarna rendras med en array som är konstruerad via att loopa igenom alla bloggars metadata och appenda taggarna in i arrayen.

__Vilka förändringar fick du göra under utvecklingen?__
 
När jag skulle testa göra build för produktion dök inte bilderna upp. Inga. Man behöver importera de i koden för att de ska komma med i dist. Tog ett tag men jag löste det genom att importera alla assets med glob, och göra en funktion som kollar upp bildens originala path i arrayen och returna nya path inne i glob så den kan rendras.

## Tester
__Dokumentera vilka tester på olika webbläsare och olika enheter du gjort.__

Jag testade sidan på Firefox, Vivaldi och Edge. Jag använder ingen avancerad css, och när javascripten komplieras görs den sådan att den blir compatibel med äldre webbläsare. 

__Vad fungerade bra och mindre bra?__
 
Enda skillnaden är att på Chromium Webbläsare så blir gifen i faviconen statisk. Bara FF supportar gifs i favicon :(.

## Juridiska frågor
__Dokumentera juridiska frågor (t ex upphovsrätt) kring webbplatsen.__

Koden har jag lagt på MIT licens. Alla assets har jag antingen gjort själv, eller laddat ned public domain (ingen attribution, ingenting). 
 
## Problem och reflektioner
__Vilka problem stötte du på under arbetet?__

Ovan beskrivet att bilder inte rendrar. Och det knölade sig när jag skulle rendra markdown.

__Vad fungerar bra och mindre bra?__

Experience componenten. Linjerna i den bryts om entries i den expanderas på en tunn skärm. 

__Hur kan webbplatsen utvecklas vidare?__

Kan faktrorera om blogentry kompenten, så att den bara tar en blog som input. Implementera så att den löser ut länk och bild osv själv, flyttar in det från de andra kompenterna som använder den. 

Kanske lägga till databas med bloggar, så jag har en backend att leka med. 