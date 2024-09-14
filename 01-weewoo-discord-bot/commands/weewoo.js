import { SlashCommandBuilder } from "discord.js";

// use this to make slash commands, name 'data' is specific
// export is used so we can import it in the other js files
export const data = new SlashCommandBuilder()
  .setName("weewoo")
  .setDescription("bot will go weewoo");

// async and await is related to the concept of promises
// discord events take time so we need to do them asynchronously so they wait for the previous thingy to complete
// named 'execute' for specific reason
export async function execute(interaction) {
  await interaction.reply("wee woo");
}
