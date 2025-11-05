import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sessh Documentation",
  description: "Documentation for Sessh - SSH Session Manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

