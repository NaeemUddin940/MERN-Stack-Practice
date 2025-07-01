import { useCartContext } from "../Context/EcommerceContext";
import { useMemo } from "react";

export default function ShoppingCart() {
  const { cart, handleAddToCart, handleRemoveCart } = useCartContext();
  const cartLength = cart.length;
  const subTotal = useMemo(
    () => cart.reduce((sum, item) => sum + item.price, 0),
    [cart]
  );
  return (
    <div>
      <h2 className="text-center text-lg font-semibold mb-3">
        Shopping Cart{" "}
        <span className="bg-gray-300 text-gray-600 rounded-full px-2 py-0.5 text-xs font-normal align-middle">
          {cartLength} Items
        </span>
      </h2>

      <div className=" mb-6 w-100">
        <div className="overflow-y-auto h-100">
          {/* Product 1 */}
          {cart.length === 0 ? (
            <div className="w-100 text-3xl font-bold flex justify-center items-center h-full">
              Cart is Empty
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-4 h">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 rounded-lg bg-gray-100 object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold line-clamp-1">{item.title}</h3>
                  <p className="text-sm text-gray-500 line-clamp-2">
                    {item.description}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleAddToCart(item.id)}
                    className="bg-gray-200 font-black active:bg-gray-400 cursor-pointer py-1 px-2 rounded-md">
                    +
                  </button>
                  <div className="border border-gray-300 rounded px-2 py-1 text-sm cursor-pointer">
                    <p className="font-bold">{item.quantity}</p>
                  </div>
                  <button
                    onClick={() => handleRemoveCart(item.id)}
                    className="bg-gray-200 font-black active:bg-gray-400 cursor-pointer py-1 px-2.5 rounded-md">
                    -
                  </button>
                  <p className="font-semibold">${item.price}</p>
                  <button
                    onClick={() => handleRemoveCart(item.id)}
                    className="text-gray-400 hover:text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 hover:text-red-400 cursor-pointer">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="flex justify-between items-center border-t border-gray-200 font-semibold text-lg">
        <span>Sub Total</span>
        <span>${subTotal.toFixed(2)}</span>
      </div>

      <button className="w-full bg-black text-white py-3 rounded-lg mt-3 font-semibold hover:bg-gray-800 transition">
        Continue to Payment
      </button>

      <p className="text-center text-xs text-gray-400 mt-2">
        All the taxes will be calculated while checkout
      </p>
    </div>
  );
}
