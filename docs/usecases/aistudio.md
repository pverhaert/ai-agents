# Google AI Studio

If Gemini is the "iPhone" (simple, polished), AI Studio is the "Workshop." It is a playground designed for developers
and power users who want to access the raw brain of Google's models without the "personality" or restrictions of the
standard chat app.

## The Power User's Sandbox

<div class="model-card">

<img src="https://www.gstatic.com/aistudio/ai_studio_favicon_2_32x32.png" alt="AI Studio" class="model-icon" />

**Developer**: Google DeepMind

**Description**: Google AI Studio is a web-based prototyping environment. It gives you free access to Google's most
powerful models (like Gemini 1.5 Pro) with a massive context window. It allows you to give "System Instructions" to
control exactly how the AI behaves, making it perfect for processing huge amounts of data or testing complex prompts.

**Key Features**:

- **Massive Context Window**: Process up to **2 million tokens** at once (equivalent to hours of video or thousands of
  pages of text).
- **System Instructions**: Define a permanent role for the AI (e.g., "You are a strict code reviewer" or "You are a
  Spanish translator").
- **Multimodal Inputs**: Drag and drop entire video files or large PDFs for analysis.
- **Free Access**: Generous free tier for testing and personal use.

**Best For**: Processing very large documents, analyzing video files, testing prompts, and users who want "raw" AI
output.

🔗 [Visit AI Studio](https://aistudio.google.com)

</div>

## Advanced Features

### 1. Gemini Live (Realtime Streaming)

AI Studio includes a "Sci-Fi" mode called **Gemini Live**. This allows you to connect your microphone and camera to the
model for a continuous, real-time conversation.

* **How it works**: Unlike a standard chat where you type and wait, this is an open channel. You can interrupt the AI,
  show it objects on your camera, and have a fluid voice conversation with almost zero delay.
* **Use Case**: Test how an AI performs as a live translator or a visual assistant for the blind.
* 🔗 [Try Gemini Live](https://aistudio.google.com/live)

### 2. The App Builder

AI Studio is not just for chatting; it is for **building**. Once you figure out the perfect instructions to make the AI
do what you want (e.g., "A bot that writes polite rejection emails"), you can save that setup as an **App**.

* **Save & Share**: You can save your prompts as reusable "Apps" in your library.
* **Get the Code**: With one click, AI Studio will write the programming code (JavaScript) needed to put
  your specific AI bot onto your own website or software.
* 🔗 [View Your Apps](https://aistudio.google.com/apps)

## What You Can Do (Use Cases)

### 1. The "Video Analyst"

**Scenario**: You have a 1-hour recording of a Zoom meeting or a lecture.

* **Action**: Upload the entire video file directly to AI Studio.
* **Prompt**: "Extract all the deadlines mentioned in this video and list who is responsible for each task."
* **Result**: The AI "watches" the video in seconds and produces a perfect textual summary.

### 2. The "Book Critic"

**Scenario**: You want to analyze a 500-page PDF document or an entire codebase.

* **Action**: Upload the massive file (which would be too big for ChatGPT).
* **Prompt**: "Summarize chapter 4 and explain how it contradicts chapter 10."
* **Result**: Thanks to the 2-million token window, it holds the entire book in its memory at once.

### 3. The "Bot Builder"

**Scenario**: You want to create a bot that *only* speaks in JSON format for a programming project.

* **Action**: Set the **System Instruction** to: "You are a data formatter. Output only valid JSON. Do not speak to the
  user."
* **Result**: The AI obeys strictly, removing all "Here is your answer" filler text. You can then click **"Get Code"**
  to use this in your app.

### 4. Multiplication Tables Practice App

::: details Dutch prompt
````md
# Maaltafels Oefenapp

Bouw een kindvriendelijke single-page webapp voor het oefenen van de maaltafels met de volgende specificaties.

## 1. Algemeen

- Doel: Mijn kinderen op een leuke, speelse manier de maaltafels (2 t/m 9) laten oefenen.
- Taal van de interface: Nederlands.
- Werkt volledig in de browser, zonder backend (alle data via `localStorage`).
- Single-page app (SPA) gevoel, geen full page reloads.

## 2. Design & Layout

- Kindvriendelijk, vrolijk, positief.
- Gebruik grote, duidelijke knoppen en invoervelden.
- Kleurrijke maar rustige kleuren (pastel of primaire kleuren).
- Speels maar goed leesbaar lettertype (bijv. een ronde sans-serif).
- Responsive design: moet goed werken op tablet en desktop.
- Ruim witruimte, niet te druk, focus op de som en het antwoord.
- Bovenin:
  - Titel, bijv. "Maaltafels Kampioen".
  - Kleine subtitel/boodschap: "Oefen elke dag een beetje en word supergoed in maaltafels!"
- Centrale zone:
  - Huidige vraag (groot in beeld).
  - Antwoordveld en actieknop(pen).
  - Voortgangsindicator.
- Onderaan:
  - Geschiedenis / voortgangsoverzicht.
  - Eventueel een korte motiverende tekst.

## 3. Fly-out Menu (Instellingen)

- Rechtsboven een hamburger-icoon dat een fly-out / slide-in menu opent (van rechts).
- In dit menu kunnen de oefeninstellingen gekozen worden:
  1. **Aantal oefeningen**
     - Keuze in stappen van 5: `5, 10, 15, 20, 25, 30`
     - Gebruik bijvoorbeeld radiobuttons of grote knoppen.
  2. **Te oefenen maaltafels**
     - Checkboxes voor de tafels: 2, 3, 4, 5, 6, 7, 8, 9.
     - Minimaal één tafel moet geselecteerd zijn om te kunnen starten.
  3. **Moeilijkheidsgraad / volgorde**
     - Toggle of dropdown:
       - "In volgorde" (bijv. 2×1, 2×2, 2×3,…)
       - "Willekeurig" (mix van alle gekozen tafels in random volgorde).
  4. **Timer-optie (optioneel)**
     - Toggle: "Timer per vraag" aan/uit.
     - Als aan: stel een standaard tijd in per vraag (bijv. 10 seconden) of een keuze (5, 10, 15s).
  5. **Geluid**
     - Toggle: geluid aan/uit (voor korte feedback geluidjes bij goed/fout).
  6. **Dark mode**
     - Toggle: licht / donker thema.
  7. **Avatar / Naam**
     - Invoerveld voor naam van het kind (bijv. "Hoe heet jij?").
     - Eenvoudige avatar-keuze (bijv. 3–6 iconen: dier, ster, smiley, etc.).
- Onderaan het menu:
  - Grote knop "Start oefening".
  - Sluitknop (X) om het menu weer te verbergen.

## 4. Oefenflow

- Na het starten:
  - Genereer een reeks vragen gebaseerd op:
    - Geselecteerde tafels.
    - Aantal oefeningen.
    - Gekozen volgorde (in volgorde of willekeurig).
- Toon steeds **één vraag per keer**, bijv.:
  - "7 × 8 = ?"
- Interface per vraag:
  - Grote weergave van de som in het midden.
  - Invoerveld voor het antwoord (numeriek).
  - "Controleer" knop.
  - Onder het antwoord:
    - Plaats voor feedback (goed/fout).
- Bedieningsgemak:
  - Drukken op `Enter` moet gelijk zijn aan klikken op "Controleer".
  - Na feedback kan dezelfde knop veranderen in "Volgende" of er komt een aparte "Volgende" knop.
- Timer (indien aan):
  - Toon een aftellende timer per vraag (bijv. een kleine cirkel of balk).
  - Als de tijd op is: markeer de vraag als fout en toon het juiste antwoord.
- Voortgang:
  - Toon bovenaan "Vraag X / Y".
  - Eventueel een voortgangsbalk die vollopen terwijl je vragen maakt.

## 5. Feedback per Vraag

- Na het controleren van een antwoord:
  - Als **goed**:
    - Toon een groen vinkje.
    - Korte positieve tekst ("Top!", "Goed gedaan!", "Yes!").
    - Speels geluidje (indien geluid aan).
  - Als **fout**:
    - Toon een rood kruisje.
    - Laat het correcte antwoord zien, bijv. "Het juiste antwoord is 56".
    - Bemoedigende tekst ("Geen probleem, probeer de volgende!", "Hier leer je van!").
    - Rustig, niet-schrikkerig geluid (indien geluid aan).

## 6. Einde van de Oefensessie (Score & Samenvatting)

- Na de laatste vraag:
  - Bereken:
    - Aantal goede antwoorden.
    - Aantal foute antwoorden.
    - Percentage score: `score_percentage = (aantal_goed / totaal_vragen) × 100`
  - Toon een samenvattingsscherm met:
    - Groot percentage (bijv. "Je score: 80%").
    - "Je had X goed en Y fout."
    - Eventuele totale tijd / gemiddelde tijd per vraag (optioneel).
    - Overzicht van geselecteerde tafels.
- Feedback op basis van score:
  - **Score < 70%**
    - Toon een warme, bemoedigende boodschap, bijv.:
      - "Goed geprobeerd! Blijf oefenen, je wordt elke keer beter! 💪"
      - "Je hebt al veel geleerd, nog een paar keer oefenen en je wordt een pro!"
    - Geef een duidelijke knop "Opnieuw oefenen" (met dezelfde instellingen) en eventueel "Pas instellingen aan".
  - **Score tussen 70% en 99%**
    - Toon een positieve boodschap:
      - "Super gedaan! Bijna perfect! 🌟"
      - "Je bent al heel ver, nog een beetje oefenen voor 100%!"
  - **Score = 100%**
    - Toon een feestelijke boodschap:
      - "PERFECT! Je bent een maaltafels kampioen! 🎉"
    - Start een **confetti animatie** over het scherm.
      - Gebruik bijvoorbeeld een confetti library (zoals canvas-confetti) of een eigen CSS/JS animatie.
    - Eventueel een speciaal "kampioen"-badge of kroon-icoon naast de avatar/naam.
- Bied aan:
  - Knop "Nog een keer dezelfde instellingen".
  - Knop "Andere tafels kiezen" (opent het fly-out menu).

## 7. Local Storage – Scores & Voortgang

Gebruik `localStorage` om resultaten op te slaan. Voor elke sessie:

- Sla minimaal op:
  - Datum (bijv. `YYYY-MM-DD`).
  - Tijd (bijv. `HH:MM`).
  - Naam kind (indien ingevuld).
  - Geselecteerde tafels (bijv. `[2,3,4]`).
  - Aantal vragen.
  - Moeilijkheid (in volgorde / willekeurig).
  - Timer aan/uit.
  - Score percentage.
  - Aantal goed/fout.
- Structuursuggestie:
  - Bewaar een array van sessies onder een key, bijv. `maaltafelsScores`.
- In de UI:
  - Toon onderaan een **geschiedenis**-sectie:
    - Tabel of lijst met de laatste 10 (of meer) sessies.
    - Kolommen: Datum, Tijd, Tafels, Score %, Goed/Fout.
  - Voeg een knop toe: "Geschiedenis wissen":
    - Vraagt om bevestiging (bijv. "Weet je zeker dat je alle scores wilt verwijderen?").
    - Leegt daarna de relevante `localStorage` entries.

## 8. Extra Features & Gamification

Voeg de volgende extra features toe om de app leuker en motiverender te maken:

1. **Moeilijke vragen herhalen**
   - Aan het eind van de sessie:
     - Detecteer welke sommen fout beantwoord zijn.
     - Bied een knop "Oefen je moeilijke sommen nog eens".
     - Start een korte sessie met alleen die fout beantwoorde vragen.

2. **Sterren / Badges systeem**
   - Ken badges toe voor mijlpalen, bv.:
     - Eerste oefening voltooid.
     - 5 sessies voltooid.
     - 3 keer achter elkaar 100%.
     - 50 totaal goede antwoorden, 100, 250, etc.
   - Toon een klein "Badges" overzicht in de buurt van de naam/avatar of in het fly-out menu.

3. **Avatar / Naam**
   - Laat het kind een naam invullen (wordt weergegeven in de UI, bv. "Goed gedaan, Emma!").
   - Laat een eenvoudige avatar kiezen (bijv. 4–6 icoontjes).
   - Sla deze selectie ook in `localStorage` op, zodat deze behouden blijft tussen sessies.

4. **Geluidjes**
   - Korte, vrolijke geluidjes bij:
     - Goed antwoord.
     - Fout antwoord.
     - 100% score (extra feestelijk geluid).
   - Zorg altijd voor een duidelijke toggle "Geluid aan/uit".

5. **Timer / Tijdmeting**
   - Als de timer-optie aan staat: toon een countdown per vraag.
   - Eventueel in het overzicht: gemiddelde tijd per vraag tonen.
   - Zorg dat de timer niet stressvol oogt (speels design).

6. **Dark Mode**
   - Licht/donker thema switch in het fly-out menu.
   - Sla de gekozen modus op in `localStorage` zodat deze behouden blijft.

7. **Eenvoudige grafiek van voortgang**
   - Toon in de geschiedenis-sectie een simpele grafiek:
     - X-as: tijd of sessies (1, 2, 3, …).
     - Y-as: scorepercentage.
   - Hoeft niet zwaar: kan met eenvoudige CSS/JS, of minimale canvas/SVG.
   - Doel is visueel laten zien dat scores in de loop van de tijd (hopelijk) omhoog gaan.

8. **Keyboard support**
   - `Enter` = antwoorden/volgende.
   - Focus automatisch in het antwoordveld bij elke nieuwe vraag.

9. **Deelfunctie (optioneel, simpel)**
   - Knop "Deel je score":
     - Simpel: kopieer een tekst naar het klembord, zoals  
       "Ik haalde 100% bij de tafels van 3 en 4 in de Maaltafels Kampioen app!"
     - Of eventueel een simpele "Print" knop om het scherm te printen.

## 9. Technische Suggesties

- **Tech stack**: 
  - Je mag kiezen: puur HTML/CSS/JavaScript of een framework zoals React.
  - Geen backend nodig; alles draait client-side.
- **Opslag**:
  - Gebruik `localStorage` voor:
    - Instellingen (naam, avatar, thema, geluid, timer).
    - Scores en geschiedenis.
- **Confetti**:
  - Gebruik een bestaande confetti-library (bijv. canvas-confetti) of rol een simpele eigen animatie.
````
:::

::: details English prompt
````md
# Multiplication Tables Practice App

Build a child-friendly single-page web app for practicing multiplication tables with the following specifications.

## 1. General

- Goal: Let my children practice the multiplication tables (2–9) in a fun, playful way.
- Interface language: Dutch or easily switchable, but all labels and copy should be friendly for kids.
- Runs entirely in the browser, without a backend (all data via `localStorage`).
- Single-page app (SPA) feel, no full page reloads.

## 2. Design & Layout

- Child-friendly, cheerful, positive.
- Use large, clear buttons and input fields.
- Colorful but calm colors (pastel or primary colors).
- Playful but readable font (e.g., a rounded sans-serif).
- Responsive design: should work well on tablet and desktop.
- Plenty of whitespace, not too cluttered, focus on the question and the answer.
- Top area:
    - Title, e.g., “Times Table Champion”.
    - Small subtitle/message: “Practice a little every day and become amazing at multiplication!”
- Center area:
    - Current question (shown large).
    - Answer field and action button(s).
    - Progress indicator.
- Bottom area:
    - History / progress overview.
    - Optionally a short motivational message.

## 3. Fly-out Menu (Settings)

- A hamburger icon in the top right that opens a fly-out / slide-in menu (from the right).
- In this menu the practice settings can be chosen:

1. **Number of exercises**
    - Choices in steps of 5: `5, 10, 15, 20, 25, 30`
    - Use radio buttons or large buttons.

2. **Tables to practice**
    - Checkboxes for the tables: 2, 3, 4, 5, 6, 7, 8, 9.
    - At least one table must be selected to start.

3. **Difficulty / order**
    - Toggle or dropdown:
        - “In order” (e.g., 2×1, 2×2, 2×3, …)
        - “Random” (mix of all selected tables in random order).

4. **Timer option (optional)**
    - Toggle: “Timer per question” on/off.
    - When on: set a default time per question (e.g., 10 seconds) or a choice (5, 10, 15s).

5. **Sound**
    - Toggle: sound on/off (for short feedback sounds for correct/incorrect answers).

6. **Dark mode**
    - Toggle: light / dark theme.

7. **Avatar / Name**
    - Input field for the child’s name (e.g., “What’s your name?”).
    - Simple avatar selection (e.g., 3–6 icons: animal, star, smiley, etc.).

- At the bottom of the menu:
    - Large “Start practice” button.
    - Close button (X) to hide the menu again.

## 4. Practice Flow

- After starting:
    - Generate a sequence of questions based on:
        - Selected tables.
        - Number of exercises.
        - Chosen order (in order or random).
- Always show **one question at a time**, e.g.:
    - “7 × 8 = ?”
- UI per question:
    - Large display of the multiplication in the center.
    - Numeric input field for the answer.
    - “Check” button.
    - Below the answer:
        - Area for feedback (correct/incorrect).

- Usability:
    - Pressing `Enter` should be equivalent to clicking “Check”.
    - After feedback, the same button can turn into “Next” or a separate “Next” button appears.

- Timer (if enabled):
    - Show a countdown per question (e.g., a small circle or bar).
    - When time runs out: mark the question as incorrect and show the correct answer.

- Progress:
    - Show at the top “Question X / Y”.
    - Optionally a progress bar that fills as you go through the questions.

## 5. Per-question Feedback

- After checking an answer:
    - If **correct**:
        - Show a green check mark.
        - Short positive text (“Great!”, “Well done!”, “Yes!”).
        - Cheerful sound (if sound is on).
    - If **incorrect**:
        - Show a red cross.
        - Show the correct answer, e.g., “The correct answer is 56”.
        - Encouraging text (“No worries, try the next one!”, “You learn from this!”).
        - Calm, non-alarming sound (if sound is on).

## 6. End of the Session (Score & Summary)

- After the last question:
    - Calculate:
        - Number of correct answers.
        - Number of incorrect answers.
        - Score percentage:  
          `score_percentage = (correct_count / total_questions) × 100`
    - Show a summary screen with:
        - Large percentage (e.g., “Your score: 80%”).
        - “You got X right and Y wrong.”
        - Optional total time / average time per question.
        - Overview of selected tables.

- Feedback based on score:

    - **Score < 70%**
        - Show a warm, encouraging message, e.g.:
            - “Nice try! Keep practicing, you’re getting better every time!”
            - “You’ve already learned a lot, a few more rounds and you’ll be a pro!”
        - Provide a clear “Practice again” button (with the same settings) and optionally “Change settings”.

    - **Score between 70% and 99%**
        - Show a positive message:
            - “Great job! Almost perfect!”
            - “You’re doing so well, just a bit more practice to hit 100%!”

    - **Score = 100%**
        - Show a celebratory message:
            - “PERFECT! You are a times table champion!”
        - Trigger a **confetti animation** over the screen:
            - Use an existing confetti library (such as canvas-confetti) or a custom CSS/JS animation.
        - Optionally show a special “champion” badge or crown icon next to the avatar/name.

- Offer:
    - Button “Same settings again”.
    - Button “Choose different tables” (opens the fly-out menu).

## 7. Local Storage – Scores & Progress

Use `localStorage` to store results. For each session, store at least:

- Date (e.g., `YYYY-MM-DD`).
- Time (e.g., `HH:MM`).
- Child’s name (if filled in).
- Selected tables (e.g., `[2,3,4]`).
- Number of questions.
- Difficulty (in order / random).
- Timer on/off.
- Score percentage.
- Number correct/incorrect.

Suggested structure:

- Save an array of session objects under a key, for example `timesTableScores`.

In the UI:

- At the bottom, show a **history** section:
    - Table or list of the last 10 (or more) sessions.
    - Columns: Date, Time, Tables, Score %, Correct/Incorrect.
- Add a button: “Clear history”:
    - Asks for confirmation (e.g., “Are you sure you want to delete all scores?”).
    - Then clears the relevant `localStorage` entries.

## 8. Extra Features & Gamification

Add the following extra features to make the app more fun and motivating:

1. **Repeat difficult questions**
    - At the end of the session:
        - Detect which questions were answered incorrectly.
        - Offer a button “Practice your difficult questions again”.
        - Start a short session with only those previously incorrect questions.

2. **Stars / Badges system**
    - Award badges for milestones, e.g.:
        - First session completed.
        - 5 sessions completed.
        - 3 times in a row with 100%.
        - 50 total correct answers, then 100, 250, etc.
    - Display a small “Badges” overview near the name/avatar or in the fly-out menu.

3. **Avatar / Name**
    - Let the child enter a name (shown in the UI, e.g., “Well done, Emma!”).
    - Let them choose a simple avatar (e.g., 4–6 icons).
    - Store this selection in `localStorage` so it persists across visits.

4. **Sounds**
    - Short, cheerful sounds for:
        - Correct answer.
        - Incorrect answer.
        - 100% score (extra festive sound).
    - Always provide a clear “Sound on/off” toggle.

5. **Timer / Time tracking**
    - If the timer option is on: show a countdown per question.
    - Optionally show the average time per question in the summary.
    - Make sure the timer doesn’t feel stressful (playful design).

6. **Dark Mode**
    - Light/dark theme switch in the fly-out menu.
    - Store the chosen mode in `localStorage` so it is remembered.

7. **Simple progress chart**
    - In the history section, show a simple chart:
        - X-axis: time or sessions (1, 2, 3, …).
        - Y-axis: score percentage.
    - Can be very lightweight: simple CSS/JS, or minimal canvas/SVG.
    - Goal is to visually show that scores (hopefully) improve over time.

8. **Keyboard support**
    - `Enter` = submit answer / go to next.
    - Automatically focus the answer field on each new question.

9. **Simple share function (optional)**
    - “Share your score” button:
        - Simple: copy a text to the clipboard, such as  
          “I scored 100% on the 3 and 4 times tables in the Times Table Champion app!”
        - Or a simple “Print” button to print the score screen.

## 9. Technical Suggestions

- **Tech stack**:
    - You may choose plain HTML/CSS/JavaScript or a framework like React.
    - No backend required; everything runs client-side.

- **Storage**:
    - Use `localStorage` for:
        - Settings (name, avatar, theme, sound, timer).
        - Scores and history.

- **Confetti**:
    - Use an existing confetti library (e.g. canvas-confetti) or implement a simple custom animation.
````
:::
## Build with AI Studio

Some of my apps I build with AI Studio:

### QR Code Generator

Create QR codes with a Thomas More Logo on it.

🔗 [Visit website](https://tm-qrcode.netlify.app/)

![QR Code Generator](./aistudio/qr_code.webp)

### CSS Custom Properties Shades Generator

Generate CSS properties for my webdesign courses.

🔗 [Visit website](https://css-shades.netlify.app/)

![CSS Shades Generator](./aistudio/css_shades.webp)

### Fast Image Conversion &amp; Editing Tool

Generate CSS properties for my webdesign courses.

🔗 [Visit website](https://itf-webp.netlify.app/)

![Image convertor](./aistudio/image_convertor.webp)

### Internet Radio

A radio app build around online radio stations.

🔗 [Visit website](https://tm-radio.netlify.app/)

![Internet Radio](./aistudio/radio.webp)

### Camino App

An AI-driven app for our Camino trip with our colleges. Includes: a specialised chatbot, text-to-speech, speech-to-text, 
web-search and geolocation tools.

![Camino App](./aistudio/camino.webp)







