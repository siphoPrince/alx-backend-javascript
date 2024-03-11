const updateUniqueItems = (map) => {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [item, quantity] of map) {
    if (quantity === 1) {
      map.set(item, 100);
    }
  }
};

export default updateUniqueItems;
