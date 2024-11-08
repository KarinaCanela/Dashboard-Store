import {
  RiMenu2Line,
  RiUser3Line,
  RiAddLine,
  RiCloseLine,
  RiPieChartLine,
  RiArrowDownSLine
} from "react-icons/ri";

import Sidebar from "./components/shared/sidebar"
import { useState } from "react";
import Car from "./components/shared/car";
import Header from "./components/shared/header";
import Card from "./components/shared/card";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false)
  }

  const toggleOrder = () => {
    setShowOrder(!showOrder)
    setShowMenu(false)
  }

  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu={showMenu}/>
      <Car showOrder={showOrder} setShowOrder={setShowOrder} />
      {/*Menu movil*/}
      <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex 
      items-center justify-between rounded-tl-xl rounded-tr-xl">
        <button className="p-2"><RiUser3Line /></button>
        <button className="p-2"><RiAddLine /></button>
        <button className="p-2" onClick={toggleOrder}><RiPieChartLine /></button>
        <button className="text-white p-2" onClick={toggleMenu}>
          {showMenu ? <RiCloseLine /> : <RiMenu2Line />} </button>
      </nav>
      <main className="lg:pl-24 lg:pr-96 pb-20">
        <div className="md:p-8 p-4">
          <Header />
          <div className="flex items-center justify-between mb-9">
            <h2 className="text-xl text-gray-300">Choose Dishes</h2>
            <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg">
              <RiArrowDownSLine />
              Dine in
            </button>
          </div>
          <div className="p-8 grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-3">
            <Card
              img="bacalao_planchabg.png"
              description="Bacalao con verduras a la plancha"
              price="$180.00"
              inventory="20" />
            <Card
              img="cangrejo_currybg.png"
              description="Crema de cangrejo con curry"
              price="$180.00"
              inventory="20" /><Card
              img="empanadasbg.png"
              description="Empanadas mixtas"
              price="$180.00"
              inventory="20" />
            <Card
              img="hamburguesabg.png"
              description="Hamburguesas con papas"
              price="$180.00"
              inventory="20" />
            <Card
              img="ketobg.png"
              description="Desayuno Keto"
              price="$180.00"
              inventory="20" />
            <Card
              img="pastabg.png"
              description="Pasta con camarones"
              price="$180.00"
              inventory="20" />
            <Card
              img="pollo_ensaladabg.png"
              description="Pollo a la plancha con ensalada"
              price="$180.00"
              inventory="20" />
            <Card
              img="tacos_camaronbg.png"
              description="Tacos de camaron"
              price="$180.00"
              inventory="20" />
            <Card
              img="tortilla_espanolabg.png"
              description="Tortilla española"
              price="$180.00"
              inventory="20" />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
