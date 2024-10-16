//ติดตามข่าวสาร-commingsoon
import React, { useState } from "react"; 
import { useNavigate } from "react-router-dom"; 
import Banner from "../../assets/website/orange-pattern.jpg";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

//กรอกข้อมูล
const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();


  //e.preventDefault(): ป้องกันการทำงานเริ่มต้นของฟอร์ม เช่น การรีเฟรชหน้าเมื่อกดปุ่ม submit
//console.log("Subscribed email:", email): แสดงค่าอีเมลที่ผู้ใช้กรอกในคอนโซล (ในกรณีนี้คือการตรวจสอบการสมัครรับข้อมูล)
//navigate("/trending-products"): หลังจากสมัครสมาชิกสำเร็จ จะนำทางผู้ใช้ไปยังหน้า /trending-products
  const handleButtonClick = (e) => {
    e.preventDefault();
    console.log("Subscribed email:", email); // แสดงค่าอีเมลใน console หรือสามารถส่งไปยัง backend ได้
    navigate("/trending-products");
  };


  //return (  
  //<div
   // data-aos="zoom-in"
   // className="mb-20 bg-gray-100 dark:bg-gray-800 text-white"
//style={BannerImg} ถึง
  // {message && <p className="mt-4 text-center">{message}</p>}
//data-aos="zoom-in": ใช้ไลบรารี AOS (Animate On Scroll) เพื่อสร้างเอฟเฟกต์แอนิเมชันเมื่อคอมโพเนนต์ปรากฏขึ้น
//className: กำหนดสไตล์ให้กับส่วนต่าง ๆ ของหน้า เช่น mb-20 กำหนดระยะห่างด้านล่าง, bg-gray-100 dark:bg-gray-800 
//กำหนดพื้นหลังสีต่าง ๆ ขึ้นอยู่กับโหมดสว่างหรือมืด, และ text-white กำหนดสีตัวอักษรเป็นสีขาวในโหมดมืด


//<h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
  //Get notified about new beetles
//</h1>
//ข้อความหัวข้อใหญ่แสดงถึงการสมัครรับการแจ้งเตือนเกี่ยวกับสินค้าหรือข้อมูลใหม่ 
//โดยข้อความจะมีการจัดตำแหน่งตามขนาดหน้าจอ (text-center สำหรับจอเล็ก และ text-left สำหรับจอใหญ่)


//<form onSubmit={handleButtonClick}>
//<input
   // data-aos="fade-up"
   // type="email"
   //placeholder="Enter your email"
   // className="w-full p-3 text-black bg-white"
    //value={email}
    //onChange={(e) => setEmail(e.target.value)}
    //required
  ///>
  //<button
    //type="submit"
    //className="mt-4 p-3 bg-blue-600 text-white w-full"
  //>
    //Subscribe
  //</button>
//</form>
//ฟอร์มจะมีช่องกรอกอีเมล (<input>) ที่ตั้งค่าเป็น type="email" เพื่อให้ตรวจสอบได้ว่าผู้ใช้กรอกอีเมลจริง ๆ 
//โดยช่องกรอกมีการตั้งค่าสไตล์ (className) ให้มีขนาดเต็มความกว้าง (w-full) และสีพื้นหลังสีขาว (bg-white)
//เมื่อมีการกรอกอีเมล ระบบจะเก็บค่าอีเมลไว้ในสถานะด้วย onChange={(e) => setEmail(e.target.value)}
//ปุ่ม "Subscribe": ปุ่มสำหรับส่งฟอร์มจะถูกจัดตำแหน่งอยู่ด้านล่าง (mt-4) และมีพื้นหลังสีน้ำเงิน (bg-blue-600)


  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-gray-100 dark:bg-gray-800 text-white"
      style={BannerImg}
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
            Get notified about new beetles
          </h1>
          <form onSubmit={handleButtonClick}>
            <input
              data-aos="fade-up"
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 text-black bg-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="mt-4 p-3 bg-blue-600 text-white w-full"
            >
              Subscribe
            </button>
          </form>
          {message && <p className="mt-4 text-center">{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default Subscribe;

//โค้ดนี้สร้างฟอร์มให้ผู้ใช้กรอกอีเมลเพื่อสมัครรับการแจ้งเตือน เมื่อกดปุ่ม Subscribe 
//จะทำการบันทึกอีเมลและนำทางไปยังหน้าแสดงสินค้าที่กำลังเป็นที่นิยม (/trending-products)


