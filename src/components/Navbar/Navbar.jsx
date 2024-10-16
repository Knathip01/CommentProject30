import React from "react";
import Logo from "../../assets/logo.png";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";//นำเข้าDarkmode
import { Link } from "react-router-dom"; // นำเข้า Link จาก react-router-dom


//นำpagesเข้าต้องimport-router-dom
const Menu = [
  { id: 1, name: "🏠Home", link: "/" },
  { id: 2, name: "💲Beetle", link: "/beetle" },
  { id: 3, name: "💲BeetlePlier", link: "/Pliers-beetle" },
  { id: 4, name: "💲Beetle Food", link: "/beetle-food" },
  { id: 5, name: "💲BeetleFeedingEquipment", link: "/beetle-feeding-equipment" },
];


// เปลี่ยนชื่อที่นี่
const DropdownLinks = [
  { id: 1, name: "🔜Beetles Coming Soon", link: "/trending-products" }, 
  { id: 2, name: "🛒ShopBeetle", link: "/best-selling" }, 
  { id: 3, name: "🎮Beetle Feeding Game", link: "/top-rated" },
  { id: 4, name: "🛒Order List", link: "/Order" },
];

//Upper Navbar: มีโลโก้, ชื่อเว็บไซต์, ปุ่มสั่งซื้อ และปุ่มสลับโหมดมืด-สว่าง
//Lower Navbar: แสดงเมนูนำทางและเมนู dropdown


//ปุ่มสั่งซื้อ (Order Button): มีปุ่มที่เมื่อกดจะเรียกฟังก์ชัน handleOrderPopup เพื่อเปิด popup สำหรับการสั่งซื้อ โดยปุ่มนี้ประกอบด้วย:
//ข้อความ "Order" ที่จะปรากฏเมื่อผู้ใช้เลื่อนเมาส์ไปวาง (group-hover)
//ไอคอนรถเข็น (FaCartShopping)

//ปุ่มสลับโหมดมืด-สว่าง (Dark Mode Switch): ใช้ component DarkMode เพื่อให้ผู้ใช้สามารถสลับโหมดธีมของเว็บไซต์ระหว่างโหมดมืด (dark) และสว่าง (light)


//ลิงก์ Dropdown: แสดงเมนู dropdown ซึ่งจะปรากฏเมื่อผู้ใช้เลื่อนเมาส์ไปวาง (group-hover) มีการแสดงลิงก์เพิ่มเติมจาก DropdownLinks
//ไอคอน FaCaretDown จะหมุนเมื่อ dropdown เปิดอยู่
const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* Upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <Link to="/" className="font-bold text-2xl sm:text-3xl flex gap-2">
            <img src={Logo} alt="Logo" className="w-10" />
            ShopBeetle
          </Link>

          {/* Order Button */}
          <div className="flex justify-between items-center gap-4">
            <button
              onClick={handleOrderPopup}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">Order</span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>

            {/* Darkmode Switch */}
            <DarkMode />
          </div>
        </div>
      </div>

      {/* Lower Navbar */}
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <Link
                to={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </Link>
            </li>
          ))}
          {/* Dropdown Links */}
          <li className="group relative cursor-pointer">
            <span className="flex items-center gap-[2px] py-2">
              Beetles Coming Soon
              <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
            </span>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <Link
                      to={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                    >
                      {data.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
//ฟังก์ชัน Navbar นี้ใช้สำหรับสร้างแถบเมนูที่สามารถทำงานได้ทั้งในโหมดสว่างและมืด มีปุ่มสำหรับสั่งซื้อสินค้า ปุ่มสลับธีม และเมนูหลักพร้อมลิงก์ dropdown 
//เพื่อแสดงลิงก์เพิ่มเติม โดยใช้การจัดการสไตล์ CSS และเอฟเฟกต์การเคลื่อนไหวเพื่อเพิ่มความสวยงามและประสบการณ์การใช้งานที่ดีขึ้น