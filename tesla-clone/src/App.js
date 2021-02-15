
import './App.css';
import Header from './Components/Header';
import Item from './Components/Item'

import Accessories from './Components/img/Desktop-Accessories.jpg';
import ModelS from './Components/img/Desktop-ModelS.jpeg';
import Model3 from './Components/img/Desktop-Model3.jpeg';
import ModelX from './Components/img/Desktop-ModelX.jpeg';
import ModelY from './Components/img/Desktop-ModelY.jpeg';
import SolarPanels from './Components/img/Desktop-SolarPanels.jpeg';
import SolarRoof from './Components/img/Desktop-SolarRoof.jpeg';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__itemsContainer">
        
        <Item
          title="Model S"
          desc="Order Online for Touchless Delivery"
          backgroundImg={ModelS}
          leftBtnTxt="ORDER NOW"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
          first
        />
         <Item
          title="Model Y"
          desc="Order Online for Touchless Delivery"
          backgroundImg={ModelY}
          leftBtnTxt="ORDER NOW"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Model 3"
          desc="Order Online for Touchless Delivery"
          backgroundImg={Model3}
          leftBtnTxt="ORDER NOW"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Model X"
          desc="Order Online for Touchless Delivery"
          backgroundImg={ModelX}
          leftBtnTxt="ORDER NOW"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />
       <Item
          title="Lowest Cost Solar Panels in America"
          desc="Money-back guarantee"
          backgroundImg={SolarPanels}
          leftBtnTxt="ORDER NOW"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
          
        />
        <Item
          title="Solar for New Roofs"
          desc="Money-back guarantee"
          backgroundImg={SolarRoof}
          leftBtnTxt="ORDER NOW"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Accessories"
          desc="Money-back guarantee"
          backgroundImg={Accessories}
          leftBtnTxt="ORDER NOW"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />
      </div>
    </div>
  );
}

export default App;
