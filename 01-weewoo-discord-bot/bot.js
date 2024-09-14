import { Client, Events, GatewayIntentBits } from "discord.js";
import { config } from "dotenv";
import * as weewoo from "./commands/weewoo.js";
import * as play from "./commands/play.js";

// places variables in .env file into a variable called process.env
config();

// console.log(process.env);

//login to discord with bot, specify intents
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

//function to run when the bot is ready
function readyDiscord() {
  console.log("Hello! I am " + client.user.tag);
}

//function to handle interactions, in this case the commands
async function handleInteraction(interaction) {
  //check if the interaction even is a command
  if (!interaction.isCommand()) return;
  if (interaction.commandName === "weewoo") {
    //need to use await as this needs to happen asynchronously as it can take time
    await weewoo.execute(interaction);
  }
  if (interaction.commandName === "play") {
    await play.execute(interaction);
  }
}

//once function for any event that happens just one time
client.once(Events.ClientReady, readyDiscord);

//login function to login to discord, uses token
client.login(process.env.TOKEN);

//on function is to listen for events that can happen multiple times
client.on(Events.InteractionCreate, handleInteraction);
