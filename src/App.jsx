import { Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <h1 className="text-3xl font-bold flex justify-center">Home</h1>
      <Link to="/" className="mr-4 px-4">
        Home
      </Link>
      <Link to="/products" className="mr-4">
        All Products
      </Link>
    </>
  );
};

export default App;
