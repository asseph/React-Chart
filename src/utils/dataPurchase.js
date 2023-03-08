let data = [
  {
    id: 1,
    name: 'Jhon Carter',
    price: 5455.12,
    date: '2021-08-19T18:15:13.554Z',
    products: [
      {
        ProductId: 22,
        amount: 3,
        subTotal: 776,
      },
      {
        ProductId: 7,
        amount: 5,
        subTotal: 1323,
      },
      {
        ProductId: 13,
        amount: 1,
        subTotal: 4343,
      },
    ],
    total: 35424,
  },
  {
    id: 2,
    name: 'Juliano Franche',
    price: 65277,
    date: '2021-11-19T18:15:13.554Z',
    products: [
      {
        ProductId: 12,
        amount: 3,
        subTotal: 2342,
      },
      {
        ProductId: 33,
        amount: 2,
        subTotal: 4353,
      },
    ],
    total: 33323,
  },
  {
    id: 3,
    name: 'Valentina Sienz',
    price: 34932,
    date: '2021-12-19T18:15:13.554Z',
    products: [
      {
        ProductId: 2,
        amount: 3,
        subTotal: 3223,
      },
      {
        ProductId: 6,
        amount: 5,
        subTotal: 233,
      },
      {
        ProductId: 22,
        amount: 1,
        subTotal: 1121,
      },
    ],
    total: 56253,
  },
];

export const getAllPurchases = () => {
  return data;
};

export const getPurchaseById = id => {
  return data.find(item => item.id === id);
};
