import styles from "./Cart.module.scss";
import * as React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setCartItems, setOpenCart } from "../../Store/Slices/MainSlice";
import { Icon } from "@iconify/react";
import { CartItem } from "../CartItem/CartItem";
import { formatPrice } from "../CatalogCard/CatalogCard";

export const Cart: React.FC = () => {
  const { CartOpen, cartItems } = useAppSelector((state) => state.mainSlice);

  const dispatch = useAppDispatch();

  const closeCart = () => {
    dispatch(setOpenCart(false));
  };

  const getCartCount = () => {
    let count = 0;

    cartItems.map((item) => {
      count += item.count;
      return null;
    });

    return count;
  };

  const getTotalCartPrice = () => {
    let total = 0;

    cartItems.map((item) => {
      total += item.count * item.price;
      return null;
    });

    return total;
  };

  React.useLayoutEffect(() => {
    const cartItemsString = localStorage.getItem("cart");

    if (cartItemsString) {
      dispatch(setCartItems([...JSON.parse(cartItemsString)]));
    }
    // eslint-disable-next-line
  }, []);

  const clearCart = () => {
    dispatch(setCartItems([]));
  };

  const [start, setStart] = React.useState(false);

  React.useEffect(() => {
    if (!start) {
      setStart(true);
    } else {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
    // eslint-disable-next-line
  }, [cartItems]);

  return (
    <div className={`${styles.cart} ${CartOpen ? styles.open : ""}`}>
      <span onClick={closeCart} className={styles.closeBg} />
      <div className={styles.content}>
        <button onClick={closeCart} className={styles.closeBtn}>
          <Icon icon={"mingcute:close-line"} color="rgb(233, 144, 41)" width={24} height={24} />
        </button>
        <h2 className={styles.title}>Корзина</h2>
        {cartItems.length > 0 ? (
          <>
            <button onClick={clearCart} className={styles.clearCart}>
              Очистить корзину
            </button>
            <h4 className={styles.cartCount}>Товаров: {getCartCount()}</h4>
            <div className={styles.cartItems}>
              {cartItems.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </div>
            <div className={styles.bottomInfo}>
              <p className={styles.total}>
                Итого: <span>{formatPrice(getTotalCartPrice())} руб</span>
              </p>
              <button className={styles.offerBtn}>Оформить</button>
            </div>
          </>
        ) : (
          <div className={styles.empty}>Корзина пуста</div>
        )}
      </div>
    </div>
  );
};
