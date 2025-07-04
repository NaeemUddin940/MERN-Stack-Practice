import { useCartContext } from "../../Context/EcommerceContext";
import  ThreeDCardDemo  from "../ProductCard/ThreeDCardDemo";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";
import useLoadMore from "../../hooks/useLoadMore";

export default function ProductSection({ title, filterFn }) {
  const { products } = useCartContext();

  const data = Array.isArray(products) ? products : [];

  const filtered = Array.isArray(data) ? data.filter(filterFn) : [];

  const { visibleItem, loadMore, hasMore } = useLoadMore(filtered, 8, 4);

  return (
    <div className="flex flex-col space-y-5 px-5 justify-center items-center">
      <h3 className="text-4xl my-5 font-bold text-center">{title}</h3>
      <div className="grid gap-6 px-5 w-full mx-auto grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))]">
        {visibleItem.length > 0 ? (
          visibleItem.map((p) => <ThreeDCardDemo key={p.id} product={p} />)
        ) : (
          <p className="text-gray-500">No product found.</p>
        )}
      </div>
      {hasMore && (
        <InteractiveHoverButton className="mb-5" onClick={loadMore} text="Load More" rounded='2xl' />
      )}
    </div>
  );
}
