 

const View = () => {
    return (
        <div className="bg-linear-to-r from-red-400 via-orange-400 to-amber-400 py-30">
              
              <div className="mx-auto text-center">
                  <h2 className="text-4xl font-bold text-white">Ready to Transform Your Workflow?</h2> <br />
                  <p className="text-gray-200">Join thousands of professionals who are already using Digitools to work smarter.</p>
                  <p className="text-gray-200">Start your free trial today.</p>
              </div>
              <div className="flex items-center justify-center gap-4 mt-10">
                <button className="bg-white text-orange-500 hover:bg-gray-200 font-bold rounded-full py-2 px-4 ">
                   Explore Products
                </button>
                <button className=" bg-orange-500 hover:bg-amber-700 text-white font-bold  rounded-full py-2 px-4 ">
                   View Pricing
                </button>
              </div>
              <div className="text-center mt-4 text-gray-200">
                <p>14-day free trial • No credit card required • Cancel anytime</p>
              </div>
        </div>
    );
};

export default View;