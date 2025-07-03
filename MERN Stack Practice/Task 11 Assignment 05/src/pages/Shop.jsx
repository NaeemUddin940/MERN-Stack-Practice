import { ThreeDCardDemo } from "../Components/ProductCard/ThreeDCardDemo";
import { useCartContext } from "../Context/EcommerceContext";
import FilterSIdebar from "../FIlterBar/FilterSidebar";

export default function Shop() {
  const { products } = useCartContext();
  return (
    <div className="grid">
      <div className="flex">
        <aside className="hidden md:block">
          <FilterSIdebar />
        </aside>
        <div className="overflow-auto h-200 w-full scrollbar-hide">
          {!products.length ? (
            <p>No products available.</p>
          ) : (
            <div className="grid gap-6 px-5 w-full mx-auto grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))]">
              {Array.isArray(products) &&
                products.map((product) => {
                  return <ThreeDCardDemo key={product.id} product={product} />;
                })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
