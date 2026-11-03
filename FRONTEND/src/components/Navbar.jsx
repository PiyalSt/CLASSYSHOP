import { useEffect, useRef, useState } from "react";
import assets from "../assets/assets";
import { Button, IconButton, Tooltip } from "@mui/material";
import { FiLogIn, FiSearch, FiUser } from "react-icons/fi";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiMenuFold2Line, RiRepeatLine } from "react-icons/ri";
import { IoRocketOutline, IoSettingsOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [showDropdown, setDropdown] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);

  // useRef
  const dropdownRef = useRef(null);
  const categoryRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (categoryRef.current && !categoryRef.current.contains(event.target)) {
        setOpenCategory(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative">
      {/* Top Header */}
      <div className="text-center py-4 border-t-2 border-b-2 border-gray-200 mt-1">
        <p className="text-xs sm:text-sm text-gray-800 font-medium tracking-wider">
          Get up to 50% off new season styles, Limited time only
        </p>
      </div>

      {/* Navbar */}
      <div className="w-full flex items-center justify-between border-b-2 border-gray-200 py-2 px-4 sm:px-10 md:px-16 lg:px-20">
        <div className="w-20">
          <img src={assets.logo} alt="ClassyShop.png" />
        </div>
        <div className="w-2xl">
          <div className="flex items-center gap-2 border-2 rounded-md py-2 px-4 border-gray-200 bg-gray-100">
            <input
              className="w-full outline-0 text-gray-900"
              type="text"
              placeholder="Search products...."
            />
            <IconButton className="">
              <FiSearch className="text-xl " />
            </IconButton>
          </div>
        </div>
        <div className="flex gap-4">
          <Tooltip title="Wishlist">
            <IconButton className="relative">
              <FaRegHeart className="text-2xl text-gray-800" />
              <div className="w-5 h-5 rounded-full bg-orange-400 font-medium text-xs text-white flex items-center justify-center absolute top-0 -right-1">
                3
              </div>
            </IconButton>
          </Tooltip>
          <Tooltip title="Cart">
            <IconButton className="relative">
              <AiOutlineShoppingCart className="text-2xl text-gray-800" />
              <div className="w-5 h-5 rounded-full bg-orange-400 font-medium text-xs text-white flex items-center justify-center absolute top-0 -right-1">
                3
              </div>
            </IconButton>
          </Tooltip>
          <Tooltip title="Compare">
            <IconButton className="relative">
              <RiRepeatLine className="text-2xl text-gray-800" />
              <div className="w-5 h-5 rounded-full bg-orange-400 font-medium text-xs text-white flex items-center justify-center absolute top-0 -right-1">
                3
              </div>
            </IconButton>
          </Tooltip>
          <div className="relative ">
            <IconButton onClick={() => setDropdown(!showDropdown)}>
              <FiUser className="text-2xl text-gray-800" />
            </IconButton>
            {showDropdown && (
              <div
                ref={dropdownRef}
                className="absolute w-70 right-0 bg-gray-100 py-3 px-4 rounded-md z-20"
              >
                <div className="w-full flex flex-col gap-3">
                  <Button className="w-full gap-2 hover:bg-gray-200/80! text-gray-800! rounded-md">
                    <FaRegUser className="text-sm" />
                    <p>Profile</p>
                  </Button>
                  <Button className="w-full gap-2 hover:bg-gray-200/80! text-gray-800! rounded-md">
                    <FiLogIn className="text-lg" />
                    <p>Login</p>
                  </Button>
                  <Button className="w-full gap-2 hover:bg-gray-200/80! text-gray-800! rounded-md">
                    <IoSettingsOutline className="text-lg" />
                    <p>Settings</p>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Menu */}
      <div className="w-full flex items-center justify-between py-2 px-4 sm:px-10 md:px-16 lg:px-20 border-b-2 border-gray-200">
        <div className="flex items-center gap-2">
          <div className="border-r-2 border-gray-200">
            <Button
              onClick={() => setOpenCategory(!openCategory)}
              className="text-gray-800! mr-2!"
              startIcon={<RiMenuFold2Line />}
            >
              Shop by category
            </Button>
          </div>
          <div className="space-x-2!">
            <Button className="text-gray-800!">Home</Button>
            <Button className="text-gray-800!">Fashion</Button>
            <Button className="text-gray-800!">New Arrivals</Button>
            <Button className="text-gray-800!">All Brands</Button>
            <Button className="text-gray-800!">More</Button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <IoRocketOutline />
          Free International Delivery
        </div>
      </div>

      {/* Left Sidebar */}
      {openCategory && (
        <div
          ref={categoryRef}
          className="absolute -top-2 w-80 h-screen bg-gray-100 px-8 py-12 z-50"
        >
          <div className="w-full relative">
            <IconButton onClick={() => setOpenCategory(false)} className="absolute -top-6 right-0 text-2xl cursor-pointer hover:text-orange-400">
              <RxCross2 />
            </IconButton>
          </div>
          <h2 className="text-2xl text-center font-medium border-b-2 border-gray-200 py-2 text-gray-800">
            ClassyShop
          </h2>

          <div className="py-4 space-y-2!">
            <Button className="w-full text-gray-800!">Fashion</Button>
            <Button className="w-full text-gray-800!">Fashion</Button>
            <Button className="w-full text-gray-800!">Fashion</Button>
            <Button className="w-full text-gray-800!">Fashion</Button>
            <Button className="w-full text-gray-800!">Fashion</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
