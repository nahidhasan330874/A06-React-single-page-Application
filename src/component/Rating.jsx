 
 const Rating = () => {
    return (
        <div className="flex items-center gap-10 justify-center py-15 bg-linear-to-r from-red-400 via-orange-400 to-amber-400">
             <div className="border-r border-orange-300 flex flex-col items-center px-20 gap-2">
                  <h2 className=" text-white text-6xl font-bold">50K+</h2>
                 <p className="text-[#e0d1b9] text-2xl">Active Users</p>
            </div>

             <div className="border-r border-orange-300 flex flex-col items-center  gap-2 px-20" >
               <h2 className="text-white text-6xl font-bold">200+</h2>
               <p className=" text-[#e0d1b9] text-2xl">Premium Tools</p>
             </div>
             <div className="flex flex-col items-center  gap-2 px-20" >
                 <h2 className="text-white text-6xl font-bold">4.9</h2>
                 <p className="text-[#e0d1b9] text-2xl">Rating</p>
             </div>
        </div>
    );
 };
 
 export default Rating;