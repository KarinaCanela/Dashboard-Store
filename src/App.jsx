import { RiMenu2Line, 
  RiUser3Line,
  RiAddLine,
  RiCloseLine,
  RiPieChartLine } from "react-icons/ri";

import Sidebar from "./components/shared/sidebar"
import { useState } from "react";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu={showMenu}/>
      {/*Menu movil*/}
      <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex 
      items-center justify-between rounded-tl-xl rounded-tr-xl">
        <button className="p-2"><RiUser3Line/></button>
        <button className="p-2"><RiAddLine/></button>
        <button className="p-2"><RiPieChartLine/></button>
        <button className="text-white p-2" onClick={toggleMenu}>
          {showMenu ? <RiCloseLine/> : <RiMenu2Line/>} </button>
      </nav>
      <main className="lg:pl-28 grid grid-cols-1 lg:grid-cols-8">
        <div className="lg:col-span-6 ">hola1</div>
        <div className="lg:col-span-2 fixed lg:static right-0">Carrito</div>
      </main>
    </div>
  )
}

export default App
