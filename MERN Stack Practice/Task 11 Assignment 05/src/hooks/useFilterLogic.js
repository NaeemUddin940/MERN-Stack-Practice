export const useFilterLogic = (products, selected) => {
  console.log(products);
  let filtered = products;
  console.log(selected);
  if (selected.Category) {
    filtered = filtered.filter(
      (p) => p.catagory === selected.Category.toLowerCase()
    );
  }

  if (selected.Color) {
    filtered = filtered.filter((p) => p.colors === selected.Color);
  }

  if (selected.Size) {
    filtered = filtered.filter((p) => p.size === selected.Size);
  }

  if (selected.Price === "Lowest") {
    filtered = filtered.sort((a, b) => a.price - b.price);
  }

  if (selected.Price === "Highest") {
    filtered = filtered.sort((a, b) => b.price - a.price);
  }

  return filtered;
};
