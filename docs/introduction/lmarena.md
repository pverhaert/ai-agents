# 🏆 LM Arena: The "Pepsi Challenge" for AI

While academic benchmarks test for facts, they are bad at measuring "vibes." Just because an AI is smart doesn't mean it
is helpful or easy to talk to.

Enter the **[LM Arena (Chatbot Arena)](https://lmarena.ai/)**.

## How It Works

The Arena uses a system called **Blind Testing** to prevent bias.

1. **The Setup:** You enter a prompt (e.g., "Write a polite email declining a wedding invitation").
2. **The Battle:** Two anonymous AI models (Model A and Model B) generate an answer side-by-side.
3. **The Vote:** You vote for which answer is better *without knowing which AI wrote it*.
4. **The Reveal:** Only *after* you vote are the names revealed (e.g., "Model A was GPT-4o, Model B was Claude 3.5").

## The "Elo" Rating System

The Arena ranks AI models using an **Elo Score**—the same system used to rank professional Chess players and Video Game
players.

* If an AI beats a strong opponent, it gains a lot of points.
* If it beats a weak opponent, it gains only a few points.

## Why This is the "Gold Standard"

For non-technical users, the LM Arena is often more useful than scientific graphs because it measures 
**Human Preference**.

* **It captures nuance:** Does the AI sound robotic? Did it refuse to answer? Was it too wordy?
* **Hard to cheat:** Because the questions come from real humans in real-time, the AI developers cannot "teach to the
  test."

![Leaderboard](./benchmarks/LMArena.webp)

## Try It Yourself: Run a Coding Battle

You don't need to be a programmer to test an AI's coding skills. You can run a simplified version of a coding benchmark
by asking two different AIs (like ChatGPT vs. Claude) to create a small application.

Go to [lmarena.ai](https://lmarena.ai/) and click "Battle. Copy and paste the prompt below into an AI to see if it can
write code that works on the first try:

::: tip Prompt

Write a modern, sleek, single HTML file containing a fully playable version of the game Pong. The user should control
the left paddle with the arrow up and down keys, and the computer should control the right paddle. The code must be
complete and playable immediately in a web browser.
:::

**How to grade it:**

1. Copy the code the AI gives you.
2. Save it as `game.html` on your desktop.
3. Double-click to open it in your browser.
4. **Pass/Fail:** Does the game load? Do the paddles move? Does the ball bounce correctly? If the ball flies off the
   screen or the paddles stick, the AI failed the benchmark.

![Example Output](./benchmarks/pong_game.webp)