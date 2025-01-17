import * as React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Head from "@docusaurus/Head";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  React.useEffect(() => {
    window.location.href = "/docs/getting-started";
  });

  return (
    <Layout title={siteConfig.title} description="Documentation provided for SnailyCADv4">
      <Head>
        <link rel="icon" href="https://docs.snailycad.org/icons/logo.png" />
        <script
          async
          defer
          data-website-id="5d735bf8-9086-43df-9da8-62c2e49401d5"
          src="https://cool-kid.caspertheghost.me/umami.js"
        />
      </Head>
    </Layout>
  );
}
