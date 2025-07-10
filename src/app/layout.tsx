import "../styles/globals.css";
import Navbar from "./features/navbar";

// Next.js 13+ supports this for app directory (optional, for static metadata)
export const metadata = {
  title: "Cashback Infra",
  description: "An ERC-4337 toolkit for RWA and DePIN enhancing gasless transactions",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/favicon.ico" />
        <title>Cashback Infra</title>
        <meta
          name="description"
          content="An ERC-4337 toolkit for RWA and DePIN enhancing gasless transactions"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/assets/logo192.png" />

      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
