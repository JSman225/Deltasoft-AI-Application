import "./globals.css";

export const metadata = {
  title: "Dashboard - Deltasoft AI",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html class="h-full bg-gray-100">
      <body class="h-full bg-gray-100">{children}</body>
    </html>
  );
}