import * as React from "react";
import styles from "./HomePage.module.scss";
import { Container } from "../../Components/Container/Container";
import { useAppSelector } from "../../hooks";
import { MainCard } from "../../Components/MainCard/MainCard";

export const HomePage: React.FC = () => {
  const { HomePageCards } = useAppSelector((state) => state.mainSlice);

  return (
    <section className={styles.content}>
      <Container>
        <h1 className={styles.title}>Категории</h1>
        <div className={styles.cards}>
          {HomePageCards.map((card) => (
            <MainCard key={card.id} {...card} />
          ))}
        </div>
      </Container>
    </section>
  );
};
