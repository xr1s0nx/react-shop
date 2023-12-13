import { useAppDispatch, useAppSelector } from "../../hooks";
import * as React from "react";
import loader from "../../assets/images/loader.svg";
import { setLoading } from "../../Store/Slices/MainSlice";
import { Cart } from "../Cart/Cart";
import { ImagePreview } from "../ImagePreview/ImagePreview";

interface TLayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: TLayoutProps) => {
  const { Loading } = useAppSelector((state) => state.mainSlice);

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setLoading(false));
      clearTimeout(timer);
    }, 1000);
    // eslint-disable-next-line
  }, []);

  return Loading ? (
    <div className="loading-screen">
      <img src={loader} alt="loader" />
    </div>
  ) : (
    <>
      <ImagePreview />
      <Cart />
      <div className="layout">{children}</div>
    </>
  );
};
