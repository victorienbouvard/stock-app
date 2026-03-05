export const metadata = {
  title: "Stock App",
  description: "Gestion de stock",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif", padding: 24 }}>
        {children}
      </body>
    </html>
  );
}
