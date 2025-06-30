import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { NavLink } from "react-router";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="cursor-pointer">
      <CardBody className="bg-gray-50 relative group/card py-4 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[15rem] h-[22rem] md:w-[23rem] rounded-xl p-5 border  ">
        <NavLink to='/product-details'>
          <CardItem translateZ="100">
            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <CardItem
            translateZ="50"
            className="text-xl font-bold line-clamp-1 text-neutral-600 dark:text-white">
            T-shirt with Tape Details
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
            4.5/5
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
            $120
          </CardItem>
        </NavLink>
      </CardBody>
    </CardContainer>
  );
}
