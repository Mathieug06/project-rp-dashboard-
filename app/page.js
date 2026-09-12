"use client";

import { useState } from "react";

const sections = [
  {
    title: "TABLEAU DE BORD",
    items: [
      ["▦", "Vue d'ensemble"],
      ["♙", "Membres"],
      ["☷", "Paramètres généraux"],
    ],
  },
  {
    title: "COMMUNAUTÉ",
    items: [
      ["□", "Tickets"],
      ["↪", "Arrivées et Départs"],
      ["◷", "Messages auto"],
      ["▣", "Anniversaires"],
      ["♩", "Vocal temporaire"],
    ],
  },
  {
    title: "ENGAGEMENT",
    items: [
      ["ϟ", "Niveaux & XP"],
      ["♔", "Giveaways"],
      ["◯", "Suggestions"],
      ["☆", "Starboard"],
      ["♧", "Invitations"],
      ["⊙", "Économie"],
      ["▤", "Candidatures"],
    ],
  },
  {
    title: "SÉCURITÉ",
    items: [
      ["◇", "AutoMod"],
      ["⬡", "Anti-nuke"],
      ["▣", "Vérification"],
      ["!", "Infractions"],
      ["≡", "Logs"],
    ],
  },
  {
    title: "PERSONNALISATION",
    items: [
      ["▣", "Embeds"],
      [">_", "Commandes custom"],
      ["♙", "Rôles par réaction"],
      ["♙", "Rôle automatique"],
    ],
  },
  {
    title: "UTILITAIRES",
    items: [
      ["↓", "Sauvegardes"],
      ["▦", "Templates"],
    ],
  },
];

export default function Home() {
  const [active, setActive] = useState("Vue d'ensemble");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <main style={styles.app}>

      {/* MOBILE HEADER */}
      <div style={styles.mobileHeader}>
        <button
          style={styles.menuButton}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>

        <div style={styles.mobileTitle}>
          <div style={styles.logo}>P</div>
          <strong>Project RP</strong>
        </div>
      </div>

      {/* SIDEBAR */}
      <aside
        style={{
          ...styles.sidebar,
          transform:
            mobileOpen || typeof window === "undefined"
              ? "translateX(0)"
              : undefined,
        }}
      >
        {/* BRAND */}
        <div style={styles.brand}>
          <div style={styles.logo}>P</div>

          <div>
            <div style={styles.brandName}>Project RP</div>
            <div style={styles.brandSub}>GTA RP</div>
          </div>
        </div>

        {/* SERVER */}
        <div style={styles.server}>
          <div style={styles.serverIcon}>P</div>

          <div style={{ flex: 1 }}>
            <strong>Project RP - GTA RP</strong>
            <span style={styles.serverSub}>Serveur Discord</span>
          </div>

          <span>⌄</span>
        </div>

        {/* SEARCH */}
        <div style={styles.search}>
          <span>⌕</span>
          <span>Rechercher...</span>
        </div>

        {/* NAVIGATION */}
        <div style={styles.navigation}>
          {sections.map((section) => (
            <div key={section.title} style={styles.section}>

              <div style={styles.sectionTitle}>
                {section.title}
                <span>⌄</span>
              </div>

              {section.items.map(([icon, name]) => (
                <button
                  key={name}
                  onClick={() => {
                    setActive(name);
                    setMobileOpen(false);
                  }}
                  style={{
                    ...styles.navItem,
                    ...(active === name ? styles.navActive : {}),
                  }}
                >
                  <span style={styles.navIcon}>{icon}</span>

                  <span>{name}</span>

                  {(name === "Assistant FAQ" ||
                    name === "IA Modération") && (
                    <span style={styles.premiumSmall}>
                      PREMIUM
                    </span>
                  )}
                </button>
              ))}
            </div>
          ))}
        </div>

        {/* BOTTOM */}
        <div style={styles.bottom}>

          <div style={styles.premiumBox}>
            <div style={styles.starBox}>☆</div>

            <div style={{ flex: 1 }}>
              <strong>Passer au Premium</strong>
              <span style={styles.premiumSub}>
                Débloque toutes les limites
              </span>
            </div>

            <span>›</span>
          </div>

          <div style={styles.account}>
            <div style={styles.avatar}>M</div>

            <strong>mathieu50</strong>

            <span style={{ marginLeft: "auto" }}>
              ↪
            </span>
          </div>

        </div>
      </aside>

      {/* CONTENT */}
      <section style={styles.content}>

        {/* TOPBAR */}
        <header style={styles.topbar}>

          <div>
            <div style={styles.breadcrumb}>
              Project RP / Dashboard
            </div>

            <h1 style={styles.h1}>{active}</h1>

            <p style={styles.description}>
              Gérez votre serveur Discord Project RP.
            </p>
          </div>

          <div style={styles.topActions}>
            <button style={styles.iconButton}>
              ⌕
            </button>

            <button style={styles.iconButton}>
              ◔
            </button>

            <div style={styles.profile}>
              M
            </div>
          </div>

        </header>

        {/* STAT CARDS */}
        <div style={styles.cards}>

          <div style={styles.card}>
            <span style={styles.cardIcon}>♙</span>

            <div style={styles.cardContent}>
              <span>Membres</span>
              <strong>1 248</strong>
            </div>

            <small>+12%</small>
          </div>

          <div style={styles.card}>
            <span style={styles.cardIcon}>□</span>

            <div style={styles.cardContent}>
              <span>Tickets</span>
              <strong>24</strong>
            </div>

            <small>8 ouverts</small>
          </div>

          <div style={styles.card}>
            <span style={styles.cardIcon}>ϟ</span>

            <div style={styles.cardContent}>
              <span>Niveau moyen</span>
              <strong>18</strong>
            </div>

            <small>+3 cette semaine</small>
          </div>

          <div style={styles.card}>
            <span style={styles.cardIcon}>●</span>

            <div style={styles.cardContent}>
              <span>En ligne</span>
              <strong>186</strong>
            </div>

            <small>actuellement</small>
          </div>

        </div>

        {/* MAIN PANELS */}
        <div style={styles.grid}>

          {/* ACTIVITY */}
          <div style={styles.panel}>

            <div style={styles.panelHeader}>
              <div>
                <h2 style={styles.h2}>
                  Activité du serveur
                </h2>

                <p style={styles.panelDescription}>
                  Vue générale des dernières activités
                </p>
              </div>

              <button style={styles.select}>
                7 derniers jours⌄
              </button>
            </div>

            <div style={styles.chart}>
              {[
                42,
                58,
                48,
                75,
                62,
                88,
                70,
                96,
                78,
                91,
                68,
                84,
              ].map((height, i) => (
                <div
                  key={i}
                  style={styles.barContainer}
                >
                  <div
                    style={{
                      ...styles.bar,
                      height: `${height}%`,
                    }}
                  />
                </div>
              ))}
            </div>

          </div>

          {/* BOT STATUS */}
          <div style={styles.panel}>

            <div style={styles.panelHeader}>
              <div>
                <h2 style={styles.h2}>
                  État du bot
                </h2>

                <p style={styles.panelDescription}>
                  Project RP Bot
                </p>
              </div>

              <span style={styles.online}>
                ● EN LIGNE
              </span>
            </div>

            <div style={styles.status}>

              <div style={styles.statusItem}>
                <span>Uptime</span>
                <strong>99,98%</strong>
              </div>

              <div style={styles.statusItem}>
                <span>Latence</span>
                <strong>42 ms</strong>
              </div>

              <div style={styles.statusItem}>
                <span>Serveurs</span>
                <strong>1</strong>
              </div>

            </div>

            <button style={styles.manageButton}>
              Gérer le bot →
            </button>

          </div>

        </div>

        {/* QUICK ACTIONS */}
        <div style={styles.panel}>

          <div style={styles.panelHeader}>
            <div>
              <h2 style={styles.h2}>
                Actions rapides
              </h2>

              <p style={styles.panelDescription}>
                Accédez rapidement aux fonctions principales.
              </p>
            </div>
          </div>

          <div style={styles.quickGrid}>

            {[
              ["□", "Créer un ticket"],
              ["♔", "Créer un giveaway"],
              ["▣", "Créer un embed"],
              ["♙", "Gérer les rôles"],
              ["◇", "Configurer AutoMod"],
              ["≡", "Voir les logs"],
            ].map(([icon, title]) => (

              <button
                key={title}
                style={styles.quickButton}
                onClick={() => setActive(title)}
              >
                <span style={styles.quickIcon}>
                  {icon}
                </span>

                <strong>{title}</strong>

                <small style={styles.quickArrow}>
                  →
                </small>
              </button>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}

const styles = {

  /* =========================
     APPLICATION
  ========================= */

  app: {
    minHeight: "100vh",
    background: "#080808",
    color: "#ffffff",
    fontFamily:
      "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
    display: "flex",
  },

  /* =========================
     SIDEBAR
  ========================= */

  sidebar: {
    width: 310,
    minWidth: 310,
    height: "100vh",
    background: "#0d0d0d",
    borderRight: "1px solid #242424",
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    left: 0,
    top: 0,
    zIndex: 20,
    overflow: "hidden",
  },

  brand: {
    padding: "28px 24px 22px",
    display: "flex",
    alignItems: "center",
    gap: 14,
    borderBottom: "1px solid #242424",
  },

  logo: {
    width: 46,
    height: 46,
    borderRadius: 14,
    background: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 25,
    fontWeight: 900,
    color: "#000000",
    boxShadow: "0 0 25px rgba(255,255,255,.10)",
  },

  brandName: {
    fontSize: 21,
    fontWeight: 800,
    color: "#ffffff",
  },

  brandSub: {
    color: "#888888",
    fontSize: 13,
    marginTop: 2,
  },

  server: {
    margin: 18,
    padding: 14,
    background: "#171717",
    border: "1px solid #303030",
    borderRadius: 16,
    display: "flex",
    alignItems: "center",
    gap: 12,
  },

  serverIcon: {
    width: 42,
    height: 42,
    borderRadius: 12,
    background: "#ffffff",
    color: "#000000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 900,
  },

  serverSub: {
    display: "block",
    color: "#777777",
    fontSize: 12,
    marginTop: 3,
  },

  search: {
    margin: "0 18px 18px",
    padding: "13px 15px",
    borderRadius: 13,
    border: "1px solid #303030",
    background: "#121212",
    color: "#888888",
    display: "flex",
    gap: 10,
    fontSize: 15,
  },

  navigation: {
    overflowY: "auto",
    padding: "0 12px 130px",
  },

  section: {
    marginBottom: 16,
  },

  sectionTitle: {
    padding: "8px 12px",
    color: "#777777",
    fontSize: 11,
    fontWeight: 800,
    letterSpacing: 1.5,
    display: "flex",
    justifyContent: "space-between",
  },

  navItem: {
    width: "100%",
    border: 0,
    background: "transparent",
    color: "#aaaaaa",
    padding: "11px 12px",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    gap: 12,
    fontSize: 14,
    textAlign: "left",
    cursor: "pointer",
  },

  navActive: {
    background: "#ffffff",
    color: "#000000",
    boxShadow: "inset 3px 0 #ffffff",
  },

  navIcon: {
    width: 22,
    textAlign: "center",
    color: "#999999",
    fontSize: 18,
  },

  premiumSmall: {
    marginLeft: "auto",
    background: "#292929",
    color: "#ffffff",
    padding: "4px 6px",
    borderRadius: 6,
    fontSize: 8,
    fontWeight: 800,
  },

  /* =========================
     BOTTOM SIDEBAR
  ========================= */

  bottom: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 14,
    background: "#0d0d0d",
  },

  premiumBox: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: 13,
    borderRadius: 14,
    border: "1px solid #444444",
    background: "#181818",
    color: "#ffffff",
  },

  starBox: {
    fontSize: 23,
    color: "#ffffff",
  },

  premiumSub: {
    display: "block",
    color: "#777777",
    fontSize: 11,
    marginTop: 3,
  },

  account: {
    marginTop: 10,
    padding: 12,
    background: "#171717",
    borderRadius: 13,
    display: "flex",
    alignItems: "center",
    gap: 10,
  },

  avatar: {
    width: 35,
    height: 35,
    borderRadius: "50%",
    background: "#ffffff",
    color: "#000000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 800,
  },

  /* =========================
     CONTENT
  ========================= */

  content: {
    marginLeft: 310,
    width: "calc(100% - 310px)",
    padding: "40px 48px",
  },

  topbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 35,
  },

  breadcrumb: {
    color: "#777777",
    fontSize: 13,
    marginBottom: 10,
  },

  h1: {
    margin: 0,
    fontSize: 34,
    fontWeight: 800,
    color: "#ffffff",
  },

  description: {
    marginTop: 8,
    color: "#888888",
    fontSize: 14,
  },

  topActions: {
    display: "flex",
    gap: 10,
    alignItems: "center",
  },

  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 12,
    border: "1px solid #303030",
    background: "#151515",
    color: "#aaaaaa",
    fontSize: 20,
    cursor: "pointer",
  },

  profile: {
    width: 44,
    height: 44,
    borderRadius: "50%",
    background: "#ffffff",
    color: "#000000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 800,
  },

  /* =========================
     CARDS
  ========================= */

  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: 16,
    marginBottom: 18,
  },

  card: {
    padding: 20,
    background: "#121212",
    border: "1px solid #292929",
    borderRadius: 17,
    display: "flex",
    alignItems: "center",
    gap: 13,
  },

  cardIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    background: "#252525",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
  },

  cardContent: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
    flex: 1,
  },

  /* =========================
     PANELS
  ========================= */

  grid: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: 18,
    marginBottom: 18,
  },

  panel: {
    background: "#121212",
    border: "1px solid #292929",
    borderRadius: 18,
    padding: 22,
    marginBottom: 18,
  },

  panelHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 22,
  },

  h2: {
    margin: 0,
    fontSize: 18,
    fontWeight: 700,
    color: "#ffffff",
  },

  panelDescription: {
    margin: "6px 0 0",
    color: "#777777",
    fontSize: 13,
  },

  select: {
    background: "#1c1c1c",
    border: "1px solid #363636",
    color: "#aaaaaa",
    padding: "9px 12px",
    borderRadius: 9,
    cursor: "pointer",
  },

  /* =========================
     CHART
  ========================= */

  chart: {
    height: 190,
    display: "flex",
    alignItems: "flex-end",
    gap: 10,
  },

  barContainer: {
    flex: 1,
    height: "100%",
    display: "flex",
    alignItems: "flex-end",
    background: "#1a1a1a",
    borderRadius: 7,
    overflow: "hidden",
  },

  bar: {
    width: "100%",
    background: "#ffffff",
    borderRadius: "7px 7px 0 0",
  },

  /* =========================
     BOT STATUS
  ========================= */

  online: {
    color: "#ffffff",
    fontSize: 11,
    fontWeight: 800,
  },

  status: {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: 10,
    marginBottom: 22,
  },

  statusItem: {
    display: "flex",
    flexDirection: "column",
    gap: 7,
  },

  manageButton: {
    width: "100%",
    padding: 13,
    borderRadius: 11,
    border: 0,
    background: "#ffffff",
    color: "#000000",
    fontWeight: 700,
    cursor: "pointer",
  },

  /* =========================
     QUICK ACTIONS
  ========================= */

  quickGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: 12,
  },

  quickButton: {
    padding: 16,
    background: "#181818",
    border: "1px solid #303030",
    borderRadius: 13,
    color: "#dddddd",
    display: "flex",
    alignItems: "center",
    gap: 10,
    textAlign: "left",
    cursor: "pointer",
  },

  quickIcon: {
    fontSize: 18,
    color: "#ffffff",
  },

  quickArrow: {
    marginLeft: "auto",
    color: "#888888",
  },

  /* =========================
     MOBILE
  ========================= */

  mobileHeader: {
    display: "none",
  },

  menuButton: {
    background: "transparent",
    border: 0,
    color: "white",
    fontSize: 25,
    cursor: "pointer",
  },

  mobileTitle: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
};