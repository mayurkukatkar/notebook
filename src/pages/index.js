// src/pages/index.js
import React from "react";
import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

function Home() {
  return (
    <>
      <Head>
        <title>Mayur's Notebook - My study notes</title>
        <meta name="description" content="Mayur's Notebook - concise study notes and tutorials." />
      </Head>

      <a className="skip-link" href="#main-content">Skip to content</a>

      <main id="main-content" className="u-container">
        <section className="hero" role="region" aria-label="Introduction">
          <img
            src={useBaseUrl("img/logo.svg")}
            alt="Mayur's Notebook logo"
            style={{ width: 64, height: 64 }}
          />
          <h1>Mayur's Notebook</h1>
          <p className="lead">My study notes</p>

          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <Link className="btn-cta" to={useBaseUrl("getting-started")}> 
              Start Learning
            </Link>
            <Link
              className="btn"
              to="https://github.com/<GITHUB_USER>/<REPO_NAME>"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                border: "1px solid var(--ifm-color-primary)",
                padding: "0.5rem 0.9rem",
                borderRadius: 8,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "transparent",
                color: "var(--ifm-color-primary)",
                textDecoration: "none",
              }}
            >
              View on GitHub
            </Link>
          </div>
        </section>

        <section style={{ marginTop: 32 }}>
          <h2>Quick Links</h2>
          <p className="muted">Jump into docs and tutorials.</p>
          <ul>
            <li><Link to={useBaseUrl("getting-started")}>Getting Started</Link></li>
            <li><Link to={useBaseUrl("tutorials/intro")}>Tutorials</Link></li>
            <li><Link to={useBaseUrl("examples")}>Examples</Link> (placeholder)</li>
          </ul>
        </section>
      </main>
    </>
  );
}

export default Home;
