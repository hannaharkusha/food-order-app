import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import MenuCard from "./components/MenuCard";
import React, {useState} from "react";
import Gallery from "./components/Gallery";
import Delivery from "./components/Delivery";

function App() {

    const [itemsInCart, setCart] = useState([]);


    const updateCartState = () => {
        console.log('added to cart');
    }


  return (
      <div className="App">
        <NavBar />
        <Landing slogan='Your culinary dream just a touch away' header ='Your Restaurant'/>
        <MenuCard handleAddClick={updateCartState}/>
        <Gallery />
        <Delivery />
      </div>
  );
}

export default App;
