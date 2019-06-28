const routes = [
  {
    name: 'Line A',
    color: 'green',
    payload: 100,
    nodes: [
      { top: 40, left: 10 },
      { top: 40, left: 20 },
      { top: 40, left: 30 },
      { top: 30, left: 40 },
      { top: 30, left: 50 },
      { top: 30, left: 60 },
      { top: 30, left: 70 },
    ]
  },
  {
    name: 'Line B',
    color: 'blue',
    payload: 200,
    nodes: [
      { top: 20, left: 30 },
      { top: 30, left: 30 },
      { top: 40, left: 30 },
      { top: 50, left: 40 },
      { top: 50, left: 50 },
      { top: 50, left: 60 },
    ]
  },
  {
    name: 'Line C',
    color: 'red',
    payload: 300,
    nodes: [
      { top: 10, left: 50 },
      { top: 20, left: 50 },
      { top: 30, left: 50 },
      { top: 50, left: 40 },
      { top: 60, left: 30 },
      { top: 70, left: 30 },
    ]
  },
];

// Return routes sorted by payload.
export default routes.sort((a, b) => {
  const  payloadA = a.payload;
  const  payloadB = b.payload;

  if (payloadA > payloadB) return -1;
  if (payloadA < payloadB) return 1;
  return 0;
});
