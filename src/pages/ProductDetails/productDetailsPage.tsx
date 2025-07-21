import type React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../contexts/appContext";


const ProductDetailsPage = (): React.ReactElement => {
  const { id } = useParams();

  if (!id) {
    return (
      <section className="h-screen flex justify-center items-center">
        Invalid product ID.
      </section>
    );
  }

  const { addToCart } = useContext(AppContext).cart;
  const { products } = useContext(AppContext);

  // Find product and allow for undefined
  const product = products.find((item) => item.id === parseInt(id));

  // Handle undefined product
  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Product not found.
      </section>
    );
  }

  // Destructure only if product is defined
  const { title, price, description, image } = product;

  return (
    <section className="pt-[450px] md:pt-32 pb-[400px] md:pb-12 lg:py-32 h-screen flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img className="max-w-[200px] lg:max-w-xs" src={image} alt={title} />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">{title}</h1>
            <div className="text-2xl text-red-500 font-medium mb-6">$ {price}</div>
            <p className="mb-8">{description}</p>
            <button
              onClick={() => addToCart(product, product.id)}
              className="bg-black py-4 px-8 text-white"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
