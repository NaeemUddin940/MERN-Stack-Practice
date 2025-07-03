import { useState } from "react";
import Checkbox from "./FilterCheckbox/Checkbox";

export default function FilterSidebar() {
  const [selected, setSelected] = useState({
    Category: null,
    Color: null,
    Size: null,
  });
  const handleSelect = (section, value) => {
    setSelected((prev) => ({
      ...prev,
      [section]: value,
    }));
  };

  const filter = {
    Price: ["Highest", "Lowest"],
    Category: ["T-shirt", "Shirt", "Pants", "Shoes", "Watch"],
    Color: ["Red", "Blue", "Black", "White", "Green"],
    Size: ["S", "M", "L", "XL", "XXL"],
  };

  return (
    <div className="pl-4 ">
      <div className="flex flex-col">
        {Object.entries(filter).map(([section, items]) => (
          <div className="w-40">
            <h2 className="text-2xl font-bold">{section}</h2>
            <div className="pl-5 py-3">
              {items.map((item, index) => (
                <Checkbox
                  key={index}
                  subtitle={item}
                  target={item}
                  isChecked={selected[section] === item}
                  onChange={() => handleSelect(section, item)}
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
            Category: null,
            Color: null,
            Size: null,
          })
        }
        rounded="full"
      >Clear FIlter</button>
    </div>
  );
}
