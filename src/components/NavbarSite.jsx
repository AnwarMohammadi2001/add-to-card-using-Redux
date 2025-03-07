import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RiShoppingCartFill } from "react-icons/ri";

const NavbarSite = () => {
  const navigate = useNavigate();
  const cardProducts = useSelector((state) => state.card);

  return (
    <nav className="bg-slate-900 h-[70px] sticky top-0 z-20 w-full shadow-md">
      <div className="container mx-auto flex justify-between items-center h-full px-4">
        <div className="flex items-center gap-x-10">
          {/* Brand Name */}
          <span
            onClick={() => navigate("/")}
            className="text-white text-xl font-bold cursor-pointer"
          >
            Shopping Cart
          </span>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <span
              onClick={() => navigate("/")}
              className="text-white cursor-pointer hover:text-gray-300"
            >
              Products
            </span>
          </div>
        </div>

        <button
          onClick={() => navigate("/card")}
          className="relative  text-white  transition"
        >
          {/* Shopping Cart Icon */}
          <RiShoppingCartFill className="h-8 w-8 " />

          {
            // Show the number of products in the cart
            cardProducts.length > 0 && (
              <span className="absolute -top-2 -right-2  w-5 h-5 text-xs font-semibold text-white bg-red-500 rounded-full flex items-center justify-center">
                {cardProducts.length}
              </span>
            )
          }
        </button>
      </div>
    </nav>
  );
};

export default NavbarSite;
