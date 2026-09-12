const {
  Client,
  GatewayIntentBits,
  REST,
  Routes,
  SlashCommandBuilder,
} = require("discord.js");

// =====================================================
// CONFIGURATION
// =====================================================

// Le token sera ajouté plus tard comme variable secrète.
// NE METS PAS TON TOKEN DIRECTEMENT ICI.
const TOKEN = process.env.DISCORD_TOKEN;

// ID de ton application Discord
const CLIENT_ID = process.env.DISCORD_CLIENT_ID;

// ID de ton serveur Project RP
const GUILD_ID = process.env.DISCORD_GUILD_ID;

// =====================================================
// VÉRIFICATIONS
// =====================================================

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

// =====================================================
// CLIENT DISCORD
// =====================================================

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildPresences,
  ],
});

// =====================================================
// COMMANDES SLASH
// =====================================================

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

// =====================================================
// ENREGISTREMENT DES COMMANDES
// =====================================================

async function registerCommands() {
  try {
    console.log("🔄 Enregistrement des commandes...");

    const rest = new REST({ version: "10" }).setToken(TOKEN);

    await rest.put(
      Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
      {
        body: commands,
      }
    );

    console.log("✅ Commandes enregistrées.");
  } catch (error) {
    console.error("❌ Erreur lors de l'enregistrement :", error);
  }
}

// =====================================================
// BOT PRÊT
// =====================================================

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

// =====================================================
// COMMANDES
// =====================================================

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  try {
    // /ping
    if (interaction.commandName === "ping") {
      const ping = client.ws.ping;

      await interaction.reply(
        `🏓 **Pong !**\nLatence : \`${ping}ms\``
      );
    }

    // /serveur
    if (interaction.commandName === "serveur") {
      const guild = interaction.guild;

      if (!guild) {
        return interaction.reply("❌ Cette commande doit être utilisée sur un serveur.");
      }

      await interaction.reply(
        `🏠 **${guild.name}**\n\n` +
        `👥 Membres : **${guild.memberCount}**\n` +
        `🆔 ID : \`${guild.id}\`\n` +
        `📅 Créé le : <t:${Math.floor(guild.createdTimestamp / 1000)}:D>`
      );
    }

    // /membres
    if (interaction.commandName === "membres") {
      const guild = interaction.guild;

      if (!guild) {
        return interaction.reply("❌ Cette commande doit être utilisée sur un serveur.");
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

// =====================================================
// ERREURS
// =====================================================

client.on("error", (error) => {
  console.error("❌ Erreur Discord :", error);
});

process.on("unhandledRejection", (error) => {
  console.error("❌ Erreur non gérée :", error);
});

// =====================================================
// DÉMARRAGE
// =====================================================

async function start() {
  await registerCommands();

  console.log("🔄 Connexion à Discord...");

  await client.login(TOKEN);
}

start();