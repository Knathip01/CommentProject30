import React from "react"; 
import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";

//ใช้ useState ของ React เพื่อสร้างสถานะ theme ซึ่งบันทึกสถานะปัจจุบันของธีม ("light" หรือ "dark") โดยมีการตรวจสอบค่าใน localStorage ว่ามีการเก็บค่าธีมไว้หรือไม่:
//ถ้าใน localStorage มีค่า "theme" อยู่ จะใช้ค่านั้นเป็นค่าเริ่มต้น ถ้าไม่มี จะตั้งค่าเริ่มต้นเป็น "light" (ธีมสว่าง)
const DarkMode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement; 
 // ตัวแปร element อ้างอิงถึง document.documentElement ซึ่งเป็น root element ของเอกสาร HTML เพื่อให้สามารถจัดการ class ของ element ได้โดยตรง เช่น เพิ่มหรือเอา class "dark" ออกเมื่อสลับธีม


 //ใช้ useEffect เพื่อตรวจสอบการเปลี่ยนแปลงของค่า theme และทำการเพิ่มหรือเอา class "dark" บน root element (document.documentElement) เมื่อสถานะของธีมเปลี่ยนแปลง
  React.useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  //ถ้า theme เป็น "dark" จะเพิ่ม class "dark" ให้กับ document.documentElement และบันทึกค่า "dark" ลงใน localStorage
 // ถ้า theme เป็น "light" จะเอา class "dark" ออกและบันทึกค่า "light" ลงใน localStorage



// แสดงรูปภาพ 2 รูปสำหรับการสลับธีม คือ LightButton และ DarkButton ซึ่งเป็นปุ่มสำหรับสลับไปมาระหว่างโหมด "light" และ "dark":
// เมื่อธีมปัจจุบันเป็น "light", ปุ่มที่แสดงจะเป็น LightButton
 //เมื่อธีมปัจจุบันเป็น "dark", ปุ่มที่แสดงจะเป็น DarkButton
// เมื่อคลิกที่รูปภาพใด ๆ จะเรียกฟังก์ชัน setTheme เพื่อสลับค่าธีมเป็นอีกโหมดหนึ่ง
  return (
    <div className="relative">
      <img
        src={LightButton}
        alt=""
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        } `}
      />
      <img
        src={DarkButton}
        alt=""
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 ${
          theme === "light" ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
};

export default DarkMode;
//ฟังก์ชัน DarkMode มีไว้เพื่อสลับธีมระหว่างโหมดสว่าง (light) และโหมดมืด (dark) โดยใช้สถานะภายใน (useState) 
//และบันทึกสถานะไว้ใน localStorage เพื่อให้ธีมของเว็บไซต์ยังคงเหมือนเดิมเมื่อผู้ใช้กลับเข้ามาอีกครั้ง