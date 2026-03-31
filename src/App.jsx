 
 
 
import './App.css'
import Banner from './component/Banner'
import Cards from './component/Cards'
import Footer from './component/Footer'

import NavBar from './component/NavBar'
import Prodects from './component/Prodects'
import Rating from './component/Rating'
import Steps from './component/Steps'
 
 
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

     <Steps />
    <Prodects />
     <Footer />
      
   </>
  )
}

export default App
