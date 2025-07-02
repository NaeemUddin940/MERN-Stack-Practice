// components/FilterSidebar.jsx
"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, X } from "lucide-react";

const FilterSidebar = () => {
  const categories = ["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"];
  const styles = ["Casual", "Formal", "Party", "Gym"];
  const sizes = [
    "XX-Small", "X-Small", "Small", "Medium", "Large",
    "X-Large", "XX-Large", "3X-Large", "4X-Large"
  ];
  const colors = [
    "#22C55E", "#EF4444", "#FACC15", "#FB923C",
    "#06B6D4", "#3B82F6", "#8B5CF6", "#EC4899", "#FFFFFF", "#000000"
  ];

  const [priceRange, setPriceRange] = useState([50, 200]);
  const [selectedSize, setSelectedSize] = useState("Large");
  const [selectedColor, setSelectedColor] = useState("#3B82F6");
  const [open, setOpen] = useState({
    price: true,
    colors: true,
    size: true,
    style: true,
  });

  const toggle = (section) => {
    setOpen((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="w-full max-w-[320px] bg-white p-5 rounded-2xl text-sm space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center font-semibold text-base">
        <span>Filters</span>
        <X className="w-4 h-4 cursor-pointer" />
      </div>

      {/* Categories */}
      <div className="space-y-1">
        {categories.map((item) => (
          <button
            key={item}
            className="block w-full text-left text-gray-700 hover:text-black"
          >
            {item}
          </button>
        ))}
      </div>

      {/* Price */}
      <div>
        <div
          className="flex justify-between items-center font-semibold cursor-pointer"
          onClick={() => toggle("price")}
        >
          <span>Price</span>
          {open.price ? <ChevronUp /> : <ChevronDown />}
        </div>
        {open.price && (
          <div className="mt-4 space-y-2">
            <input
              type="range"
              min={0}
              max={500}
              value={priceRange[0]}
              onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
              className="w-full accent-black"
            />
            <input
              type="range"
              min={0}
              max={500}
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
              className="w-full accent-black"
            />
            <div className="flex justify-between text-xs text-gray-600">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
        )}
      </div>

      {/* Colors */}
      <div>
        <div
          className="flex justify-between items-center font-semibold cursor-pointer"
          onClick={() => toggle("colors")}
        >
          <span>Colors</span>
          {open.colors ? <ChevronUp /> : <ChevronDown />}
        </div>
        {open.colors && (
          <div className="flex flex-wrap gap-2 mt-4">
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-7 h-7 rounded-full border-2 ${
                  selectedColor === color
                    ? "border-black ring-2 ring-black"
                    : "border-transparent"
                }`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Sizes */}
      <div>
        <div
          className="flex justify-between items-center font-semibold cursor-pointer"
          onClick={() => toggle("size")}
        >
          <span>Size</span>
          {open.size ? <ChevronUp /> : <ChevronDown />}
        </div>
        {open.size && (
          <div className="flex flex-wrap gap-2 mt-4">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  selectedSize === size
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Dress Style */}
      <div>
        <div
          className="flex justify-between items-center font-semibold cursor-pointer"
          onClick={() => toggle("style")}
        >
          <span>Dress Style</span>
          {open.style ? <ChevronUp /> : <ChevronDown />}
        </div>
        {open.style && (
          <div className="mt-4 space-y-1">
            {styles.map((item) => (
              <button
                key={item}
                className="block w-full text-left text-gray-700 hover:text-black"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Apply Button */}
      <button className="w-full bg-black text-white py-3 rounded-full font-bold text-xs">
        Apply Filter
      </button>
    </div>
  );
};

export default FilterSidebar;
