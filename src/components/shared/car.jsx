import React from 'react'
import { RiCloseLine, RiDeleteBin6Line } from "react-icons/ri";

const Car = (props) => {
    
    const { showOrder, setShowOrder } = props
    return (
        <div className={`lg:col-span-2 fixed top-0 bg-[#1F1D2B] lg:right-0  lg:w-96 w-full h-full transition-all
            z-50 ${showOrder ? "right-0" : "-right-full"}`}>
            {/* Orders */}
            <div className="relative pt-16 lg:pt-2 text-gray-300 p-8 h-full">
                <RiCloseLine onClick={() => setShowOrder(false)} className="lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837]
                rounded-full text-xl"/>
                <h1 className="text-2xl my-4">Orden #1234</h1>
                <div className="flex items-center gap-4 flex-wrap mb-2">
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
                    <div className="h-[350px] md:h-[650px] lg:h-[430px] overflow-scroll">
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
                                        <RiDeleteBin6Line className="text-red-500" /></button>
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
                                        <RiDeleteBin6Line className="text-red-500" /></button>
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
                                        <RiDeleteBin6Line className="text-red-500" /></button>
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
                                        <RiDeleteBin6Line className="text-red-500" /></button>
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
    )
}

export default Car