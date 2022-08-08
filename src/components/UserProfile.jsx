import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { Button } from '../components';
import { useStateContext } from '../contexts/ContextProvider';
import { userProfileData } from '../data/dummy';
import avatar from '../data/avatar.jpg';

const UserProfile = () => {
  const { currentColor, handleCancelClick } = useStateContext();
  return (
    <div className="nav-item absolute right-0 top-16 bg-white dark:bg-[#42464D] p-4 rounded-lg w-96">
      <div className="flex justify-between items-center p-4">
        <p className="font-semibold text-lg">User Profile</p>
        <button
          type="button"
          onClick={() => {
            handleCancelClick('userProfile');
          }}
          style={{ color: 'rgb(153, 171, 180)', borderRadius: '50%' }}
          className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
        >
          <MdOutlineCancel />
        </button>
      </div>
      <div className="flex gap-4 p-4 items-center">
        <img className="rounded-full w-24 h24" src={avatar} alt="avatar" />
        <div>
          <p className="font-semibold text-xl dark:text-gray-200">
            Michael Roberts
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Administrator
          </p>
          <p className="text-sm text-gary-500  font-semibold dark:text-gary-400">
            vanchiphan70@gmail.com
          </p>
        </div>
      </div>
      <div className="mt-5 p-2">
        {userProfileData.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-2 border-b-1 border-color cursor-pointer"
          >
            <button
              type="button"
              style={{ color: item.color, backgroundColor: item.iconBg }}
              className="text-xl rounded-lg p-3 hover:bg-light-gray"
            >
              {item.icon}
            </button>
            <div>
              <p className="font-semibold dark:text-gray-200">{item.title}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
        <div className="mt-5">
          <Button
            text="Logout"
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

export default UserProfile;
