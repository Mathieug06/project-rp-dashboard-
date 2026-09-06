export const metadata = {
  title: "Project RP",
  description: "Dashboard du bot Discord Project RP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
