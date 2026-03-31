import { useState } from 'react';
import { toast } from 'react-toastify';

const ModelsCard = ({ card, carts, setCarts }) => {
     const [isCardsData, setIsCardsData] = useState(false);
     const handleAddToCart = () => {
        setIsCardsData(true);
        setCarts([...carts, card]);
         
        toast.success(`${card.name} added to cart!` );


     }
    return (
          <div className=" card p-5 rounded-2xl shadow-lg border overflow-hidden border-gray-200">
                        <div className="flex flex-col justify-between">
                           <p className="flex justify-end ">  <span className=" inline-flex items-center bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-medium px-4 py-1 rounded-full border-none">{card.tag}</span></p>

                            <div className=" flex justify-between ">
                                <img src={card.image} alt="Shoes"  className="  rounded-full w-12"/>
                               
                            </div>
                            <div className="card-body space-y-3">
                                 <h2 className="font-bold text-2xl">{card.name}</h2>
                                <p  className=" line-clamp-2 text-[#627382]">{card.description}</p>
                                <p> <span className="font-bold text-2xl">${card.price}</span>/{card.period}</p>

                                <div>   
                                    <ul className="list-inside list-none space-y-1  text-[#627382] ">
                                        {card.features.map((feature, index) => (
                                           <li  key={index}> <span className="text-green-500"> <i class="fa-solid fa-check"></i></span> {feature}</li>
                                        ))}
                                    </ul>

                                </div>
                                 
                                <button onClick={handleAddToCart}  className="btn bg-linear-to-r from-red-400 via-orange-400 to-amber-400 text-white  rounded-4xl shadow-xl shadow-red-500/30 border-none"> { isCardsData ? 'Added to Cart' : 'Buy Now'  }</button>
                                
                            </div>

                        </div>

                    </div>
    );
};

export default ModelsCard;