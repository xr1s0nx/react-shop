import * as React from "react";
import { TProduct } from "../../Store/types";
import styles from "./CatalogCard.module.scss";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { addToCart, removeFromCart, setPreview } from "../../Store/Slices/MainSlice";

export const formatPrice = (price: number) => new Intl.NumberFormat("ru-RU").format(price);

export const CatalogCard = ({ title, image, price, id }: TProduct) => {
  const dispatch = useAppDispatch();

  const imageClick = () => {
    dispatch(setPreview(image));
  };

  const { cartItems } = useAppSelector((state) => state.mainSlice);

  const addToCartClick = () => {
    dispatch(
      addToCart({
        title,
        image,
        id,
        price,
        count: 1,
      })
    );
  };

  const removeFromCartClick = () => {
    dispatch(
      removeFromCart({
        title,
        image,
        id,
        price,
        count: 1,
      })
    );
  };

  return (
    <div className={styles.card}>
      <img onClick={imageClick} src={image} alt={title.substring(0, 5)} className={styles.cardImage} />
      <div className={styles.info}>
        <p className={styles.title}>{title}</p>
        {cartItems.find((item) => item.id === id) ? (
          <button onClick={removeFromCartClick} className={styles.added}>
            Удалить
          </button>
        ) : (
          <button className={styles.addCartBtn} onClick={addToCartClick}>
            {formatPrice(price)} руб
          </button>
        )}
      </div>
    </div>
  );
};
