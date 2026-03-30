const NavBar = () => {
  return (
    <div className="navbar flex justify-around bg-base-100 px-10 py-5 shadow-sm ">
      <div>
        <div className="flex items-center gap-1 font-bold text-xl">
           <h1 className="text-3xl font-bold bg-linear-to-r from-red-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">DigiTools</h1>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-5 px-1 text-lg">
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Testimonials</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-5">
         <button className="btn w-11 h-10 border-none text-lg rounded-full bg-base-100"> <i class="fa-solid fa-cart-shopping"></i></button>
         <button className="btn border-none text-lg rounded-full bg-base-100">Login</button>
        <a className="btn bg-red-500 rounded-full text-lg text-white">Get Started</a>
      </div>
    </div>
  );
};

export default NavBar;