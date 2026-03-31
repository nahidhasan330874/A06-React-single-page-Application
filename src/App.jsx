 
 
 
import './App.css'
import Banner from './component/Banner'
import Cards from './component/Cards'
import Footer from './component/Footer'

import NavBar from './component/NavBar'
import Rating from './component/Rating'
 
 
const createCard = async () => {
     const res = await fetch("/cards.json");
     return res.json();
  
}
const cardsData = createCard();


function App() {
     
  return (
   <> 
       <NavBar />
       <Banner />
       <Rating />
      
     <Cards cardsData={cardsData} />



     <Footer />
      
   </>
  )
}

export default App
