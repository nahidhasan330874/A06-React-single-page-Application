const Cart = ({ carts }) => {
 const totalPrice = carts.reduce((total, item) => total + item.price, 0);
  return (
    <div className="pb-20 max-w-7xl mx-auto p-6 rounded-lg mt-20">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2> 

      {
        carts.map( item =>  

            <div key={item.id} className="">
            
            <div className="flex bg-base-100 items-center gap-4 mb-4 border-gray-100 border p-4 rounded-lg shadow-md">  

                <div className="w-12 h-12 rounded-full"><img className="w-full h-full object-cover" src={item.image} alt="Product" /></div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <div className="text-lg font-bold text-gray-500">${item.price}</div>
            </div>
              <button className="btn btn-error hover:btn-secondary btn-sm">Remove</button>
            </div>
            
           </div>
            
           
        )
     }
      
     <div className="flex justify-between items-center mt-6 border-t border-gray-300 pt-4">
        <div className=" text-2xl font-bold text-gray-500">Total :</div>
        <div className="text-xl font-extrabold ">${totalPrice.toFixed(2)}</div>
     </div> 
     <div>
        <button className="bg-amber-200 hover:bg-amber-300 text-black font-bold py-2 px-4 rounded">Update Cart</button>
     </div>
         
    </div>
  );
}
export default Cart;
