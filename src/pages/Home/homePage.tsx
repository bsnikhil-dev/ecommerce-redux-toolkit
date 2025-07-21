import React, { useContext } from "react";
import Hero from "../../components/Hero/hero";
import Product from "../../components/Product/product";
import { AppContext } from "../../contexts/appContext";

const HomePage = (): React.ReactElement => {
  const { products } = useContext(AppContext);

  const filteredProducts = products.filter((item) =>
    ["men's clothing", "women's clothing", "jewelery"].includes(item.category)
  );

  return (
    <div>
      <Hero />
      <section className="py-20">
        <div className="px-[30px] lg:px-0 mx-auto w-full">
          <h1 className="text-3xl font-semibold mb-10 text-center">
            Explore Our Products
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none">
            {filteredProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
