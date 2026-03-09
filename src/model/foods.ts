export let foods: FoodsType[] = [
  {
    id: 1,
    name: "fries",
    category: "main",
  },
  {
    id: 2,
    name: "chicken",
    category: "main",
  },
];
export type FoodsType = {
  id: number;
  name: string;
  category: string;
};
