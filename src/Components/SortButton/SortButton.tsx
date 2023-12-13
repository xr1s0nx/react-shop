import * as React from "react";
import styles from "./SortButton.module.scss";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { Icon } from "@iconify/react";
import { changeSortType } from "../../Store/Slices/MainSlice";

export const SortButton: React.FC = () => {
  const sortButtons: {
    text: string;
    sortType: string;
  }[] = [
    {
      text: "Название",
      sortType: "title",
    },
    {
      text: "Цена",
      sortType: "price",
    },
  ];

  const { sortType } = useAppSelector((state) => state.mainSlice);

  const dispatch = useAppDispatch();

  const [open, setOpen] = React.useState(false);

  const sortClick = (sort: string) => {
    dispatch(changeSortType(sort));
    setOpen(false);
  };

  return (
    <div className={styles.sort}>
      <p className={styles.title}>Сортировка: </p>
      <button onClick={() => setOpen(!open)} className={`${styles.sortBtn} ${open ? styles.open : ""}`}>
        {sortButtons.find((item) => item.sortType === sortType)?.text}
        <Icon icon={"ep:arrow-up-bold"} color="rgb(233, 144, 41)" width={12} height={12} />
      </button>
      {open && (
        <>
          <span onClick={() => setOpen(false)} className={styles.bgClose} />
          <div className={styles.content}>
            {sortButtons.map((item) => (
              <button onClick={() => sortClick(item.sortType)} key={item.sortType} className={item.sortType === sortType ? styles.active : ""}>
                {item.text}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
