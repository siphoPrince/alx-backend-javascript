const cleanSet = (set, startString) => {
  let result = '';
  for (const value of set) {
    if (value.startsWith(startString)) {
      result += value.substring(startString.length) + '-';
    }
  }
  // Remove the trailing '-' from the result
  return result.slice(0, -1);
};

export default cleanSet;
