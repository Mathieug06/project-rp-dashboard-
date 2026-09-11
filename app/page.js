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

const quickActions = [
  ["□", "Créer un ticket"],
  ["♔", "Créer un giveaway"],
  ["▣", "Créer un embed"],
  ["♙", "Gérer les rôles"],
  ["◇", "Configurer AutoMod"],
  ["≡", "Voir les logs"],
];

export default function Home() {
  const [active, setActive] = useState("Vue d'ensemble");
  const [mobileOpen, setMobileOpen] = useState(false);

  function selectPage(name) {
    setActive(name);
    setMobileOpen(false);
  }

  return (
    <>
      <main className="app">
        {/* MOBILE HEADER */}
        <header className="mobileHeader">
          <button
            className="menuButton"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Ouvrir le menu"
          >
            ☰
          </button>

          <div className="mobileTitle">
            <div className="logo smallLogo">P</div>

            <div>
              <strong>Project RP</strong>
              <span>GTA RP</span>
            </div>
          </div>

          <div className="mobileProfile">M</div>
        </header>

        {/* OVERLAY MOBILE */}
        {mobileOpen && (
          <div
            className="mobileOverlay"
            onClick={() => setMobileOpen(false)}
          />
        )}

        {/* SIDEBAR */}
        <aside className={`sidebar ${mobileOpen ? "sidebarOpen" : ""}`}>
          <div className="brand">
            <div className="logo">P</div>

            <div>
              <div className="brandName">Project RP</div>
              <div className="brandSub">GTA RP</div>
            </div>
          </div>

          <div className="server">
            <div className="serverIcon">P</div>

            <div className="serverText">
              <strong>Project RP - GTA RP</strong>
              <span>Serveur Discord</span>
            </div>

            <span className="arrow">⌄</span>
          </div>

          <div className="search">
            <span>⌕</span>
            <span>Rechercher...</span>
          </div>

          <div className="navigation">
            {sections.map((section) => (
              <div className="section" key={section.title}>
                <div className="sectionTitle">
                  <span>{section.title}</span>
                  <span>⌄</span>
                </div>

                {section.items.map(([icon, name]) => (
                  <button
                    key={name}
                    className={`navItem ${
                      active === name ? "navActive" : ""
                    }`}
                    onClick={() => selectPage(name)}
                  >
                    <span className="navIcon">{icon}</span>
                    <span>{name}</span>
                  </button>
                ))}
              </div>
            ))}
          </div>

          <div className="bottom">
            <button
              className="premiumBox"
              onClick={() => selectPage("Premium")}
            >
              <div className="starBox">☆</div>

              <div className="premiumText">
                <strong>Passer au Premium</strong>
                <span>Débloque toutes les limites</span>
              </div>

              <span>›</span>
            </button>

            <div className="account">
              <div className="avatar">M</div>

              <div className="accountName">
                <strong>mathieu50</strong>
                <span>Administrateur</span>
              </div>

              <span className="logout">↪</span>
            </div>
          </div>
        </aside>

        {/* CONTENT */}
        <section className="content">
          <header className="topbar">
            <div className="pageTitle">
              <div className="breadcrumb">
                Project RP / Dashboard
              </div>

              <h1>{active}</h1>

              <p>
                Gérez votre serveur Discord Project RP.
              </p>
            </div>

            <div className="topActions">
              <button
                className="iconButton"
                onClick={() => alert("Recherche")}
              >
                ⌕
              </button>

              <button
                className="iconButton"
                onClick={() => alert("Notifications")}
              >
                ◔
              </button>

              <div className="profile">M</div>
            </div>
          </header>

          {/* STAT CARDS */}
          <div className="cards">
            <div className="card">
              <div className="cardIcon">♙</div>

              <div className="cardInfo">
                <span>Membres</span>
                <strong>1 248</strong>
              </div>

              <small>+12%</small>
            </div>

            <div className="card">
              <div className="cardIcon">□</div>

              <div className="cardInfo">
                <span>Tickets</span>
                <strong>24</strong>
              </div>

              <small>8 ouverts</small>
            </div>

            <div className="card">
              <div className="cardIcon">ϟ</div>

              <div className="cardInfo">
                <span>Niveau moyen</span>
                <strong>18</strong>
              </div>

              <small>+3 cette semaine</small>
            </div>

            <div className="card">
              <div className="cardIcon">●</div>

              <div className="cardInfo">
                <span>En ligne</span>
                <strong>186</strong>
              </div>

              <small>actuellement</small>
            </div>
          </div>

          {/* MAIN GRID */}
          <div className="mainGrid">
            {/* SERVER ACTIVITY */}
            <div className="panel activityPanel">
              <div className="panelHeader">
                <div>
                  <h2>Activité du serveur</h2>
                  <p>Vue générale des dernières activités</p>
                </div>

                <button className="selectButton">
                  7 derniers jours ⌄
                </button>
              </div>

              <div className="chart">
                {[42, 58, 48, 75, 62, 88, 70, 96, 78, 91, 68, 84].map(
                  (height, i) => (
                    <div className="barContainer" key={i}>
                      <div
                        className="bar"
                        style={{ height: `${height}%` }}
                      />
                    </div>
                  )
                )}
              </div>
            </div>

            {/* BOT */}
            <div className="panel botPanel">
              <div className="panelHeader">
                <div>
                  <h2>État du bot</h2>
                  <p>Project RP Bot</p>
                </div>

                <span className="online">
                  ● EN LIGNE
                </span>
              </div>

              <div className="status">
                <div className="statusItem">
                  <span>Uptime</span>
                  <strong>99,98%</strong>
                </div>

                <div className="statusItem">
                  <span>Latence</span>
                  <strong>42 ms</strong>
                </div>

                <div className="statusItem">
                  <span>Serveurs</span>
                  <strong>1</strong>
                </div>
              </div>

              <button
                className="manageButton"
                onClick={() => selectPage("Gestion du bot")}
              >
                Gérer le bot →
              </button>
            </div>
          </div>

          {/* QUICK ACTIONS */}
          <div className="panel">
            <div className="panelHeader">
              <div>
                <h2>Actions rapides</h2>
                <p>
                  Accédez rapidement aux fonctions principales.
                </p>
              </div>
            </div>

            <div className="quickGrid">
              {quickActions.map(([icon, title]) => (
                <button
                  key={title}
                  className="quickButton"
                  onClick={() => selectPage(title)}
                >
                  <span className="quickIcon">{icon}</span>

                  <strong>{title}</strong>

                  <small>→</small>
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* CSS */}
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html,
        body {
          margin: 0;
          padding: 0;
          background: #000;
          color: #fff;
          font-family:
            Inter,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
        }

        body {
          overflow-x: hidden;
        }

        button {
          font-family: inherit;
        }

        .app {
          min-height: 100vh;
          background: #000;
          color: #fff;
          display: flex;
        }

        /* SIDEBAR */

        .sidebar {
          width: 310px;
          min-width: 310px;
          height: 100vh;
          position: fixed;
          left: 0;
          top: 0;
          z-index: 50;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          background: #080808;
          border-right: 1px solid #252525;
        }

        .brand {
          padding: 25px 22px;
          display: flex;
          align-items: center;
          gap: 13px;
          border-bottom: 1px solid #242424;
        }

        .logo {
          width: 46px;
          height: 46px;
          border-radius: 13px;
          background: #fff;
          color: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          font-weight: 900;
          flex-shrink: 0;
        }

        .brandName {
          font-size: 20px;
          font-weight: 800;
        }

        .brandSub {
          color: #777;
          font-size: 12px;
          margin-top: 3px;
        }

        .server {
          margin: 17px;
          padding: 13px;
          border-radius: 15px;
          background: #151515;
          border: 1px solid #303030;
          display: flex;
          align-items: center;
          gap: 11px;
        }

        .serverIcon {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: #fff;
          color: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          flex-shrink: 0;
        }

        .serverText {
          min-width: 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .serverText strong {
          font-size: 13px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .serverText span {
          color: #777;
          font-size: 11px;
        }

        .arrow {
          color: #999;
        }

        .search {
          margin: 0 17px 17px;
          padding: 12px 14px;
          border-radius: 12px;
          border: 1px solid #2c2c2c;
          color: #777;
          display: flex;
          gap: 9px;
          font-size: 14px;
        }

        .navigation {
          overflow-y: auto;
          padding: 0 11px 150px;
        }

        .section {
          margin-bottom: 15px;
        }

        .sectionTitle {
          padding: 8px 12px;
          color: #666;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.5px;
          display: flex;
          justify-content: space-between;
        }

        .navItem {
          width: 100%;
          border: 0;
          background: transparent;
          color: #aaa;
          padding: 10px 12px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          gap: 11px;
          font-size: 13px;
          text-align: left;
          cursor: pointer;
          transition: 0.15s;
        }

        .navItem:hover {
          background: #171717;
          color: #fff;
        }

        .navActive {
          background: #fff !important;
          color: #000 !important;
          box-shadow: inset 3px 0 #000;
        }

        .navIcon {
          width: 22px;
          text-align: center;
          color: #888;
          font-size: 17px;
        }

        .navActive .navIcon {
          color: #000;
        }

        .bottom {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 13px;
          background: #080808;
          border-top: 1px solid #202020;
        }

        .premiumBox {
          width: 100%;
          border: 1px solid #555;
          background: #151515;
          color: #fff;
          border-radius: 13px;
          padding: 12px;
          display: flex;
          align-items: center;
          gap: 9px;
          text-align: left;
          cursor: pointer;
        }

        .starBox {
          font-size: 22px;
        }

        .premiumText {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .premiumText strong {
          font-size: 12px;
        }

        .premiumText span {
          color: #777;
          font-size: 9px;
        }

        .account {
          margin-top: 9px;
          padding: 10px;
          background: #151515;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 9px;
        }

        .avatar,
        .profile,
        .mobileProfile {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #fff;
          color: #000;
          font-weight: 800;
        }

        .avatar {
          width: 34px;
          height: 34px;
          font-size: 13px;
        }

        .accountName {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .accountName strong {
          font-size: 12px;
        }

        .accountName span {
          color: #666;
          font-size: 9px;
        }

        .logout {
          margin-left: auto;
          color: #aaa;
        }

        /* CONTENT */

        .content {
          margin-left: 310px;
          width: calc(100% - 310px);
          min-width: 0;
          padding: 40px 48px;
        }

        .topbar {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 32px;
          gap: 20px;
        }

        .breadcrumb {
          color: #666;
          font-size: 12px;
          margin-bottom: 9px;
        }

        h1 {
          margin: 0;
          font-size: 34px;
          line-height: 1.15;
        }

        .pageTitle p {
          color: #777;
          margin: 9px 0 0;
          font-size: 14px;
        }

        .topActions {
          display: flex;
          gap: 9px;
          align-items: center;
        }

        .iconButton {
          width: 43px;
          height: 43px;
          border-radius: 11px;
          border: 1px solid #333;
          background: #111;
          color: #aaa;
          font-size: 19px;
          cursor: pointer;
        }

        .iconButton:hover {
          background: #fff;
          color: #000;
        }

        .profile {
          width: 43px;
          height: 43px;
        }

        /* CARDS */

        .cards {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 15px;
          margin-bottom: 17px;
        }

        .card {
          min-width: 0;
          padding: 18px;
          background: #101010;
          border: 1px solid #2c2c2c;
          border-radius: 16px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .cardIcon {
          width: 43px;
          height: 43px;
          border-radius: 11px;
          background: #202020;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 19px;
          flex-shrink: 0;
        }

        .cardInfo {
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 4px;
          flex: 1;
        }

        .cardInfo span {
          color: #777;
          font-size: 12px;
        }

        .cardInfo strong {
          font-size: 19px;
        }

        .card small {
          color: #aaa;
          font-size: 10px;
          white-space: nowrap;
        }

        /* PANELS */

        .mainGrid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 17px;
        }

        .panel {
          background: #101010;
          border: 1px solid #2b2b2b;
          border-radius: 17px;
          padding: 21px;
          margin-bottom: 17px;
          min-width: 0;
        }

        .panelHeader {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 15px;
          margin-bottom: 22px;
        }

        .panel h2 {
          margin: 0;
          font-size: 18px;
        }

        .panel p {
          margin: 6px 0 0;
          color: #666;
          font-size: 12px;
        }

        .selectButton {
          border: 1px solid #333;
          background: #171717;
          color: #aaa;
          border-radius: 9px;
          padding: 9px 11px;
          white-space: nowrap;
          cursor: pointer;
        }

        .selectButton:hover {
          background: #fff;
          color: #000;
        }

        /* CHART */

        .chart {
          height: 190px;
          display: flex;
          align-items: flex-end;
          gap: 9px;
        }

        .barContainer {
          flex: 1;
          height: 100%;
          min-width: 5px;
          background: #171717;
          border-radius: 7px;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
        }

        .bar {
          width: 100%;
          background: #fff;
          border-radius: 7px 7px 0 0;
        }

        /* BOT */

        .online {
          color: #fff;
          font-size: 10px;
          font-weight: 800;
          white-space: nowrap;
        }

        .status {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          margin-bottom: 21px;
        }

        .statusItem {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .statusItem span {
          color: #666;
          font-size: 10px;
        }

        .statusItem strong {
          font-size: 15px;
        }

        .manageButton {
          width: 100%;
          padding: 12px;
          border: 0;
          border-radius: 10px;
          background: #fff;
          color: #000;
          font-weight: 800;
          cursor: pointer;
        }

        .manageButton:hover {
          background: #ccc;
        }

        /* QUICK ACTIONS */

        .quickGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 11px;
        }

        .quickButton {
          min-width: 0;
          padding: 15px;
          background: #151515;
          border: 1px solid #303030;
          border-radius: 12px;
          color: #ddd;
          display: flex;
          align-items: center;
          gap: 9px;
          text-align: left;
          cursor: pointer;
        }

        .quickButton:hover {
          background: #fff;
          color: #000;
        }

        .quickIcon {
          flex-shrink: 0;
        }

        .quickButton strong {
          font-size: 12px;
          flex: 1;
        }

        .quickButton small {
          color: #888;
        }

        /* MOBILE */

        .mobileHeader {
          display: none;
        }

        .mobileOverlay {
          display: none;
        }

        @media (max-width: 1100px) {
          .content {
            padding: 30px;
          }

          .cards {
            grid-template-columns: repeat(2, 1fr);
          }

          .mainGrid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 700px) {
          .app {
            display: block;
            min-height: 100vh;
          }

          .mobileHeader {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            height: 67px;
            z-index: 40;
            background: #080808;
            border-bottom: 1px solid #262626;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 14px;
          }

          .menuButton {
            width: 42px;
            height: 42px;
            border-radius: 11px;
            border: 1px solid #333;
            background: #151515;
            color: #fff;
            font-size: 22px;
            cursor: pointer;
          }

          .mobileTitle {
            display: flex;
            align-items: center;
            gap: 9px;
          }

          .mobileTitle strong {
            display: block;
            font-size: 14px;
          }

          .mobileTitle span {
            display: block;
            color: #666;
            font-size: 9px;
            margin-top: 2px;
          }

          .smallLogo {
            width: 36px;
            height: 36px;
            border-radius: 10px;
            font-size: 18px;
          }

          .mobileProfile {
            width: 38px;
            height: 38px;
            font-size: 13px;
          }

          .sidebar {
            width: min(310px, 88vw);
            min-width: 0;
            transform: translateX(-105%);
            transition: transform 0.25s ease;
            box-shadow: 15px 0 40px rgba(0, 0, 0, 0.6);
          }

          .sidebarOpen {
            transform: translateX(0);
          }

          .mobileOverlay {
            display: block;
            position: fixed;
            inset: 0;
            z-index: 45;
            background: rgba(0, 0, 0, 0.65);
          }

          .content {
            width: 100%;
            margin-left: 0;
            padding: 88px 14px 25px;
          }

          .topbar {
            margin-bottom: 22px;
          }

          .topActions {
            display: none;
          }

          .breadcrumb {
            font-size: 10px;
          }

          h1 {
            font-size: 27px;
          }

          .pageTitle p {
            font-size: 12px;
            line-height: 1.5;
          }

          .cards {
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .card {
            padding: 15px;
          }

          .cardIcon {
            width: 40px;
            height: 40px;
          }

          .cardInfo strong {
            font-size: 17px;
          }

          .mainGrid {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .panel {
            padding: 16px;
            border-radius: 14px;
            margin-bottom: 12px;
          }

          .panelHeader {
            flex-direction: column;
            gap: 12px;
            margin-bottom: 17px;
          }

          .panel h2 {
            font-size: 17px;
          }

          .selectButton {
            width: 100%;
          }

          .chart {
            height: 150px;
            gap: 5px;
          }

          .status {
            gap: 12px;
          }

          .statusItem strong {
            font-size: 14px;
          }

          .quickGrid {
            grid-template-columns: 1fr 1fr;
            gap: 8px;
          }

          .quickButton {
            padding: 13px 10px;
            min-height: 58px;
          }

          .quickButton strong {
            font-size: 10px;
          }
        }

        @media (max-width: 400px) {
          .content {
            padding-left: 10px;
            padding-right: 10px;
          }

          .quickGrid {
            grid-template-columns: 1fr;
          }

          .card {
            padding: 13px;
          }

          h1 {
            font-size: 24px;
          }
        }
      `}</style>
    </>
  );
}