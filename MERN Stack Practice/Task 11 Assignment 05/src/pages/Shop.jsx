import { ThreeDCardDemo } from "../Components/ProductCard/ThreeDCardDemo";
import { useCartContext } from "../Context/EcommerceContext";

export default function Shop() {
  const { products } = useCartContext();
  // products.map((p) => console.log(p.catagory))
  return (
    <div>
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
  );
}
