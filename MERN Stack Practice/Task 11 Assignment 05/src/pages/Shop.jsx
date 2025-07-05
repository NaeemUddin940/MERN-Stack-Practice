import React from "react";
import ThreeDCardDemo from "../Components/ProductCard/ThreeDCardDemo";
import { useEcommerceContext } from "../Context/EcommerceContext";
import FilterSIdebar from "../Components/FIlterBar/FilterSidebar";

const Shop = () => {
  const { selected, setSelected, handleSelect, allProducts, filteredProducts } =
    useEcommerceContext();
  const toShow =
    filteredProducts.products.length > 0
      ? filteredProducts.products
      : allProducts.products;
  return (
    <div className="grid min-h-screen">
      <div className="flex flex-grow">
        <aside className="hidden md:block">
          <FilterSIdebar
            selected={selected}
            setSelected={setSelected}
            handleSelect={handleSelect}
          />
        </aside>
        <div className="overflow-auto w-full scrollbar-hide">
          {!allProducts.products.length ? (
            <div className="text-gray-500 w-full center">
              <p className="flex h-50 justify-center items-center text-5xl font-bold">
                No Products Found....!!
              </p>
            </div>
          ) : (
            <div className="grid gap-6 px-5 w-full mx-auto grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))]">
              {toShow.map((product) => {
                return <ThreeDCardDemo key={product.id} product={product} />;
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default React.memo(Shop);
