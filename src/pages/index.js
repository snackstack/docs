import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: "Easy to use",
    imageUrl: "img/easy-to-use.svg",
    description: <>Extremely simple API, but enough complexity to get the job done</>,
  },
  {
    title: "Fully typed",
    imageUrl: "img/fully-typed.svg",
    description: <>Written entirely in Typescript to make your life easier</>,
  },
  {
    title: "Extensible",
    imageUrl: "img/extensible.svg",
    description: <>Almost everything can be configured or swapped out by you</>,
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout description="Description will go into a meta tag in <head />">
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx("button button--outline button--secondary button--lg", styles.getStarted)}
              to={useBaseUrl("docs/")}
            >
              Get Started
            </Link>

            <Link
              className={clsx("button button--outline button--secondary button--lg", styles.examples)}
              to={useBaseUrl("examples/")}
            >
              Examples
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
