import { Link } from "react-router";


export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-10">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">About Us</h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Welcome to <span className="font-semibold text-violet-600">ShopEase</span>, your go-to destination for quality products, seamless shopping, and trusted service.
        </p>
      </div>

      {/* Company Mission */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://plus.unsplash.com/premium_photo-1683798464819-d1376249293e?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Mission"
          className="rounded-xl h-100 w-100 shadow-lg"
        />
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            Our mission is simple — to make online shopping easier, faster, and more secure. We offer a wide range of premium products that blend style with utility.
            From tech gadgets to fashion and home goods, we ensure every item is carefully curated for quality and affordability.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-xl shadow-sm bg-white dark:bg-black dark:border-white/10">
            <h3 className="text-lg font-semibold mb-2 text-violet-600">✔ Fast & Secure Shipping</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We ship across the globe with trusted delivery partners. Get your products quickly and securely, every time.
            </p>
          </div>
          <div className="p-6 border rounded-xl shadow-sm bg-white dark:bg-black dark:border-white/10">
            <h3 className="text-lg font-semibold mb-2 text-violet-600">💳 100% Secure Payments</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We use end-to-end encryption and globally trusted payment systems to keep your transactions safe.
            </p>
          </div>
          <div className="p-6 border rounded-xl shadow-sm bg-white dark:bg-black dark:border-white/10">
            <h3 className="text-lg font-semibold mb-2 text-violet-600">🤝 Customer First</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Your satisfaction is our top priority. Our 24/7 customer support team is always here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section (Optional) */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">Meet the Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {["Naeem", "Jahanara", "Rashed"].map((name, i) => (
            <div key={i} className="space-y-3">
              <img
                src={`https://randomuser.me/api/portraits/lego/${i + 1}.jpg`}
                alt={name}
                className="w-24 h-24 rounded-full mx-auto"
              />
              <h4 className="font-semibold text-gray-800 dark:text-white">{name}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">Developer & Strategist</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="text-center pt-10">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Want to get in touch?</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">Contact us anytime at <Link to='#' className="text-violet-600 font-medium">mdnaeemuddin14@gmail.com</Link></p>
        <button className="px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
}
