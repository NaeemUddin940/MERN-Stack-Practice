import Checkbox from "./FilterCheckbox/Checkbox";
import { useCartContext } from "../Context/EcommerceContext";
import React from "react";

const FilterSidebar = () => {
  const { selected, setSelected, handleSelect,applyFilter } =
    useCartContext();
  const filter = {
    Price: ["Highest", "Lowest"],
    Category: ["T-shirt", "Shirt", "Pant", "Shoes", "Watch"],
    Color: ["Green", "Orange", "Gray", "Violate"],
    Size: ["S", "M", "L", "XL", "XXL"],
  };
  return (
    <div className="pl-4 ">
      <div className="flex flex-col">
        {Object.entries(filter).map(([section, items], index) => (
          <div key={index} className="w-40">
            <h2 className="text-2xl font-bold">{section}</h2>
            <div className="pl-5 py-3">
              {items.map((item, index) => (
                <Checkbox
                  key={index}
                  subtitle={item}
                  target={item}
                  isChecked={selected[section] === item}
                  onChange={() => {
                    handleSelect(section, item);
                    applyFilter()
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <button
        className="px-4 py-2 mt-3 cursor-pointer dark:bg-violet-500 dark:text-black rounded-2xl font-semibold"
        onClick={() =>
          setSelected({
            Price: null,
            Category: null,
            Color: null,
            Size: null,
          })
        }
        rounded="full">
        Clear FIlter
      </button>
    </div>
  );
}

export default React.memo(FilterSidebar)