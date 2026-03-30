import { use } from "react";

 
const Cards = ({ cardsData }) => {
    const cards = use(cardsData);
    console.log(cards);
    const [isCardsData, setIsCardsData] = useState([false]);
    return (
        <div className="py-20 max-w-7xl mx-auto ">
           {/* card heading text */}
            <div className="text-center py-10">
                <h2 className="text-5xl font-bold ">Premium Digital Tools</h2>
                <p className="text-lg text-gray-600 mt-4">
                    Choose from our curated collection of premium digital products designed
                </p>
                <p className="text-lg text-gray-600">
                    to elevate your projects and boost your productivity.
                </p>
            </div>


            {/* cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 ">
                {
                    cards.map((card) => ( <div className=" card p-5 rounded-2xl shadow-lg border overflow-hidden border-gray-200">
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
                                 
                                <button onClick={() => setIsCardsData(!isCardsData)}  className="btn bg-linear-to-r from-red-400 via-orange-400 to-amber-400 text-white rounded-4xl shadow-xl shadow-red-500/30 border-none"> { isCardsData ? 'Added to Cart' : 'Add to Cart'  }</button>
                                
                            </div>

                        </div>

                    </div>
                     
                ))
                }

            </div>

        </div>
    );
};

export default Cards;