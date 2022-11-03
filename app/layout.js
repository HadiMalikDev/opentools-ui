import "../styles/globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body className="font-systemui overflow-x-hidden">{children}</body>
    </html>
  );
}
