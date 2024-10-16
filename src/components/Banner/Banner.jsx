import React from "react";
import BannerImg from "../../assets/women/women2.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";


//const Banner = () => {
 // return (
  //  <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
  //    <div className="container">
  //      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
//ส่วนแรกนี้ใช้การจัดวางรูปแบบด้วย Flexbox และ Grid โดยตั้งค่าระยะความสูงขั้นต่ำ (min-h) และใช้ Grid system 
//สำหรับจัดเรียงภาพและข้อความให้อยู่เป็นสองคอลัมน์ในหน้าจอขนาดใหญ่



//<div data-aos="zoom-in">
 // <img
   // src={BannerImg}
   // alt=""
   // className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
  //>
//</div>
//ใช้รูปภาพ BannerImg และมีการเพิ่มเอฟเฟกต์แอนิเมชันด้วย AOS (data-aos="zoom-in") เมื่อผู้ใช้เลื่อนเข้ามาในหน้าจอ
//ใช้ drop-shadow สำหรับสร้างเงาให้กับรูปภาพ และ object-cover เพื่อจัดรูปภาพให้แสดงตามขนาดที่กำหนดโดยไม่ผิดรูป


//<div className="flex flex-col justify-center gap-6 sm:pt-0">
  //<h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
  //  Winter Sale upto 50% Off
  //</h1>
  //<p
   // data-aos="fade-up"
  //  className="text-sm text-gray-500 tracking-wide leading-5"
  //>
  //  ช้อปสนุก ลุ้นรับส่วนลด 50%! ...
  //</p>
  //ข้อความโปรโมชันจะถูกแสดงในคอลัมน์ขวา มีแอนิเมชันแบบ fade-up เมื่อผู้ใช้เลื่อนเข้ามา
 // ข้อความที่แสดงคือการโปรโมชันลดราคาสินค้า "Winter Sale up to 50% Off" และรายละเอียดการช้อปปิ้งเพื่อกระตุ้นให้ลูกค้าสนใจ

//<div className="flex flex-col gap-4">
  //<div data-aos="fade-up" className="flex items-center gap-4">
   // <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
   // <p>Quality Products</p>
  //</div>
  //ไอคอนแสดงบริการ เช่น GrSecure (การรับรองคุณภาพสินค้า), IoFastFood (การจัดส่งรวดเร็ว), และ GiFoodTruck (วิธีการชำระเงินที่ง่าย)
  //แต่ละไอคอนมีพื้นหลังสีและแอนิเมชันแบบ fade-up เมื่อลากหน้าจอ
  //ใช้การจัดรูปแบบด้วย Flexbox เพื่อจัดตำแหน่งไอคอนและข้อความให้อยู่ในแนวนอน

  //โครงสร้างและการออกแบบ
//Responsive design: ใช้การออกแบบที่ตอบสนองต่อขนาดหน้าจอ โดยเมื่อหน้าจอใหญ่จะแสดงรูปแบบ 2 คอลัมน์ และเมื่อหน้าจอเล็กจะจัดเรียงเป็น 1 คอลัมน์
 // AOS (Animation on Scroll): เพิ่มเอฟเฟกต์แอนิเมชันให้กับเนื้อหา ทำให้ดูมีชีวิตชีวามากขึ้นเมื่อเลื่อนผ่านเนื้อหา

const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* image section */}
          <div data-aos="zoom-in">
            <img
              src={BannerImg}
              alt=""
              className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            />
          </div>

          {/* text details section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
              Winter Sale upto 50% Off
            </h1>
            <p
              data-aos="fade-up"
              className="text-sm text-gray-500 tracking-wide leading-5"
            >
             ช้อปสนุก ลุ้นรับส่วนลด 50%! เพียงซื้อสินค้ากับเรา 
             คุณก็มีสิทธิ์ลุ้นรับส่วนลดสุดพิเศษนี้ทันที อย่าพลาดโอกาสดีๆ แบบนี้นะครับ!
            </p>
            <div className="flex flex-col gap-4">
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                <p>Quality Products</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                <p>Fast Delivery</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                <p>Easy Payment method</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                <p>Get Offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
//คอมโพเนนต์ Banner ใช้สำหรับแสดงโปรโมชันพร้อมด้วยภาพและไอคอนบริการเสริมที่น่าสนใจ 
//โดยใช้การจัดวางด้วย CSS Grid, Flexbox, และมีการเพิ่มแอนิเมชันด้วย AOS 
//เพื่อทำให้หน้าตาดูสวยงามและมีการตอบสนองเมื่อเลื่อนดูเนื้อหา