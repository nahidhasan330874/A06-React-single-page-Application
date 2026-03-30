import { use } from "react";
import ModelsCard from "./ModelsCard";

 
const Cards = ({ cardsData }) => {
    const cards = use(cardsData);
    console.log(cards);
   
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
                    cards.map((card) => ( 
                   
                        <ModelsCard key={card.id} card={card}/>
                     
                ))
                }

            </div>

        </div>
    );
};

export default Cards;