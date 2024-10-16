import React from "react";
import footerLogo from "../../assets/logo.png";
import Banner from "../../assets/website/footer-pattern.jpg";
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from "react-icons/fa";


//กำหนดภาพพื้นหลังให้กับ Footer โดยใช้ภาพจาก Banner และตั้งค่าให้ภาพครอบคลุมทั้งพื้นที่ (backgroundSize: "cover")
const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

//ข้อมูลลิงก์ของกลุ่มแมลงและลิงก์สำหรับการให้คำปรึกษาบน Facebook 
//ถูกจัดเก็บในรูปแบบของอาร์เรย์ของออบเจกต์ แต่ละรายการมี title เป็นชื่อของลิงก์ และ link เป็น URL
const InsectBreedingGroupLinks = [
  {
    title: "link📌Insect Group1",
    link: "https://www.facebook.com/groups/570613563563056",
    
  },
  {
    title: "link📌Insect Group2",
    link: "https://www.facebook.com/groups/2614763405462060",
    
  },
  {
    title: "link📌Insect Group3",
    link: "https://www.facebook.com/groups/128952527227473",
    
  },
  {
    title: "link📌International Group",
    link: "https://www.facebook.com/groups/642857125823091",
    
  },
  {
    title: "link📌International Group",
    link: "https://www.facebook.com/groups/468667609851798",
    
  },
  {
    title: "link📌Consultation Page",
    link: "https://www.facebook.com/groups/468667609851798",
  },
];

const ConsultationFacebookLinks = [
  {
    title: "link📌Consultation Page",
    link: "https://www.facebook.com/profile.php?id=100068287790265",
  },
  {
    title: "link📌Consultation Page",
    link: "https://www.facebook.com/jpanheracules",
  },
  {
    title: "link📌Consultation Page",
    link: "https://www.facebook.com/profile.php?id=61555641351826",
  },
  {
    title: "link📌Consultation Page",
    link: "https://www.facebook.com/profile.php?id=100064036692817",
  },
  {
    title: "link📌Consultation for foreigners",
    link: "https://www.facebook.com/profile.php?id=100069500296617",
  },
  {
    title: "link📌Consultation for foreigners",
    link: "https://www.facebook.com/Mystagbeetles",
  },
];



//กำหนดภาพพื้นหลังตามที่กำหนดใน BannerImg และใช้ className="text-white" เพื่อให้ข้อความใน Footer เป็นสีขาว
//ใช้ data-aos="zoom-in" เพื่อรองรับการทำอนิเมชันเมื่อส่วนนี้ปรากฏ (ต้องใช้ไลบรารี AOS)
const Footer = () => {
  return (
    <div style={BannerImg} className="text-white">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
      
          {/* company details// แสดงโลโก้ (footerLogo) พร้อมชื่อบริษัท "ShopBeetle" และข้อความต้อนรับที่อธิบายเกี่ยวกับบริษัท*/}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="" className="max-w-[50px]" />
              ShopBeetle
            </h1>
            <p>
            ยินดีต้อนรับสู่ Photharam Beeetle! พบกับสินค้าคุณภาพเยี่ยมและบริการที่เป็นกันเอง พร้อมโปรโมชั่นพิเศษมากมายที่คุณไม่ควรพลาด แวะมาช้อปกับเราวันนี้เพื่อประสบการณ์การช้อปปิ้งที่ดีที่สุด!🛒
            </p>
          </div>

          {/* Footer Linksวนลูปผ่านข้อมูล InsectBreedingGroupLinks และ ConsultationFacebookLinks เพื่อสร้างลิงก์ของกลุ่มแมลงและลิงก์การให้คำปรึกษา 
          โดยแต่ละลิงก์จะมีการเพิ่ม class ให้กับ <li> เพื่อรองรับการเปลี่ยนสีและเคลื่อนไหวเมื่อ hover */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Insect breeding group
                </h1>
                <ul className="flex flex-col gap-3">
                  {InsectBreedingGroupLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <a href={link.link} target="_blank" rel="noopener noreferrer">
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Consultation Facebook page
                </h1>
                <ul className="flex flex-col gap-3">
                  {ConsultationFacebookLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <a href={link.link} target="_blank" rel="noopener noreferrer">
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* social linksแสดงไอคอนโซเชียลต่าง ๆ เช่น Instagram, Facebook, และ LinkedIn
แสดงข้อมูลที่อยู่และเบอร์โทรศัพท์ของบริษัท พร้อมไอคอนสถานที่และโทรศัพท์จาก FaLocationArrow และ FaMobileAlt */}
            <div>
              <div className="flex items-center gap-3 mt-6">
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="https://www.facebook.com/photharambeetle" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="https://www.linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>THAILAND, PHOTHARAM</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt />
                  <p>+09 22872182</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
//คอมโพเนนต์ Footer นี้แสดงข้อมูลบริษัท ลิงก์ไปยังกลุ่มแมลงและการให้คำปรึกษาบน Facebook รวมถึงลิงก์โซเชียลมีเดียและข้อมูลติดต่อ