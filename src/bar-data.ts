export const getBarData = () => {
  return ["Apple", "Google", "Amazon", "Microsoft", "Coca-Cola", "Samsung"].map(
    (name) => {
      return {
        name,
        value: Math.floor(Math.random() * 100000)
      };
    }
  );
};
