---
trigger: always_on
---

# Eneride Universe - Writing Rules

## 1. Global Context
- **Project:** VitePress application.
- **Purpose:** Documentation for a roleplaying game featuring a custom ruleset and a unique universe.
- **Structure:**
  - `docs/rulebook/`: Contains the technical rules for the roleplaying game.
  - `docs/universe/`: Contains articles describing the custom universe.

## 2. Writing Style and Format
- **Language:** All articles MUST be written in French.
- **Format:** Wiki-like format (using Markdown, standard headers, bullet points).
- **Tone:** Wiki-like writing style. Simple, direct, informative, and directed to players, Game Masters, and people discovering the universe. Avoid breaking the fourth wall unnecessarily.

## 3. Article Generation Principles
When the user provides lore information to generate an article, you MUST strictly apply these three rules:

1. **Information Retention:** Always keep and integrate *every* piece of information the user provides. Do not drop details.
2. **Transform Real-World References into In-Universe Descriptions:**
   - The user will often use real-world examples (e.g., "Ligne Maginot", "Haussmannien", "Anatolie", "Suisse 1890") to convey a concept because it is easier.
   - **DO NOT** include these real-world references or names in the final article.
   - **DO** describe the visual and functional aspects of the reference directly.
   - *Example:* Instead of saying "It looks like the Maginot line", describe "a massive, continuous defensive network incorporating natural barriers, underground bunkers, and strategically placed artillery forts."
   - *Action:* If you don't know exactly what the user's real-world reference looks like, you MUST use the `search_web` tool to understand its key characteristics before writing.
3. **Consistency Checks:** Always ensure that new additions are consistent with existing related articles in the `universe` folder. Maintain coherence regarding factions, physics, and geography.
