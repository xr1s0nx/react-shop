import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TCartItem, TMainCard, TProduct } from "../types";
import foodImg from "../../assets/images/food-category.jpg";
import clothesImg from "../../assets/images/clothes-category.jpg";
import electronicsImg from "../../assets/images/electronics-category.png";

export interface MainState {
  HomePageCards: TMainCard[];
  Loading: boolean;
  CartOpen: boolean;
  products: {
    food: TProduct[] | [];
    clothes: TProduct[] | [];
    electronics: TProduct[] | [];
  };
  imagePreview: string | null;
  sortType: string;
  cartItems: TCartItem[] | [];
}

const initialState: MainState = {
  HomePageCards: [
    {
      id: 0,
      title: "Еда",
      description: "Широкий ассортимент качественных продуктов питания, предназначенных для удовлетворения разнообразных вкусовых предпочтений и диетических потребностей покупателей.",
      link: "/catalog/food",
      image: foodImg,
    },
    {
      id: 1,
      title: "Одежда",
      description: "Разнообразный ассортимент модных и стильных вещей, подходящих для любого случая и сезона.",
      link: "/catalog/clothes",
      image: clothesImg,
    },
    {
      id: 2,
      title: "Электроника",
      description: "Множество товаров, начиная от бытовой техники и заканчивая мобильными устройствами и аксессуарами.",
      link: "/catalog/electronics",
      image: electronicsImg,
    },
  ],
  Loading: true,
  CartOpen: false,
  products: {
    food: [
      {
        id: 0,
        title: "Напиток энергетический Adrenaline Rush",
        image: "https://avatars.mds.yandex.net/get-eda/3593277/87a903d1be0ee476a75c3da655887151/400x400nocrop",
        price: 120,
      },
      {
        id: 1,
        title: "Напиток сильногазированный Добрый Cola, 1.5л",
        image: "https://avatars.mds.yandex.net/get-eda/3401132/e2274188162a84b5e3454304043fc8bd/400x400nocrop",
        price: 110,
      },
      {
        id: 2,
        title: "Бананы фасованные",
        image: "https://avatars.mds.yandex.net/get-eda/3502728/acc0fb5aab43e5394d2cfbe159d2593a/400x400nocrop",
        price: 135,
      },
      {
        id: 3,
        title: "Драже M&M's с арахисом и молочным шоколадом",
        image: "https://avatars.mds.yandex.net/get-eda/3595381/335bbe2ad84b311b8ce0e149f17dec84/400x400nocrop",
        price: 120,
      },
      {
        id: 4,
        title: "Напиток энергетический Adrenaline Rush",
        image: "https://avatars.mds.yandex.net/get-eda/3593277/87a903d1be0ee476a75c3da655887151/400x400nocrop",
        price: 120,
      },
      {
        id: 5,
        title: "Напиток сильногазированный Добрый Cola, 1.5л",
        image: "https://avatars.mds.yandex.net/get-eda/3401132/e2274188162a84b5e3454304043fc8bd/400x400nocrop",
        price: 110,
      },
      {
        id: 6,
        title: "Бананы фасованные",
        image: "https://avatars.mds.yandex.net/get-eda/3502728/acc0fb5aab43e5394d2cfbe159d2593a/400x400nocrop",
        price: 135,
      },
      {
        id: 7,
        title: "Драже M&M's с арахисом и молочным шоколадом",
        image: "https://avatars.mds.yandex.net/get-eda/3595381/335bbe2ad84b311b8ce0e149f17dec84/400x400nocrop",
        price: 120,
      },
      {
        id: 8,
        title: "Напиток энергетический Adrenaline Rush",
        image: "https://avatars.mds.yandex.net/get-eda/3593277/87a903d1be0ee476a75c3da655887151/400x400nocrop",
        price: 120,
      },
      {
        id: 9,
        title: "Напиток сильногазированный Добрый Cola, 1.5л",
        image: "https://avatars.mds.yandex.net/get-eda/3401132/e2274188162a84b5e3454304043fc8bd/400x400nocrop",
        price: 110,
      },
      {
        id: 10,
        title: "Бананы фасованные",
        image: "https://avatars.mds.yandex.net/get-eda/3502728/acc0fb5aab43e5394d2cfbe159d2593a/400x400nocrop",
        price: 135,
      },
      {
        id: 11,
        title: "Драже M&M's с арахисом и молочным шоколадом",
        image: "https://avatars.mds.yandex.net/get-eda/3595381/335bbe2ad84b311b8ce0e149f17dec84/400x400nocrop",
        price: 120,
      },
    ],
    clothes: [
      {
        id: 12,
        title: "ХУДИ САТОРУ ГОДЖО",
        price: 4793,
        image: "https://zagonbrand.com/wp-content/uploads/2023/11/n1-5-1200x1600.jpg",
      },
      {
        id: 13,
        title: "ХУДИ САТОРУ ГОДЖО",
        price: 4793,
        image: "https://zagonbrand.com/wp-content/uploads/2023/11/n3-1200x1600.jpg",
      },
      {
        id: 14,
        title: "ХУДИ ОРОЧИМАРУ",
        price: 4493,
        image: "https://zagonbrand.com/wp-content/uploads/2023/09/404mz02bg06syhinr7dsgifadgqmkhs2-2-1200x1600.jpg",
      },
      {
        id: 15,
        title: "ХУДИ РЕНГОКУ 2.0",
        price: 4793,
        image: "https://zagonbrand.com/wp-content/uploads/2023/09/1d4w5ruimngcvn18str4dp320jw50qvf-2-1200x1600.jpg",
      },
      {
        id: 16,
        title: "ХУДИ САТОРУ ГОДЖО",
        price: 4793,
        image: "https://zagonbrand.com/wp-content/uploads/2023/11/n1-5-1200x1600.jpg",
      },
      {
        id: 17,
        title: "ХУДИ САТОРУ ГОДЖО",
        price: 4793,
        image: "https://zagonbrand.com/wp-content/uploads/2023/11/n3-1200x1600.jpg",
      },
      {
        id: 18,
        title: "ХУДИ ОРОЧИМАРУ",
        price: 4493,
        image: "https://zagonbrand.com/wp-content/uploads/2023/09/404mz02bg06syhinr7dsgifadgqmkhs2-2-1200x1600.jpg",
      },
      {
        id: 19,
        title: "ХУДИ РЕНГОКУ 2.0",
        price: 4793,
        image: "https://zagonbrand.com/wp-content/uploads/2023/09/1d4w5ruimngcvn18str4dp320jw50qvf-2-1200x1600.jpg",
      },
      {
        id: 20,
        title: "ХУДИ САТОРУ ГОДЖО",
        price: 4793,
        image: "https://zagonbrand.com/wp-content/uploads/2023/11/n1-5-1200x1600.jpg",
      },
      {
        id: 21,
        title: "ХУДИ САТОРУ ГОДЖО",
        price: 4793,
        image: "https://zagonbrand.com/wp-content/uploads/2023/11/n3-1200x1600.jpg",
      },
      {
        id: 22,
        title: "ХУДИ ОРОЧИМАРУ",
        price: 4493,
        image: "https://zagonbrand.com/wp-content/uploads/2023/09/404mz02bg06syhinr7dsgifadgqmkhs2-2-1200x1600.jpg",
      },
      {
        id: 23,
        title: "ХУДИ РЕНГОКУ 2.0",
        price: 4793,
        image: "https://zagonbrand.com/wp-content/uploads/2023/09/1d4w5ruimngcvn18str4dp320jw50qvf-2-1200x1600.jpg",
      },
    ],
    electronics: [
      {
        id: 24,
        title: "A Смартфон Apple iPhone 14 Plus eSIM+SIM 6/256 ГБ, белый",
        price: 95999,
        image: "https://my-apple-store.ru/wa-data/public/shop/products/68/17/11768/images/17247/17247.750.jpg",
      },
      {
        id: 25,
        title: "B Смартфон Apple iPhone 15 6/256 ГБ, желтый",
        price: 103218,
        image: "https://my-apple-store.ru/wa-data/public/shop/products/98/16/11698/images/17237/17237.970.jpg",
      },
      {
        id: 26,
        title: "C Смартфон Apple iPhone 14 Plus eSIM+SIM 6/256 ГБ, белый",
        price: 95999,
        image: "https://my-apple-store.ru/wa-data/public/shop/products/68/17/11768/images/17247/17247.750.jpg",
      },
      {
        id: 27,
        title: "D Смартфон Apple iPhone 15 6/256 ГБ, желтый",
        price: 103218,
        image: "https://my-apple-store.ru/wa-data/public/shop/products/98/16/11698/images/17237/17237.970.jpg",
      },
      {
        id: 28,
        title: "A Смартфон Apple iPhone 14 Plus eSIM+SIM 6/256 ГБ, белый",
        price: 95999,
        image: "https://my-apple-store.ru/wa-data/public/shop/products/68/17/11768/images/17247/17247.750.jpg",
      },
      {
        id: 29,
        title: "B Смартфон Apple iPhone 15 6/256 ГБ, желтый",
        price: 103218,
        image: "https://my-apple-store.ru/wa-data/public/shop/products/98/16/11698/images/17237/17237.970.jpg",
      },
      {
        id: 30,
        title: "C Смартфон Apple iPhone 14 Plus eSIM+SIM 6/256 ГБ, белый",
        price: 95999,
        image: "https://my-apple-store.ru/wa-data/public/shop/products/68/17/11768/images/17247/17247.750.jpg",
      },
      {
        id: 31,
        title: "D Смартфон Apple iPhone 15 6/256 ГБ, желтый",
        price: 103218,
        image: "https://my-apple-store.ru/wa-data/public/shop/products/98/16/11698/images/17237/17237.970.jpg",
      },
      {
        id: 32,
        title: "A Смартфон Apple iPhone 14 Plus eSIM+SIM 6/256 ГБ, белый",
        price: 95999,
        image: "https://my-apple-store.ru/wa-data/public/shop/products/68/17/11768/images/17247/17247.750.jpg",
      },
      {
        id: 33,
        title: "B Смартфон Apple iPhone 15 6/256 ГБ, желтый",
        price: 103218,
        image: "https://my-apple-store.ru/wa-data/public/shop/products/98/16/11698/images/17237/17237.970.jpg",
      },
      {
        id: 34,
        title: "C Смартфон Apple iPhone 14 Plus eSIM+SIM 6/256 ГБ, белый",
        price: 95999,
        image: "https://my-apple-store.ru/wa-data/public/shop/products/68/17/11768/images/17247/17247.750.jpg",
      },
      {
        id: 35,
        title: "D Смартфон Apple iPhone 15 6/256 ГБ, желтый",
        price: 103218,
        image: "https://my-apple-store.ru/wa-data/public/shop/products/98/16/11698/images/17237/17237.970.jpg",
      },
    ],
  },
  imagePreview: null,
  sortType: "title",
  cartItems: [],
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.Loading = action.payload;
    },
    setOpenCart: (state, action: PayloadAction<boolean>) => {
      state.CartOpen = action.payload;
    },
    setPreview: (state, action: PayloadAction<string | null>) => {
      state.imagePreview = action.payload;
    },
    changeSortType: (state, action: PayloadAction<string>) => {
      state.sortType = action.payload;
    },
    addToCart: (state, action: PayloadAction<TCartItem>) => {
      state.cartItems = [...state.cartItems, action.payload];
    },
    removeFromCart: (state, action: PayloadAction<TCartItem>) => {
      state.cartItems = [...state.cartItems.filter((item) => item.id !== action.payload.id)];
    },
    decreaseCartItemCount: (state, action: PayloadAction<TCartItem>) => {
      if (action.payload.count > 1) {
        state.cartItems = state.cartItems.map((item) => {
          return {
            ...item,
            count: action.payload.id === item.id ? item.count - 1 : item.count,
          };
        });
      } else {
        state.cartItems = [...state.cartItems.filter((item) => item.id !== action.payload.id)];
      }
    },
    increaseCartItemCount: (state, action: PayloadAction<TCartItem>) => {
      state.cartItems = state.cartItems.map((item) => {
        return {
          ...item,
          count: action.payload.id === item.id ? item.count + 1 : item.count,
        };
      });
    },
    setCartItems: (state, action: PayloadAction<TCartItem[]>) => {
      state.cartItems = [...action.payload];
    },
  },
});

export const { setLoading, setOpenCart, setPreview, changeSortType, addToCart, removeFromCart, decreaseCartItemCount, increaseCartItemCount, setCartItems } = mainSlice.actions;

export default mainSlice.reducer;
