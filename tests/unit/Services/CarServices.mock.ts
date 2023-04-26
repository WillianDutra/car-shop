export const deleteOutput = { n: 1, ok: 1, deletedCount: 1, acknowledged: true };

export const inputValue = {
  model: 'Gol bolinha',
  year: 2000,
  color: 'Black',
  status: true,
  buyValue: 15.000,
  doorsQty: 2,
  seatsQty: 5,
};

export const carId = {
  id: '64487f431852311ef2e534b3',
};

export const carWithId = { ...carId, ...inputValue };

export const carList = [
  {
    id: '64487f431852311ef2e534b3',
    model: 'Gol bolinha',
    year: 2000,
    color: 'Black',
    status: true,
    buyValue: 15.000,
    doorsQty: 2,
    seatsQty: 5,
  },
  {
    id: '64457z441862712ff2e534b2',
    model: 'Opala',
    year: 1992,
    color: 'White',
    status: true,
    buyValue: 25.000,
    doorsQty: 2,
    seatsQty: 5,
  },
];