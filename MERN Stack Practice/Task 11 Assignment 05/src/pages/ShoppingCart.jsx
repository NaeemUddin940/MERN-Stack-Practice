export default function ShoppingCart() {
  return (
    <div>
      <h2 className="text-center text-lg font-semibold mb-3">
        Shopping Cart{" "}
        <span className="bg-gray-300 text-gray-600 rounded-full px-2 py-0.5 text-xs font-normal align-middle">
          4 ITEMS
        </span>
      </h2>

      <div className="space-y-5 mb-6">
        <div className="overflow-y-auto h-100">
          {/* Product 1 */}
          <div className="flex gap-4">
            <img
              src="https://i.ibb.co/jDshLrD/apple-watch.png"
              alt="Apple Watch"
              className="w-16 h-16 rounded-lg bg-gray-100 object-cover"
            />
            <div className="flex-1">
              <h3 className="font-semibold">Apple Watch Series 7</h3>
              <p className="text-sm text-gray-500">Golden</p>
              <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                <svg
                  className="w-3 h-3 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                Will arrive in 2 days
              </p>
            </div>
            <div className="flex items-center gap-2">
              <select className="border border-gray-300 rounded px-2 py-1 text-sm cursor-pointer">
                <option>1</option>
              </select>
              <p className="font-semibold">$319</p>
              <button className="text-gray-400 hover:text-gray-700">✕</button>
            </div>
          </div>
          {/* Product 2 */}
          <div className="flex gap-4">
            <img
              src="https://i.ibb.co/tXHzvS4/headphones.png"
              alt="Speaker"
              className="w-16 h-16 rounded-lg bg-gray-100 object-cover"
            />
            <div className="flex-1">
              <h3 className="font-semibold">Beylob 90 Speaker</h3>
              <p className="text-sm text-gray-500">Space Gray</p>
              <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                <svg
                  className="w-3 h-3 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                Only 2 items available
              </p>
            </div>
            <div className="flex items-center gap-2">
              <select className="border border-gray-300 rounded px-2 py-1 text-sm cursor-pointer">
                <option>1</option>
              </select>
              <p className="font-semibold">$59</p>
              <button className="text-gray-400 hover:text-gray-700">✕</button>
            </div>
          </div>
          {/* Product 3 */}
          <div className="flex gap-4">
            <img
              src="https://i.ibb.co/3TyQjL3/speaker.png"
              alt="Bluetooth Speaker"
              className="w-16 h-16 rounded-lg bg-gray-100 object-cover"
            />
            <div className="flex-1">
              <h3 className="font-semibold">Beoplay M5 Bluetooth Speaker</h3>
              <p className="text-sm text-gray-500">Gray Edition</p>
            </div>
            <div className="flex items-center gap-2">
              <select className="border border-gray-300 rounded px-2 py-1 text-sm cursor-pointer">
                <option>2</option>
              </select>
              <p className="font-semibold">$99</p>
              <button className="text-gray-400 hover:text-gray-700">✕</button>
            </div>
          </div>
          {/* Product 4 */}
          <div className="flex gap-4">
            <img
              src="https://i.ibb.co/jDshLrD/apple-watch.png"
              alt="Apple Watch 44mm"
              className="w-16 h-16 rounded-lg bg-gray-100 object-cover"
            />
            <div className="flex-1">
              <h3 className="font-semibold">Apple Watch Series 7 - 44mm</h3>
              <p className="text-sm text-gray-500">Golden</p>
            </div>
            <div className="flex items-center gap-2">
              <select className="border border-gray-300 rounded px-2 py-1 text-sm cursor-pointer">
                <option>1</option>
              </select>
              <p className="font-semibold">$159</p>
              <button className="text-gray-400 hover:text-gray-700">✕</button>
            </div>
          </div>
          {/* Product 5 */}
          <div className="flex gap-4">
            <img
              src="https://i.ibb.co/jDshLrD/apple-watch.png"
              alt="Apple Watch 44mm"
              className="w-16 h-16 rounded-lg bg-gray-100 object-cover"
            />
            <div className="flex-1">
              <h3 className="font-semibold">Apple Watch Series 7 - 44mm</h3>
              <p className="text-sm text-gray-500">Golden</p>
            </div>
            <div className="flex items-center gap-2">
              <select className="border border-gray-300 rounded px-2 py-1 text-sm cursor-pointer">
                <option>1</option>
              </select>
              <p className="font-semibold">$159</p>
              <button className="text-gray-400 hover:text-gray-700">✕</button>
            </div>
          </div>
          {/* Product 6 */}
          <div className="flex gap-4">
            <img
              src="https://i.ibb.co/jDshLrD/apple-watch.png"
              alt="Apple Watch 44mm"
              className="w-16 h-16 rounded-lg bg-gray-100 object-cover"
            />
            <div className="flex-1">
              <h3 className="font-semibold">Apple Watch Series 7 - 44mm</h3>
              <p className="text-sm text-gray-500">Golden</p>
            </div>
            <div className="flex items-center gap-2">
              <select className="border border-gray-300 rounded px-2 py-1 text-sm cursor-pointer">
                <option>1</option>
              </select>
              <p className="font-semibold">$159</p>
              <button className="text-gray-400 hover:text-gray-700">✕</button>
            </div>
          </div>
          {/* Product 7 */}
          <div className="flex gap-4">
            <img
              src="https://i.ibb.co/jDshLrD/apple-watch.png"
              alt="Apple Watch 44mm"
              className="w-16 h-16 rounded-lg bg-gray-100 object-cover"
            />
            <div className="flex-1">
              <h3 className="font-semibold">Apple Watch Series 7 - 44mm</h3>
              <p className="text-sm text-gray-500">Golden</p>
            </div>
            <div className="flex items-center gap-2">
              <select className="border border-gray-300 rounded px-2 py-1 text-sm cursor-pointer">
                <option>1</option>
              </select>
              <p className="font-semibold">$159</p>
              <button className="text-gray-400 hover:text-gray-700">✕</button>
            </div>
          </div>
          {/* Product 8 */}
          <div className="flex gap-4">
            <img
              src="https://i.ibb.co/jDshLrD/apple-watch.png"
              alt="Apple Watch 44mm"
              className="w-16 h-16 rounded-lg bg-gray-100 object-cover"
            />
            <div className="flex-1">
              <h3 className="font-semibold">Apple Watch Series 7 - 44mm</h3>
              <p className="text-sm text-gray-500">Golden</p>
            </div>
            <div className="flex items-center gap-2">
              <select className="border border-gray-300 rounded px-2 py-1 text-sm cursor-pointer">
                <option>1</option>
              </select>
              <p className="font-semibold">$159</p>
              <button className="text-gray-400 hover:text-gray-700">✕</button>
            </div>
          </div>
          {/* Product 9 */}
          <div className="flex gap-4">
            <img
              src="https://i.ibb.co/jDshLrD/apple-watch.png"
              alt="Apple Watch 44mm"
              className="w-16 h-16 rounded-lg bg-gray-100 object-cover"
            />
            <div className="flex-1">
              <h3 className="font-semibold">Apple Watch Series 7 - 44mm</h3>
              <p className="text-sm text-gray-500">Golden</p>
            </div>
            <div className="flex items-center gap-2">
              <select className="border border-gray-300 rounded px-2 py-1 text-sm cursor-pointer">
                <option>1</option>
              </select>
              <p className="font-semibold">$159</p>
              <button className="text-gray-400 hover:text-gray-700">✕</button>
            </div>
          </div>
          {/* Product 10 */}
          <div className="flex gap-4">
            <img
              src="https://i.ibb.co/jDshLrD/apple-watch.png"
              alt="Apple Watch 44mm"
              className="w-16 h-16 rounded-lg bg-gray-100 object-cover"
            />
            <div className="flex-1">
              <h3 className="font-semibold">Apple Watch Series 7 - 44mm</h3>
              <p className="text-sm text-gray-500">Golden</p>
            </div>
            <div className="flex items-center gap-2">
              <select className="border border-gray-300 rounded px-2 py-1 text-sm cursor-pointer">
                <option>1</option>
              </select>
              <p className="font-semibold">$159</p>
              <button className="text-gray-400 hover:text-gray-700">✕</button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center border-t border-gray-200 font-semibold text-lg">
        <span>Sub Total</span>
        <span>$699</span>
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
