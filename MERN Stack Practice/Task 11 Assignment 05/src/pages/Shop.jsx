import React from "react";
import  ThreeDCardDemo  from "../Components/ProductCard/ThreeDCardDemo";
import { useCartContext } from "../Context/EcommerceContext";
import FilterSIdebar from "../FIlterBar/FilterSidebar";

const Shop = () => {
  const { selected, setSelected, handleSelect, products, filteredProduct } =
    useCartContext();
const toShow = filteredProduct.length > 0 ? filteredProduct : products;

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
          {!products.length ? (
            <p>No products available.</p>
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
}
export default React.memo(Shop)