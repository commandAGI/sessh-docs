import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sessh Documentation",
  description: "Documentation for Sessh - SSH Session Manager",
};

const navbar = (
  <Navbar
    logo={<span>Sessh Documentation</span>}
  />
);

const footer = <Footer>Sessh Documentation © 2025</Footer>;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
    >
      <Head>
        {/* Additional head tags can go here */}
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/CommandAGI/sessh-docs"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
