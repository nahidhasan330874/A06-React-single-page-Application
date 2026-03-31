 

const Steps = () => {
    return (
        <div className ="bg-gray-100">
              <div className="py-20 max-w-7xl mx-auto ">
                  {/* heading text */}
               <div className="">
                <h2 className="text-5xl font-bold text-center mb-4"> Get Started in 3 Steps</h2>
                <p className="text-center mb-8 text-gray-500">Start using premium digital tools in minutes, not hours.</p>
               </div>

              {/* cards */}
                <div>
                    <div className="grid md:grid-cols-3 gap-10 px-6"> 
                        <div className="bg-white rounded-2xl p-6 text-center shadow-md pb-15">
                             <div className="flex justify-end">
                                <div className=" w-7 bg-linear-to-r from-red-400 via-orange-400 to-amber-400  text-white rounded-full   mb-4">
                                <span className="font-bold text-lg">1</span>
                            </div>
                             </div>
                            <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-4">
                                <i class="fa-regular fa-user text-4xl text-orange-500"></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-2"> Create Account</h3>
                            <p className="text-gray-500"> Sign up for free in seconds. No credit card <br />required to get started.</p>
                        </div>
                         <div className="bg-white rounded-2xl p-6 text-center shadow-md">
                             <div className="flex justify-end">
                                <div className=" w-7  bg-linear-to-r from-red-400 via-orange-400 to-amber-400   text-white rounded-full   mb-4">
                                <span className="font-bold text-lg">2</span>
                            </div>
                             </div>
                            <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-4">
                                <i class="fa-brands fa-buffer text-4xl text-orange-500"></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-2"> Choose Products</h3>
                            <p className="text-gray-500">Browse our catalog and select the tools <br />that fit your needs. </p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 text-center shadow-md">
                             <div className="flex justify-end">
                                <div className=" w-7 bg-linear-to-r from-red-400 via-orange-400 to-amber-400   text-white rounded-full   mb-4">
                                <span className="font-bold text-lg">3</span>
                            </div>
                             </div>
                            <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-4">
                             <i class="fa-solid fa-rocket text-4xl text-orange-500"></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Start Creating</h3>
                            <p className="text-gray-500"> Download and start using your <br /> premium   tools immediately.</p>
                        </div>
                    </div>

                </div>
              </div>
            
        </div>
    );
};

export default Steps;