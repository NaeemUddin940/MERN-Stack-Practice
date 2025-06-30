import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { NavLink } from "react-router";
import { Star } from "lucide-react";
import { useState } from "react";

export function ThreeDCardDemo({ product }) {
  const [cartRemove, setCartRemove] = useState(true);
  return (
    <CardContainer className="cursor-pointer">
      <CardBody className="bg-gray-50 relative group/card py-4 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[15rem] md:h-[26rem] md:w-[23rem] h-[28rem] rounded-xl p-5 border  ">
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
            {[...Array(Math.floor(product.rating))].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 text-yellow-500 flex fill-yellow-500"
              />
            ))}
            <span className="pl-3">{product.rating}</span>
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
          <CardItem
            translateZ={20}
            as="button"
            onClick={() => {
              setCartRemove((prev) => !prev);
              
            }}
            className={`px-4  py-3 cursor-pointer rounded-xl ${
              cartRemove
                ? "bg-emerald-500 text-white"
                : "bg-red-400 text-black Cart"
            } dark:bg-white dark:text-black  text-xs font-bold`}>
            {cartRemove ? "Add To Cart" : "Remove Cart"}
          </CardItem>
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
