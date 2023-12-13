export interface TMainCard {
  id: number;
  title: string;
  description: string;
  link: string;
  image: string;
}

export interface TProduct {
  id: number;
  title: string;
  image: string;
  price: number;
}

export interface TCartItem {
  id: number;
  title: string;
  image: string;
  price: number;
  count: number;
}

export interface TPaginationProps {
  listLength: number;
  onChange?: () => void;
  currentPage: number;
}
