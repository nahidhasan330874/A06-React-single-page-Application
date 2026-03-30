import { use } from "react";

 
const Cards = ({ cardsData }) => {
    const cards = use(cardsData);
    console.log(cards);
    return (
        <div className="py-20">
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
            <div>

            </div>

        </div>
    );
};

export default Cards;