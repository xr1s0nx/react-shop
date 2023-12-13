import * as React from "react";
import styles from "./ImagePreview.module.scss";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { Icon } from "@iconify/react";
import { setPreview } from "../../Store/Slices/MainSlice";

export const ImagePreview: React.FC = () => {
  const { imagePreview } = useAppSelector((state) => state.mainSlice);

  const dispatch = useAppDispatch();

  const closePreview = () => {
    dispatch(setPreview(null));
  };

  return (
    <div className={`${styles.modal} ${imagePreview ? styles.active : ""}`}>
      <span onClick={closePreview} className={styles.closeBg} />
      <div className={styles.content}>
        <button onClick={closePreview} className={styles.closeBtn}>
          <Icon icon={"mingcute:close-line"} color="rgb(233, 144, 41)" width={24} height={24} />
        </button>
        <img className={styles.image} src={imagePreview || ""} alt="preview" />
      </div>
    </div>
  );
};
