import styles from "./MainCard.module.scss";
import { TMainCard } from "../../Store/types";
import { NavLink } from "react-router-dom";

export const MainCard = ({ title, description, link, image }: TMainCard) => {
  return (
    <NavLink to={link} className={styles.card}>
      <img src={image} className={styles.bgImage} alt="bg" />
      <div className={styles.info}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </NavLink>
  );
};
