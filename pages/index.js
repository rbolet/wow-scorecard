import { Container } from "@material-ui/core";
import Head from "next/head";
import GradeLevels from "../src/components/GradeLevelsAccordian";

export default function Home() {
  return (
    <>
      <Head>
        <title>WOW Scorecard</title>
        <meta name="description" content="Woods on Wednesday - Wooddale Church Eden Prairie, MN" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container>
          <GradeLevels />
        </Container>
      </main>

      <footer></footer>
    </>
  );
}
