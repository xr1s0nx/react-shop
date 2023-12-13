import * as React from "react";
import styles from "./CartItem.module.scss";
import { TCartItem } from "../../Store/types";
import { useAppDispatch } from "../../hooks";
import { decreaseCartItemCount, increaseCartItemCount } from "../../Store/Slices/MainSlice";
import { formatPrice } from "../CatalogCard/CatalogCard";

export const CartItem = (item: TCartItem) => {
  const dispatch = useAppDispatch();

  const { title, price, count, image } = item;

  const decreaseCount = () => {
    dispatch(decreaseCartItemCount(item));
  };

  const increaseCount = () => {
    dispatch(increaseCartItemCount(item));
  };

  return (
    <div className={styles.cartItem}>
      <img src={image} alt={title} />
      <div className={styles.info}>
        <p className={styles.title}>{title}</p>
        <p className={styles.price}>{formatPrice(price)} руб</p>
        <div className={styles.counter}>
          <button onClick={decreaseCount}>-</button>
          <p className={styles.count}>{count}</p>
          <button onClick={increaseCount}>+</button>
        </div>
      </div>
    </div>
  );
};
