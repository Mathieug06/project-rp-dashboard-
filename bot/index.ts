import {
  Client,
  GatewayIntentBits,
  REST,
  Routes,
  SlashCommandBuilder,
} from "discord.js";

const TOKEN = process.env.DISCORD_TOKEN;
const CLIENT_ID = process.env.DISCORD_CLIENT_ID;
const GUILD_ID = process.env.DISCORD_GUILD_ID;

if (!TOKEN) {
  console.error("❌ DISCORD_TOKEN est manquant.");
  process.exit(1);
}

if (!CLIENT_ID) {
  console.error("❌ DISCORD_CLIENT_ID est manquant.");
  process.exit(1);
}

if (!GUILD_ID) {
  console.error("❌ DISCORD_GUILD_ID est manquant.");
  process.exit(1);
}

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildPresences,
  ],
});

const commands = [
  new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Vérifie si le bot fonctionne."),

  new SlashCommandBuilder()
    .setName("serveur")
    .setDescription("Affiche les informations du serveur."),

  new SlashCommandBuilder()
    .setName("membres")
    .setDescription("Affiche le nombre de membres du serveur."),
].map((command) => command.toJSON());

async function registerCommands() {
  console.log("🔄 Enregistrement des commandes...");

  const rest = new REST({ version: "10" }).setToken(TOKEN);

  await rest.put(
    Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
    {
      body: commands,
    }
  );

  console.log("✅ Commandes enregistrées.");
}

client.once("ready", () => {
  console.log("=================================");
  console.log("🤖 PROJECT RP BOT");
  console.log("=================================");
  console.log(`✅ Connecté en tant que ${client.user.tag}`);
  console.log(`🌐 Serveurs : ${client.guilds.cache.size}`);
  console.log("=================================");

  client.user.setPresence({
    activities: [
      {
        name: "Project RP",
        type: 0,
      },
    ],
    status: "online",
  });
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  try {
    if (interaction.commandName === "ping") {
      await interaction.reply(
        `🏓 **Pong !**\nLatence : \`${client.ws.ping}ms\``
      );
    }

    if (interaction.commandName === "serveur") {
      const guild = interaction.guild;

      if (!guild) {
        await interaction.reply(
          "❌ Cette commande doit être utilisée sur un serveur."
        );
        return;
      }

      await interaction.reply(
        `🏠 **${guild.name}**\n\n` +
        `👥 Membres : **${guild.memberCount}**\n` +
        `🆔 ID : \`${guild.id}\`\n` +
        `📅 Créé le : <t:${Math.floor(
          guild.createdTimestamp / 1000
        )}:D>`
      );
    }

    if (interaction.commandName === "membres") {
      const guild = interaction.guild;

      if (!guild) {
        await interaction.reply(
          "❌ Cette commande doit être utilisée sur un serveur."
        );
        return;
      }

      await interaction.reply(
        `👥 **${guild.name}** possède actuellement **${guild.memberCount} membres**.`
      );
    }
  } catch (error) {
    console.error("❌ Erreur commande :", error);

    if (interaction.replied || interaction.deferred) {
      await interaction.followUp("❌ Une erreur est survenue.");
    } else {
      await interaction.reply("❌ Une erreur est survenue.");
    }
  }
});

client.on("error", (error) => {
  console.error("❌ Erreur Discord :", error);
});

process.on("unhandledRejection", (error) => {
  console.error("❌ Erreur non gérée :", error);
});

async function start() {
  try {
    await registerCommands();

    console.log("🔄 Connexion à Discord...");

    await client.login(TOKEN);
  } catch (error) {
    console.error("❌ Erreur au démarrage :", error);
    process.exit(1);
  }
}

start();