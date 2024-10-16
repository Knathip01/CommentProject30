import React from "react";
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa";


//ProductsData เป็นข้อมูลจำลองของสินค้า 3 ชนิด แต่ละสินค้าเก็บข้อมูลเช่น id, img (รูปภาพสินค้า), title 
//(ชื่อสินค้า), และ description (คำอธิบาย)
const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "ด้วงกว่างญี่ปุ่น",
    description:
      "ชื่อวิทยาศาสตร์ว่า Allomyrina dichotoma ",
  },
  {
    id: 2,
    img: Img2,
    title: "ด้วงกว่างเฮอร์คิวลีส",
    description:
      "ชื่อวิทยาศาสตร์ว่า Dynastes hercules",
  },
  {
    id: 3,
    img: Img3,
    title: "ด้วงกว่างช้างเผือก",
    description:
      "ชื่อวิทยาศาสตร์ Xylotrupes gideon",
  },
];



//แสดงส่วนหัว (Header) ของคอมโพเนนต์ มีข้อความบอกชื่อรายการสินค้า และข้อมูลเพิ่มเติม
const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Beetle Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            อันดับด้วงกว่างยอดฮิตที่มีการซื้อมากที่สุด
          </p>
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (//แสดงรายการสินค้าด้วยการใช้ ProductsData.map() เพื่อวนลูปแสดงข้อมูลสินค้าต่าง ๆ
//ใช้ grid เพื่อจัดสินค้าในรูปแบบ grid ให้สามารถแสดงผลได้ในหลายคอลัมน์ ขึ้นอยู่กับขนาดหน้าจอ (เช่น บนหน้าจอมือถือ, จอขนาดกลาง และจอขนาดใหญ่)
//สินค้าแต่ละรายการจะแสดงเป็นการ์ดที่มีการตกแต่งด้วย CSS เพื่อให้สวยงามและสามารถทำ animation เมื่อมีการ hover
            <div
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            >
              {/* image section */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt=""//แสดงรูปภาพสินค้าโดยใช้ <img> ซึ่งดึงรูปภาพจาก data.img ในแต่ละรายการของ ProductsData
                  //มีการแสดงเรตติ้ง 5 ดาว ด้วย FaStar จาก react-icons
                 // แสดงชื่อสินค้า (data.title) และคำอธิบาย (data.description)
                  //ปุ่ม Order Now ถูกเรียกใช้ฟังก์ชัน handleOrderPopup เมื่อกดปุ่ม เพื่อเปิด popup สำหรับการสั่งซื้อสินค้า
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                  onClick={handleOrderPopup}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
//โค้ดนี้แสดงรายการสินค้าที่ถูกจัดในรูปแบบการ์ด แต่ละการ์ดมีรูปภาพสินค้า 
//ชื่อ คำอธิบาย และปุ่มสั่งซื้อ พร้อมทั้งมีการใช้ CSS และไอคอนในการตกแต่งให้ดูน่าสนใจ