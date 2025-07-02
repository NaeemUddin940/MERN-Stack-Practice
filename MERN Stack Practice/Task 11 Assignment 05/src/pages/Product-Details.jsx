import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { InteractiveHoverButton } from "../Components/ui/interactive-hover-button";
import { useParams } from "react-router";
import Loader from "../Components/Loading/Loader";
import ErrorPage from "./Error/ErrorPage";

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`http://localhost:3000/products/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        if (id !== id.length) {
          console.error("Failed to fetch products:", err);
          return setError("Failed to load Products.");
      
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);
  const [imgPreview, setImgPreview] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  if (loading)
    return (
      <div>
        <Loader />
      </div>
    );
 if(error) return <div><ErrorPage title="Failed To Load Products" des='the page you are looking for not avaible!'/></div>
  if (!product) return <div><ErrorPage/></div>;

  return (
    <>
      <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-x-20">
        {/* Image Section */}
        <div className="grid grid-cols-4 grid-rows-4 gap-4">
          {/* Pc View Start */}
          <div className="lg:row-span-4 lg:flex lg:flex-col hidden lg:gap-4">
            {product.thumbnail.map((src, i) => (
              <img
                key={i}
                src={src}
                onClick={(e) => setImgPreview(e.currentTarget.currentSrc)}
                alt={`Thumbnail ${i + 1}`}
                className="w-full h-20 object-cover rounded-xl cursor-pointer md:inline-flex border hover:border-black"
              />
            ))}
          </div>
          {/* Pc View End */}
          <div className="col-span-4 row-span-3 lg:col-span-3 lg:row-span-4">
            <div className="aspect-square w-full">
              <img
                src={imgPreview === null ? product.image : imgPreview}
                alt="Product"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Mobile View Start */}
          <div className="col-span-4 lg:hidden flex row-start-4 gap-5">
            {product.thumbnail.map((src, i) => (
              <img
                key={i}
                src={src}
                onClick={(e) => setImgPreview(e.currentTarget.currentSrc)}
                alt={`Thumbnail ${i + 1}`}
                className="w-fit h-20 object-cover rounded-xl cursor-pointer md:inline-flex border hover:border-black"
              />
            ))}
          </div>
          {/* Mobile View End */}
        </div>
        {/* Image Section */}

        {/* Details */}
        <div>
          <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
          <div className="flex items-center gap-1 mb-4">
            {[...Array(Math.floor(product.rating))].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 text-yellow-500 fill-yellow-500"
              />
            ))}
            <span className="text-base text-gray-500">${product.rating}</span>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl font-bold">${product.price}</span>
            <span className="text-xl font-medium line-through text-gray-500">
              ${product.originalPrice}
            </span>
            <span className="text-md font-medium text-green-600">Save 50%</span>
          </div>

          <div className="mb-4">
            <h4 className="font-medium text-2xl mb-1">Features:</h4>
            <ul className="list-disc list-inside text-lg text-gray-700 whitespace-pre-line">
              {product.description.split("\n").map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>

          <div className="mb-4 flex items-center gap-10">
            <div>
              <h4 className="font-medium text-2xl mb-1">Colors:</h4>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    className={`w-6 h-6 rounded-full border-3 ${
                      selectedColor === color
                        ? "border-zinc-900"
                        : "border-gray-300"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}></button>
                ))}
              </div>
            </div>
            <InteractiveHoverButton text="Add To Cart" />
          </div>

          <ul className="text-xl text-gray-600 space-y-1">
            <li>🚚 Free shipping worldwide</li>
            <li>🔒 100% Secured Payment</li>
            <li>🛠️ Made by the Professionals</li>
          </ul>
        </div>
        {/* Details */}

        <div className="lg:col-span-2 mt-5 px-5">
          <h3 className="text-lg font-semibold mb-4">Reviews</h3>
          <div className="space-y-6">
            {product.reviews.map((r, i) => (
              <div key={i} className="border-b pb-4">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-medium">{r.name}</span>
                </div>
                <p className="text-sm text-gray-600">{r.date}</p>
                <p className="text-sm mt-1">{r.review}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </>
  );
}
