import * as React from "react";
import styles from "./CatalogTabs.module.scss";
import { NavLink } from "react-router-dom";

export const CatalogTabs: React.FC = () => {
  const tabs: {
    name: string;
    link: string;
  }[] = [
    {
      name: "Еда",
      link: "food",
    },
    {
      name: "Одежда",
      link: "clothes",
    },
    {
      name: "Электроника",
      link: "electronics",
    },
  ];

  return (
    <div className={styles.tabs}>
      {tabs.map(({ link, name }, index) => (
        <NavLink className={({ isActive }) => `${styles.tabLink} ${isActive ? styles.active : ""}`} key={index} to={`/catalog/${link}`}>
          {name}
        </NavLink>
      ))}
    </div>
  );
};
