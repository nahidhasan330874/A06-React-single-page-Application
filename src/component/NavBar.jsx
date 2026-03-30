const NavBar = () => {
  return (
    <div className="navbar flex justify-around bg-base-100 px-10 py-5">
      <div>
        <div className="flex items-center gap-1 font-bold text-xl">
           <h1 className="text-2xl font-bold">DigiTools</h1>
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
         <button className="btn w-11 h-10 border-none text-lg rounded-full"> <i class="fa-solid fa-cart-shopping"></i></button>
         <button className="btn border-none text-lg rounded-full">Login</button>
        <a className="btn bg-red-500 rounded-full text-white">Get in Touch</a>
      </div>
    </div>
  );
};

export default NavBar;