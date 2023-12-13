import * as React from "react";
import styles from "./CatalogPage.module.scss";
import { Container } from "../../Components/Container/Container";
import { useParams } from "react-router-dom";
import { CatalogTabs } from "../../Components/CatalogTabs/CatalogTabs";
import { useAppSelector } from "../../hooks";
import { TProduct } from "../../Store/types";
import { CatalogCard } from "../../Components/CatalogCard/CatalogCard";
import { SortButton } from "../../Components/SortButton/SortButton";
import sortBy from "lodash/sortBy";

export const CatalogPage: React.FC = () => {
  const PAGE_SIZE = 8;

  const params = useParams();

  const { products, sortType } = useAppSelector((state) => state.mainSlice);

  const titleIndex = params.type || "";

  const [currentPage, setCurrentPage] = React.useState(1);

  React.useEffect(() => {
    setCurrentPage(1);
  }, [params]);

  const catalogTypes = {
    food: "Еда",
    clothes: "Одежда",
    electronics: "Электроника",
  };

  return (
    <section className={styles.catalogPage}>
      <Container>
        <CatalogTabs />
        <div className={styles.top}>
          {/* @ts-ignore */}
          <h1 className={styles.title}>{catalogTypes[titleIndex]}</h1>
          <SortButton />
        </div>
        <div className={styles.content}>
          {
            // @ts-ignore
            sortBy(products[titleIndex], sortType)
              .filter((item, index) => index < PAGE_SIZE * currentPage)
              .map((item: TProduct) => (
                <CatalogCard key={item.id} {...item} />
              ))
          }
        </div>
        {
          // @ts-ignore
          sortBy(products[titleIndex], sortType).length > PAGE_SIZE * currentPage && (
            <button className={styles.more} onClick={() => setCurrentPage(currentPage + 1)}>
              Загрузить еще
            </button>
          )
        }
      </Container>
    </section>
  );
};
