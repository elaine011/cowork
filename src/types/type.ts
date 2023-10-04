export type ProductType = {
  id: number;
  title: string;
  price: number;
  model: string;
  color: { name: string; code: string };
  capacity: string;
  stock: number;
  img: string;
};
