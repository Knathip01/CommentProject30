import { useState } from "react";    
//person: เก็บข้อมูลธีมของหน้าจอและชื่อของเกม
//theme: กำหนดสีพื้นหลังเป็นไล่เฉดสี (gradient) และจัดตำแหน่งการจัดเรียงในแนวตั้ง (flexDirection: 'column')
const person = {
  name: 'Beetle feeding game',
  theme: {
    backgroundImage: 'linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100vw',  
    height: '100vh',  
    overflow: 'hidden'
  }
};




//level: เก็บระดับพลังของด้วง (ค่าเริ่มต้นคือ 0)
//size: ขนาดของภาพด้วง (ค่าเริ่มต้นคือ 100px)
//image: เก็บ URL ของภาพด้วงที่จะแสดงผลในเกม
export default function TodoList() {
  const [level, setLevel] = useState(0);
  const [size, setSize] = useState(100); 
  const [image, setImage] = useState("https://i1.wp.com/www.nextsteptv.com/wp-content/uploads/2017/11/Hercules_beetle_.jpg?resize=735%2C400"); 



 // ฟังก์ชันนี้จะทำงานเมื่อผู้ใช้คลิกปุ่มให้อาหาร
//เพิ่มค่า foodLevel เข้ากับ level เดิม
//ถ้าค่า level เกิน 100 จะเปลี่ยนภาพด้วงโดยใช้ setImage
//ปรับขนาดของภาพด้วงโดยใช้ setSize ซึ่งขนาดจะเพิ่มขึ้นตามระดับพลังที่เพิ่ม
  const feed = (foodLevel) => {
    const newLevel = level + foodLevel;

    if (newLevel > 100) {
      setImage("https://external-preview.redd.it/62-different-types-of-beetles-in-kansas-v0-NKwC3n7oSzyg4vwbfN5gy_p0HT5zBg6UESeoAqw0hBk.jpg?width=640&crop=smart&auto=webp&s=bfa8b3e99223fff29cb49500f0ff8ff9f99b65d7"); 
    }

    setLevel(newLevel);
    setSize(100 + newLevel); 
  };




 // แสดงชื่อเกม ({person.name})
//แสดงภาพด้วงโดยใช้ URL จาก image และกำหนดขนาดตามค่า size
//กำหนดการจัดการสไตล์ของภาพ เช่น ขนาดสูงสุด (maxWidth, maxHeight), 
//การจัดเรียงให้ครอบคลุมพื้นที่ (objectFit), กรอบภาพ (border), และความโค้งมนของกรอบ (borderRadius)


  return (
    <div style={person.theme}>
      <h1>{person.name}</h1>
      <img
        className="avatar"
        src={image}
        alt="https://external-preview.redd.it/62-different-types-of-beetles-in-kansas-v0-NKwC3n7oSzyg4vwbfN5gy_p0HT5zBg6UESeoAqw0hBk.jpg?width=640&crop=smart&auto=webp&s=bfa8b3e99223fff29cb49500f0ff8ff9f99b65d7"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          maxWidth: '90vw',  
          maxHeight: '90vh', 
          objectFit: 'cover', 
          border: '5px solid #ffffff',  // กำหนดสีขาวสำหรับกรอบ
          borderRadius: '10px'          // เพิ่มความโค้งมนให้กรอบ
        }}
      />

      <h2>Beetle Feeding</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button 
//มีปุ่มทั้งหมด 5 ปุ่ม แต่ละปุ่มเพิ่มค่า foodLevel ต่างกัน (5, 10, 15, 20, 25)
//เมื่อคลิกแต่ละปุ่ม จะเรียกใช้ฟังก์ชัน feed เพื่อเพิ่มระดับพลังให้กับด้วง/
          onClick={() => feed(5)}
          style={{ backgroundColor: 'red', color: 'black' }}
        >
          Dmat pro (+5)
        </button>
        <button 
          onClick={() => feed(10)}
          style={{ backgroundColor: 'yellow', color: 'black' }}
        >
         Dmat pro(+10)
        </button>
        <button 
          onClick={() => feed(20)}
          style={{ backgroundColor: 'lightgreen', color: 'black' }}
        >
         ELmatpro (+20)
        </button>
        <button 
          onClick={() => feed(15)}
          style={{ backgroundColor: 'blue', color: 'white' }}
        >
          Lmat pro (+15)
        </button>
        <button 
          onClick={() => feed(25)}
          style={{ backgroundColor: 'purple', color: 'white' }}
        >
        Kabuto mat (+25)
        </button>
      </div>

      <p>Current Level: {level}</p>
    </div>//แสดงค่า level ปัจจุบันบนหน้าจอ
  );
}
