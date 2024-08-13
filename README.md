# GenAI Discord Bot

## Overview

The GenAI Discord Bot is a simple yet powerful bot designed to respond to user prompts using the capabilities of Generative AI (powered by Google's Gemini model). It can handle commands, generate responses to user messages, and provide random greetings. This bot is built using Node.js and the Discord.js library.

## Features

- **Generative AI Responses**: The bot can generate responses to user inputs using the `GenAI` command.
- **Random Greetings**: The bot replies with a random greeting if no command is detected.
- **Slash Commands**: The bot supports the `/about` slash command to provide information about itself.

## Getting Started

### Prerequisites

Before running the bot, ensure you have the following:

- Node.js installed on your machine.
- A Discord bot token.
- A Google Gemini API key.

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/Discord_Bot.git
    cd Discord_Bot
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Create a `.env` file in the root directory** and add the following:
    ```plaintext
    DISCORD_BOT_TOKEN=your-discord-bot-token
    DISCORD_CLIENT_ID=your-discord-client-id
    GEMINI_API_KEY=your-gemini-api-key
    ```

### Running the Bot

To start the bot, run:

```bash
node index.js
```

The bot will now be online and ready to respond to commands on your Discord server.

## Usage

### Commands

- **GenAI Command**: 
    - Usage: Type `GenAI your_message` in any channel where the bot is active.
    - Function: The bot will generate a response using the Generative AI model.
  
- **Slash Command `/about`**:
    - Usage: Type `/about` in any channel.
    - Function: The bot will respond with a random greeting.

### Example

1. **User Input**:
   ```
   GenAI What is the weather today?
   ```
   **Bot Response**:
   ```
   Generating answer...
   The weather today is sunny with a chance of rain in the evening.
   ```

2. **User Input**:
   ```
   /about
   ```
   **Bot Response**:
   ```
   Hi there! I am here to handle the prompts you ask. Explore everything you want to know with the power of Generative AI! Start by typing `GenAI your_message`. Enjoy exploring!
   ```

## Contributing

If you wish to contribute to this project, please fork the repository and submit a pull request. All contributions are welcome!

## Acknowledgements

- [Discord.js](https://discord.js.org/) for the Discord API wrapper.
- [Google Gemini API](https://developers.google.com/generative-ai) for the Generative AI model.

---

Enjoy using the GenAI Discord Bot! If you encounter any issues or have suggestions, feel free to open an issue on GitHub.
