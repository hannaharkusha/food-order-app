import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import MenuCard from "./components/MenuCard";
import React, {useState} from "react";
import Gallery from "./components/Gallery";
import Delivery from "./components/Delivery";

function App() {

    const [itemsInCart, setCart] = useState([]);

    const workingHours = [
                            ["Mo", "14-23"],
                            ["Tue", "14-23"],
                            ["We", "14-23"],
                            ["Th", "14-23"],
                            ["Fr", "14-23"],
                            ["Se", "10-23"],
                            ["Su", "10-23"]];

    const location = "Ciemna 4-6, 31-053 Cracow"
    const number = "(48) 000 000 000"

    const updateCartState = () => {
        console.log('added to cart');
    }


  return (
      <div className="App">
        <NavBar />
        <Landing slogan='Your culinary dream just a touch away' header ='Your Restaurant'/>
        <MenuCard handleAddClick={updateCartState}/>
        <Gallery />
        <Delivery hours={workingHours} phone={number} location={location}/>
      </div>
  );
}

export default App;
