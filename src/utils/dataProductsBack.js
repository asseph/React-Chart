let data = [
  {
    id: 2,
    name: 'Product 2',
    price: 890,
  },
  {
    id: 3,
    name: 'Product 3',
    price: 1566,
  },
  {
    id: 4,
    name: 'Product 4',
    price: 345,
  },
  {
    id: 5,
    name: 'Product 5',
    price: 232,
  },
];

export const getAllProductsBack = () => {
  return data;
};

export const getProductBackById = id => {
  return data.find(item => item.id === id);
};
