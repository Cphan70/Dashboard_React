import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { Button } from '../components';
import { useStateContext } from '../contexts/ContextProvider';
import { chatData } from '../data/dummy';

const Chat = () => {
  const { currentColor, handleCancelClick } = useStateContext();
  return (
    <div className="nav-item absolute right-5 md:right-52 top-16 bg-white dark:bg-[#42464D] p-4 rounded-lg w-96">
      <div className="flex justify-between items-center p-4">
        <p className="font-semibold text-lg">Messages</p>
        <button
          type="button"
          onClick={() => {
            handleCancelClick('chat');
          }}
          style={{ color: 'rgb(153, 171, 180)', borderRadius: '50%' }}
          className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
        >
          <MdOutlineCancel />
        </button>
      </div>
      <div className="mt-5 p-2">
        {chatData.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-2 border-b-1 border-color cursor-pointer"
          >
            <img className="rounded-full h-10 w-10" src={item.image} alt="" />
            <div>
              <p className="font-semibold dark:text-gray-200">{item.message}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {item.desc}
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-xs">
                {item.time}
              </p>
            </div>
          </div>
        ))}
        <div className="mt-5">
          <Button
            text="See all messages"
            color="white"
            bgColor={currentColor}
            width="full"
            borderRadius="10px"
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
