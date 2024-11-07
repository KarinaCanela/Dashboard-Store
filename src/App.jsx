import { RiMenu2Line, 
  RiUser3Line,
  RiAddLine,
  RiCloseLine,
  RiPieChartLine,
  RiSearch2Line,
  RiArrowDownSLine,
  RiDeleteBin6Line } from "react-icons/ri";

import Sidebar from "./components/shared/sidebar"
import { useState } from "react";

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
      {/*Menu movil*/}
      <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex 
      items-center justify-between rounded-tl-xl rounded-tr-xl">
        <button className="p-2"><RiUser3Line/></button>
        <button className="p-2"><RiAddLine/></button>
        <button className="p-2" onClick={toggleOrder}><RiPieChartLine/></button>
        <button className="text-white p-2" onClick={toggleMenu}>
          {showMenu ? <RiCloseLine/> : <RiMenu2Line/>} </button>
      </nav>
      <main className="lg:pl-32 grid grid-cols-1 lg:grid-cols-8 p-4 pb-20">
        <div className="lg:col-span-6 md:p-8">
          <header className="">
            <div className="flex flex-col md:flex-row  md:justify-between md:items-center gap-4 mb-6">
              <div>
                <h1 className="text-2xl text-gray-300">Jeager Resto</h1>
                <p className="text-gray-500">4 noviembre 2024</p>
              </div>
              <form>
                <div className="w-full relative">
                  <RiSearch2Line className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300"/>
                  <input type="text" className="bg-[#1F1D2B] w-full py-2 pl-8 pr-4 rounded-lg text-gray-300 
                  outline-none pl-10" placeholder="Search" />
                </div>
              </form>
            </div>
            <nav className="text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6">
              <a href="#" className="relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute
              before:bg-[#ec7c6a] before:left-0 before:rounded-full before:bottom-[-1px] text-[#ec7c6a]">Hot dishes</a>
              <a href="#" className="py-2 pr-4">Cold dishes</a>
              <a href="#" className="py-2 pr-4">Soup</a>
              <a href="#" className="py-2">Grill</a>
            </nav>
          </header>
          <div className="flex items-center justify-between mb-9">
            <h2 className="text-xl text-gray-300">Choose Dishes</h2>
            <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg">
              <RiArrowDownSLine/>
              Dine in
            </button>
          </div>
          <div className="p-8 grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-gray-300
            text-center gap-2">
              <img src="bacalao_planchabg.png" className="w-55 h-55 object-cover -mt-20 shadow-2xl
              rounded-full" alt="" />
              <p className="text-xl">Bacalao con verduras a la plancha</p>
              <span className="text-gray-400">$180.00</span>
              <p className="text-gray-600">20 Platillos disponibles</p>
            </div>
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-gray-300
            text-center gap-2">
              <img src="cangrejo_currybg.png" className="w-55 h-55 object-cover -mt-20 shadow-2xl
              rounded-full" alt="" />
              <p className="text-xl">Crema de cangrejo con curry</p>
              <span className="text-gray-400">$260.00</span>
              <p className="text-gray-600">10 Platillos disponibles</p>
            </div>
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-gray-300
            text-center gap-2">
              <img src="empanadasbg.png" className="w-55 h-55 object-cover -mt-20 shadow-2xl
              rounded-full" alt="" />
              <p className="text-xl">Empanadas mixtas</p>
              <span className="text-gray-400">$80.00</span>
              <p className="text-gray-600">30 Platillos disponibles</p>
            </div>
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-gray-300
            text-center gap-2">
              <img src="hamburguesabg.png" className="w-55 h-55 object-cover -mt-20 shadow-2xl
              rounded-full" alt="" />
              <p className="text-xl">Hamburguesa con gajos de papa</p>
              <span className="text-gray-400">$150.00</span>
              <p className="text-gray-600">25 Platillos disponibles</p>
            </div>
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-gray-300
            text-center gap-2">
              <img src="ketobg.png" className="w-55 h-55 object-cover -mt-20 shadow-2xl
              rounded-full" alt="" />
              <p className="text-xl">Desayuno Keto</p>
              <span className="text-gray-400">$190.00</span>
              <p className="text-gray-600">25 Platillos disponibles</p>
            </div>
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-gray-300
            text-center gap-2">
              <img src="pastabg.png" className="w-55 h-55 object-cover -mt-20 shadow-2xl
              rounded-full" alt="" />
              <p className="text-xl">Pasta con camarones</p>
              <span className="text-gray-400">$180.00</span>
              <p className="text-gray-600">20 Platillos disponibles</p>
            </div>
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-gray-300
            text-center gap-2">
              <img src="pollo_ensaladabg.png" className="w-55 h-55 object-cover -mt-20 shadow-2xl
              rounded-full" alt="" />
              <p className="text-xl">Pollo a la plancha con ensalada</p>
              <span className="text-gray-400">$160.00</span>
              <p className="text-gray-600">20 Platillos disponibles</p>
            </div>
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-gray-300
            text-center gap-2">
              <img src="tacos_camaronbg.png" className="w-55 h-55 object-cover -mt-20 shadow-2xl
              rounded-full" alt="" />
              <p className="text-xl">Tacos de camaron</p>
              <span className="text-gray-400">$200.00</span>
              <p className="text-gray-600">20 Platillos disponibles</p>
            </div>
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-gray-300
            text-center gap-2">
              <img src="tortilla_espanolabg.png" className="w-55 h-55 object-cover -mt-20 shadow-2xl
              rounded-full" alt="" />
              <p className="text-xl">Tortilla española</p>
              <span className="text-gray-400">$150.00</span>
              <p className="text-gray-600">25 Platillos disponibles</p>
            </div>
          </div>
        </div>
        <div className={`lg:col-span-2 fixed lg:static top-0 bg-[#1F1D2B] w-full h-full transition-all 
          ${showOrder ? "right-0" : "-right-full"}`}>
          {/* Orders */}
          <div className="relative pt-16 text-gray-300 p-8 h-full">
            <RiCloseLine onClick={toggleOrder} className="absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837]
            rounded-full text-xl"/>
            <h1 className="text-2xl my-4">Orden #1234</h1>
            <div className="flex items-center gap-4 flex-wrap mb-8">
              <button className="bg-[#ec7c6a] text-white py-2 px-4 rounded-xl">Dine in</button>
              <button className="text-[#ec7c6a] border border-gray-500 py-2 px-4 rounded-xl">To Go</button>
              <button className="text-[#ec7c6a] border border-gray-500 py-2 px-4 rounded-xl">Delivery</button>
            </div>
            <div>
              <div className="grid grid-cols-6 mb-4 p-4">
                <h5 className="col-span-4">Item</h5>
                <h5>Qty</h5>
                <h5>Price</h5>
              </div>
              <div className="h-[450px] overflow-scroll">
                <div className="bg-[#262837] p-4 rounded-xl mb-4">
                  <div className="grid grid-cols-6 mb-2">
                    <div className="col-span-4 flex items-center gap-2">
                      <img src="bacalao_planchabg.png" className="w-14 h-14 object-cover" alt="" />
                      <div>
                        <h5 className="text-sm">Bacalao con verd...</h5>
                        <p className="text-xs text-gray-500">$180.00</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <span>2</span>
                    </div>
                    <div>
                      <span>$360.00</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-6 items-center gap-2">
                    <form className="col-span-5">
                      <input type="text" className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none"
                      placeholder="Order note..." />

                    </form>
                    <div>
                      <button className="border border-red-500 p-2 rounded-lg">
                        <RiDeleteBin6Line className="text-red-500"/></button>
                    </div>
                  </div>
                </div>
                <div className="bg-[#262837] p-4 rounded-xl mb-4">
                  <div className="grid grid-cols-6 mb-2">
                    <div className="col-span-4 flex items-center gap-2">
                      <img src="bacalao_planchabg.png" className="w-14 h-14 object-cover" alt="" />
                      <div>
                        <h5 className="text-sm">Bacalao con verd...</h5>
                        <p className="text-xs text-gray-500">$180.00</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <span>2</span>
                    </div>
                    <div>
                      <span>$360.00</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-6 items-center gap-2">
                    <form className="col-span-5">
                      <input type="text" className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none"
                      placeholder="Order note..." />

                    </form>
                    <div>
                      <button className="border border-red-500 p-2 rounded-lg">
                        <RiDeleteBin6Line className="text-red-500"/></button>
                    </div>
                  </div>
                </div>
                <div className="bg-[#262837] p-4 rounded-xl mb-4">
                  <div className="grid grid-cols-6 mb-2">
                    <div className="col-span-4 flex items-center gap-2">
                      <img src="bacalao_planchabg.png" className="w-14 h-14 object-cover" alt="" />
                      <div>
                        <h5 className="text-sm">Bacalao con verd...</h5>
                        <p className="text-xs text-gray-500">$180.00</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <span>2</span>
                    </div>
                    <div>
                      <span>$360.00</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-6 items-center gap-2">
                    <form className="col-span-5">
                      <input type="text" className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none"
                      placeholder="Order note..." />

                    </form>
                    <div>
                      <button className="border border-red-500 p-2 rounded-lg">
                        <RiDeleteBin6Line className="text-red-500"/></button>
                    </div>
                  </div>
                </div>
                <div className="bg-[#262837] p-4 rounded-xl mb-4">
                  <div className="grid grid-cols-6 mb-2">
                    <div className="col-span-4 flex items-center gap-2">
                      <img src="bacalao_planchabg.png" className="w-14 h-14 object-cover" alt="" />
                      <div>
                        <h5 className="text-sm">Bacalao con verd...</h5>
                        <p className="text-xs text-gray-500">$180.00</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <span>2</span>
                    </div>
                    <div>
                      <span>$360.00</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-6 items-center gap-2">
                    <form className="col-span-5">
                      <input type="text" className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none"
                      placeholder="Order note..." />

                    </form>
                    <div>
                      <button className="border border-red-500 p-2 rounded-lg">
                        <RiDeleteBin6Line className="text-red-500"/></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 bg-[#262837] w-full left-0 p-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400">Discount</span>
                <span>$0.00</span>
              </div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-gray-400">SubTotal</span>
                <span>$500.00</span>
              </div>
              <button className="bg-[#ec7c6a] w-full py-2 px-4 rounded-lg">
                Continue to Payment
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
