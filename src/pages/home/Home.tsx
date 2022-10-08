import React from "react";
import Container from "../../components/container/Container";
import PTag from "../../components/UI/pTag/PTag";

import bgBig from "../../assets/images/bg-big.png";
import bgSmall from "../../assets/images/bg-small.png";

import styles from "./Home.module.scss";

function Home(): JSX.Element {
  console.log(styles);
  return (
    <section className={styles.top}>
      <div className={styles.bg}>
        <picture>
          <source media="(max-width: 480px)" srcSet={bgSmall} />
          <img src={bgBig} alt="bg" />
        </picture>
      </div>
      <Container>
        <div className={styles.wrapper}>
          <h1>
            Грант и контрактное обучение<br></br> в зарубежных вузах
          </h1>
          <PTag>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip
          </PTag>
        </div>
      </Container>
    </section>
  );
}

export default Home;
