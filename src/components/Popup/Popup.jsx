import React, { useState } from "react";  
import { IoCloseOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";


//orderPopup และ setOrderPopup: รับค่าจากพาเรนต์คอมโพเนนต์ สำหรับตรวจสอบสถานะการแสดงผล Popup และการปิด/เปิด Popup
//useNavigate(): เรียกใช้ navigate เพื่อใช้งานฟังก์ชันการนำทาง
const Popup = ({ orderPopup, setOrderPopup }) => {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState("");

  
  //เมื่อกดปุ่ม "Order Now" จะปิด Popup (setOrderPopup(false))
//ถ้ามีการเลือกสินค้า (selectedProduct มีค่า) จะนำทางไปยัง URL ที่เกี่ยวข้องกับสินค้าที่เลือก เช่น /beetle, /pliers-beetle
  const handleOrderNow = () => {
    setOrderPopup(false);
    if (selectedProduct) {
      navigate(`/${selectedProduct}`);
    }
  };

  


 // return (
   // <>
   //   {orderPopup && (
    //    <div className="popup">
    //      {/* โครงสร้าง Popup และการแสดงข้อมูล */}
    //    </div>
 //การแสดง Popup จะเกิดขึ้นเมื่อ orderPopup เป็น true โดยมีโครงสร้างภายใน Popup ตามด้านล่าง


//<div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
 // <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
 //พื้นหลังโปร่งใส (bg-black/50) ครอบคลุมเต็มหน้าจอด้วยการใช้ h-screen และ w-screen
 //กล่อง Popup อยู่ตรงกลางของหน้าจอด้วย top-1/2 left-1/2 และมีเอฟเฟกต์การแสดงผลอย่างราบรื่น (duration-200)

 
 //<div className="flex items-center justify-between">
  //<div>
  //  <h1>Order Now</h1>
  //</div>
 // <div>
 //   <IoCloseOutline className="text-2xl cursor-pointer" onClick={() => setOrderPopup(false)} />
 // </div>
//</div>
//หัวเรื่อง (Order Now): แสดงข้อความหัวเรื่องของ Popup
//ปุ่มปิด Popup: ใช้ไอคอน IoCloseOutline ที่สามารถกดเพื่อปิด Popup


//<input type="text" placeholder="Name" className="w-full rounded-full border ... mb-4" />
//<input type="email" placeholder="Email" className="w-full rounded-full border ... mb-4" />
//<input type="text" placeholder="Address" className="w-full rounded-full border ... mb-4" />
//ฟิลด์สำหรับกรอก ชื่อ, อีเมล, และ ที่อยู่ ซึ่งแต่ละฟิลด์ถูกจัดรูปแบบด้วย className เพื่อให้แสดงเป็นอินพุตแบบกรอบโค้งและเข้ากับโทนสีที่กำหนด


//<select value={selectedProduct} onChange={(e) => setSelectedProduct(e.target.value)} className="w-full rounded-full border ... mb-4">
 // <option value="">Select Product</option>
 // <option value="beetle">Beetle</option>
 // <option value="pliers-beetle">Pliers Beetle</option>
  //<option value="beetle-food">Beetle Food</option>
//  <option value="beetle-feeding-equipment">Beetle Feeding Equipment</option>
//</select>
//ฟิลด์แบบเลือก (dropdown) ให้ผู้ใช้เลือกสินค้า โดยค่าที่ถูกเลือกจะถูกเก็บในสถานะ selectedProduct
//เมื่อผู้ใช้เลือกสินค้า ค่า selectedProduct จะเปลี่ยนไปตามที่ผู้ใช้เลือก

//<button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full" onClick={handleOrderNow} disabled={!selectedProduct}>
  //Order Now
//</button>
//ปุ่มสั่งซื้อที่มีการตั้งค่าเอฟเฟกต์เมื่อ hover และปิดการทำงาน (disabled) ถ้าผู้ใช้ยังไม่ได้เลือกสินค้า (selectedProduct)

  return (
    <>
      {orderPopup && (
        <div className="popup">
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
              <div className="flex items-center justify-between">
                <div>
                  <h1>Order Now</h1>
                </div>
                <div>
                  <IoCloseOutline
                    className="text-2xl cursor-pointer"
                    onClick={() => setOrderPopup(false)}
                  />
                </div>
              </div>
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                />

                <select
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                  className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                >
                  <option value="">Select Product</option>
                  <option value="beetle">Beetle</option>
                  <option value="pliers-beetle">Pliers Beetle</option>
                  <option value="beetle-food">Beetle Food</option>
                  <option value="beetle-feeding-equipment">Beetle Feeding Equipment</option>
                </select>

                <div className="flex justify-center">
                  <button
                    className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full"
                    onClick={handleOrderNow}
                    disabled={!selectedProduct}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
//คอมโพเนนต์ Popup นี้ทำหน้าที่แสดงหน้าต่าง Popup ให้ผู้ใช้กรอกข้อมูลและเลือกสินค้าก่อนทำการสั่งซื้อ
// เมื่อข้อมูลครบและกดปุ่มสั่งซื้อ ระบบจะนำผู้ใช้ไปยังหน้าสินค้าที่เลือก