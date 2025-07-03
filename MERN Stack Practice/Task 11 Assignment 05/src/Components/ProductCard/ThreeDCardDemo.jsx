import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { NavLink } from "react-router";
import { Star } from "lucide-react";
import { useCartContext } from "../../Context/EcommerceContext";
import React from "react";

const ThreeDCardDemo = ({ product }) => {
  const { handleAddToCart, cart, handleRemoveCart } = useCartContext();


  return (
    <CardContainer className="cursor-pointer">
      <CardBody className="bg-gray-50 relative group/card py-4 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1]  rounded-xl p-5 border h-105 w-full">
        <NavLink to={`/product-details/${product.id}`}>
          <CardItem translateZ="100">
            <img
              src={product.image}
              height="1000"
              width="1000"
              className="h-60 object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <CardItem
            translateZ="50"
            className="text-xl font-bold line-clamp-1 text-neutral-600 dark:text-white">
            {product.title}
          </CardItem>
          <CardItem
            as="p"
            translateZ="50"
            className="text-neutral-500 flex items-center justify-center text-sm max-w-sm mt-2 dark:text-neutral-300">
            <>
              {[...Array(Math.max(0, Math.floor(product?.rating || 0)))].map(
                (_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-500 fill-yellow-500"
                  />
                )
              )}
              <span className="pl-3">{product?.rating ?? 0}</span>
            </>
          </CardItem>

          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-xl max-w-sm mt-2 dark:text-neutral-300">
            ${product.price}{" "}
            <span className="line-through text-base">
              ${product.originalPrice}
            </span>{" "}
            <span className="text-emerald-400">Save ${product.save}</span>
          </CardItem>
        </NavLink>
        <div className="flex justify-between items-center mt-3">
          {cart.find(item => item.id === product.id) ? (
            <CardItem
              translateZ={20}
              as="button"
              onClick={() => {
                handleRemoveCart(product.id);
              }}
              className="px-4  py-3 cursor-pointer rounded-xl bg-red-400 text-black Cart dark:bg-red-400 dark:text-black  text-xs font-bold">
              Remove Cart
            </CardItem>
          ) : (
            <CardItem
              translateZ={20}
              as="button"
              onClick={() => handleAddToCart(product)}
              className="px-4  py-3 cursor-pointer rounded-xl dark:bg-violet-500 bg-green-500 text-white dark:text-black  text-xs font-bold">
              Add To Cart
            </CardItem>
          )}

          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-3 cursor-pointer rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
            Buy Now
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
export default React.memo(ThreeDCardDemo)