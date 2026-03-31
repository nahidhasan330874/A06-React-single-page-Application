 
 
 
import { useState } from 'react'
import './App.css'
import Banner from './component/Banner'
import Cards from './component/Cards'
import Footer from './component/Footer'

import NavBar from './component/NavBar'
import Prodects from './component/Prodects'
import Rating from './component/Rating'
import Steps from './component/Steps'
import View from './component/View'
import Cart from './component/Cart'
 
 
const createCard = async () => {
     const res = await fetch("/cards.json");
     return res.json();
  
}
const cardsData = createCard();


function App() {
   const [activeTab, setActiveTab] = useState("Products");
   const [carts, setCarts] = useState([]);
     
  return (
   <> 
       <NavBar carts={carts}   />
       <Banner />
       <Rating />
      
      
      <div className="tabs tabs-box justify-center mt-30  bg-transparent border-none ">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-3xl text-xl w-40 "
          aria-label="Products"
         onClick={() => setActiveTab("Products")}
         defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-3xl text-xl w-40"
          aria-label={`Cart (${carts.length })`}
          onClick={() => setActiveTab("Cart")}
        />
         
      </div>
   { activeTab === "Products" && <Cards cardsData={cardsData} carts={carts} setCarts={setCarts} /> }

   { activeTab === "Cart" && <Cart carts={carts} setCarts={setCarts} /> }

     <Steps />
     <Prodects />
     <View />
     <Footer />
      
   </>
  )
}

export default App
