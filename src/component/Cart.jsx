import { toast } from "react-toastify";

const Cart = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((total, item) => total + item.price, 0);

  const handleRemoveFromCart = () => {
    setCarts([]);

  };

   const handleDeleteItem = (item) => {
    const updatedCart = carts.filter(c => c.id !== item.id);
    setCarts(updatedCart);
    toast.error(`${item.name} removed from cart!`);
    };

  return (
    <div className="pb-20 max-w-7xl mx-auto p-6 rounded-lg mt-20">
      <h2 className="text-4xl font-bold mb-4">Your Cart:</h2>
      {carts.length === 0 ? (
        <div className="flex justify-center flex-col p-20 items-center text-xl text-gray-500">
             <i className="fa-brands fa-opencart w-10 h-10 "></i>
            Your cart is empty.
            </div>
      ) : (
        <>
          {carts.map((item) => (
            <div key={item.id} className="">
              <div className="flex bg-base-100 items-center gap-4 mb-4 border-gray-100 border p-4 rounded-2xl shadow-md">
                <div className="w-12 h-12 rounded-full">
                  <img
                    className="w-full h-full object-cover"
                    src={item.image}
                    alt="Product"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <div className="text-lg font-bold text-gray-500">
                    ${item.price}
                  </div>
                </div>
                <button onClick={() => handleDeleteItem(item)} className="btn btn-error hover:btn-secondary rounded-full btn-sm">
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center mt-6 border-t border-gray-300 pt-4">
            <div className=" text-2xl font-bold text-gray-500">Total :</div>
            <div className="text-xl font-extrabold ">
              ${totalPrice.toFixed(2)}
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <button
              onClick={handleRemoveFromCart}
              className=" btn bg-linear-to-r from-red-400 via-orange-400 to-amber-400 text-white w-full font-medium text-lg py-6  rounded-full border-none shadow-xl shadow-red-500/30"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};
export default Cart;
