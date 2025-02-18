# Rapport om projektet
## Uppdrag

Jag har valt att göra en personlig sida, där jag kan lägga upp mitt cv samt publicera bloggar. Det hjälper (har jag hört) om man ska söka jobb i teknikvärlden. Jag valde att göra det för att jag skulle göra det oavsätt, så det blev två fåglar med en sten med denna uppgift.
 
## Mål och målgrupper

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
 
 Struktur på hemsidan

 ```mermaid
 flowchart
 
Home --> Blogs --> l[Individuella Bloggar]

k[alla sidor] --> Privacy


 ```
## Grafisk form

Hur jag gav hemsidan gemensamt utseende:
-	Format gemensamma färger med css variabler
-	Gemensam header, nav och footer med react komponenter.
- Återanvänt komponenter som urvals karusellen

## Utformning av webbplats
Upplägg av arbetet: 
Började med att designa ungefärligt upplägg med draw.io, filen för det är tillgänglig i samma mapp som rapporten.
Började programmera Home sidan, sedan Blog, bugfixade inför build.

Vissa val som gjordes inför skapandet var:
Att markdown skulle vara formatet för bloggarna för det är det man skriver teknisk documentation med i industrin, bloggarna skulle också rendras dynamiskt och på klientsida för att skalan kommer vara liten, och jag kommer förmodligen inte ha så mycket text totalt över alla bloggar eller så många bloggar att det blir segt för klienten att loopa igenom alla bloggar för att generera taggar eller thumbnails.

att inte lägga en header på privacy sidan, bara nav, kände att det passade bättre så.

Komprimerade bilderna extremt mycket, tycker prestandan är värd kvalitetsförlusten.

Konstruktionen av de olika sidorna:
Blogg sidan har en urvals karusell överst och sedan rendrar den en array med alla bloggar, den arrayen kan filtras med input via att toggla taggar eller att söka. Taggarna rendras med en array som är konstruerad via att loopa igenom alla bloggars metadata och appenda taggarna in i arrayen.

Home sidan har också en karusell med bloggar, den använder samma komponent Blogcarousel, den har också en komponent experience som lätt går att ändra och göra tillägg i då den tar argument från ett objekt.

Blogview är sidan som rendrar alla markdown filer, den tar md filen, använder en extension som rendrar den till en react komponent som formatteras med medföljande gfm.css (mit licens), modifierat så den passar med hemsidans stil. 

 
När jag skulle testa göra build för produktion dök inte bilderna upp. Inga. Man behöver importera de i koden för att de ska komma med i dist. Tog ett tag men jag löste det genom att importera alla assets med glob, och göra en utility funktion som kollar upp bildens originala path i arrayen och returna nya path inne i glob så den kan rendras.

## Tester

Jag testade sidan på Firefox, Vivaldi och Edge. Jag använder ingen avancerad (nya properties) css, och när javascripten kompileras görs den sådan att den blir compatibel med äldre webbläsare. 
 
Enda skillnaden är att på Chromium Webbläsare så blir gifen i faviconen statisk. Bara FF supportar gifs i favicon :(.

## Juridiska frågor

Koden har jag lagt på MIT licens. Alla assets har jag antingen gjort själv, eller laddat ned public domain (krävs ingen attribution, ingenting). Sidan är statisk och använder inte cookies eller liknande teknik.
 
## Problem och reflektioner

De största problemen var när bilderna inte rendrade som beskrivet ovan, och när jag skulle lösa hur man skulle rendra markdown. Löstes till slut och fick syssla lite med async och effekt hooks.

Jag började med en kurs för react utveckling, och detta var bra övning på det jag lärt mig och mer. Detta är första gången jag använt tailwind css, och efter nu känner jag mig rätt bekväm med det.

En grej som inte fungerar så bra är i Experience componenten, där Linjerna i timelinen bryts om entries i den expanderas på en tunn skärm för att de har en statisk längd och texten han ta större höjd än de.


Om jag skulle utveckla hemsidan vidare skulle jag nog börja med att faktrorera om blogentry kompenten, så att den bara tar en blog som input. Implementera så att den löser ut länk och bild osv själv, flyttar in det från de andra kompenterna som använder den. 

Kanske lägga till databas med bloggar, så jag har en backend att leka med. 

Använda before och after pseudo elementen i css istället för extra divs för styling, som i BlogEntry komponenten. Lärde mig om de rätt nyligen.

Lägga till portfolio sida i framtiden när jag har byggt något jag inte skäms för att visa för en potentiell arbetsgivare.

Skriva fler blogginlägg, byta ut AI skräpet jag lagt som placeholder.

Lägga till 2 st. pdf med mitt cv som laddas ned med knapparna på Home sidan.