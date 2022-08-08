import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { cartData } from '../data/dummy';
import { Button } from '../components';
import { useStateContext } from '../contexts/ContextProvider';
const Cart = () => {
  const { currentColor, handleCancelClick } = useStateContext();
  return (
    <div className="bg-half-transparent w-full fixed nav-item top-0 right-0">
      <div className="float-right h-screen bg-white dark:bg-[#42464D] w-400 p-4">
        <div className="flex justify-between items-center p-4">
          <p className="font-semibold text-2xl">Shopping Cart</p>
          <button
            type="button"
            onClick={() => {
              handleCancelClick('cart');
            }}
            style={{ color: 'rgb(153, 171, 180)', borderRadius: '50%' }}
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="flex-col p-4">
          {cartData.map((item, index) => (
            <div
              key={index}
              className="flex leading-8 p-4 gap-5 border-b-1 border-color dark:border-gray-600"
            >
              <img className="rounded-lg h-80 w-24" src={item.image} alt="" />
              <div>
                <span className="font-semibold">{item.name}</span>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold">
                  {item.category}
                </p>
                <div className="flex gap-4 mt-2 items-center">
                  <p className="font-semibold text-lg">{item.price}</p>
                  <div className="flex items-center border-1 border-color border-r-0">
                    <p className="p-2 cursor-pointer border-r-1 border-color dark:border-gray-600 text-red-600">
                      <AiOutlineMinus />
                    </p>
                    <p className="p-2 border-r-1 border-color dark:border-gray-600 text-green-600">
                      0
                    </p>
                    <p className="p-2 cursor-pointer border-r-1 border-color dark:border-gray-600 text-green-600">
                      <AiOutlinePlus />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="flex items-center justify-between p-4 pt-0">
            <p className="text-gray-500 dark:text-gray-200">Subtitle</p>
            <p className="font-semibold">$890</p>
          </div>
          <div className="flex items-center justify-between p-4 pt-0">
            <p className="text-gray-500 dark:text-gray-200">Total</p>
            <p className="font-semibold">$890</p>
          </div>
        </div>
        <div className="ml-4 mt-5">
          <Button
            text="Place Order"
            color="white"
            bgColor={currentColor}
            borderRadius="10px"
            width="full"
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
