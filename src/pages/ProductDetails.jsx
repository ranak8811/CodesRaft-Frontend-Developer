import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-center space-y-4 max-w-lg">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Product Details Page
        </h1>
        <p className="text-gray-600">
          You are viewing details for Product ID:{" "}
          <span className="font-bold text-indigo-600 text-lg">#{id}</span>
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
