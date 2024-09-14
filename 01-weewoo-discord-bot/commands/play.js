import { SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("play")
  .setDescription("play a litl game with me")
  .addStringOption((option) =>
    option
      .setName("guess")
      .setDescription("Guess whether wee or woo")
      .setRequired(true)
      .addChoices({ name: "wee", value: "wee" }, { name: "woo", value: "woo" })
  );

export async function execute(interaction) {
  let choice = "wee";
  if (Math.random() > 0.5) {
    choice = "woo";
  }
  if (interaction.options.getString("guess") === choice) {
    await interaction.reply("You win!");
  } else {
    await interaction.reply("You lose!");
  }
}
