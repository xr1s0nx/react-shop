import { FC, useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { Container } from "../Container/Container";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setOpenCart } from "../../Store/Slices/MainSlice";

const Header: FC = () => {
  const dispatch = useAppDispatch();

  const [cartCount, setCartCount] = useState(0);

  const { cartItems } = useAppSelector((state) => state.mainSlice);

  const openCart = () => {
    dispatch(setOpenCart(true));
  };

  const getCartCount = () => {
    let count = 0;

    cartItems.map((item) => {
      count += item.count;
      return null;
    });

    setCartCount(count);
  };

  useEffect(() => {
    getCartCount();
    // eslint-disable-next-line
  }, [cartItems]);

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <NavLink to={"/"} className={styles.logo}>
            <span>Sh</span>op
          </NavLink>
          <button onClick={openCart} className={styles.cart}>
            <Icon icon={"oi:cart"} color="rgb(233, 144, 41)" width={24} height={24} />
            {cartItems.length > 0 && <p className={styles.cartLength}>{cartCount > 99 ? "99+" : cartCount}</p>}
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
