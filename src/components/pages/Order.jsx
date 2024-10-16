import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Image from "../../assets/hero/QRCODE.png"; // นำเข้ารูปภาพ QR Code
import html2canvas from 'html2canvas'; // นำเข้า html2canvas สำหรับการแปลง DOM เป็นภาพ



const Order = () => {
  const location = useLocation();
 
  //orderData: เก็บข้อมูลคำสั่งซื้อ เช่น รายการสินค้า ชื่อ อีเมล ที่อยู่ และราคารวม 
  const [orderData, setOrderData] = useState({
    selectedProducts: [],
    name: '',
    email: '',
    address: '',
    finalPrice: 0,
  });

  
  //showQRCode: ใช้ในการแสดง QR Code สำหรับชำระเงิน
  const [showQRCode, setShowQRCode] = useState(false);
  //uploadedImage: เก็บไฟล์รูปที่ผู้ใช้แนบมาเป็นหลักฐานการชำระเงิน
  const [uploadedImage, setUploadedImage] = useState(null);
  //isConfirmed: ตรวจสอบว่าการชำระเงินได้รับการยืนยันหรือไม่
  const [isConfirmed, setIsConfirmed] = useState(false);
  //productListRef: ใช้ useRef เพื่ออ้างอิงถึงรายการสินค้าใน DOM
  const productListRef = useRef(null);



  //ใช้ useEffect เพื่อดึงข้อมูลจาก location.state หรือจาก localStorage ถ้าไม่มีข้อมูลใน location.state
  // แล้วทำการตั้งค่า orderData เพื่อใช้แสดงผล
  useEffect(() => {
    const storedOrderData = JSON.parse(localStorage.getItem('orderData'));

    if (location.state) {
      setOrderData(location.state);
      localStorage.setItem('orderData', JSON.stringify(location.state)); 
    } else if (storedOrderData) {
      setOrderData(storedOrderData);
    }
  }, [location.state]);


  const { selectedProducts, name, email, address, finalPrice } = orderData;




 // ฟังก์ชันนี้ใช้เพื่อลบสินค้าที่เลือก โดยคำนวณราคาสินค้าใหม่และอัปเดตสถานะ orderData รวมถึงบันทึกข้อมูลใหม่ลงใน localStorage
  const handleRemoveProduct = (indexToRemove) => {
    const updatedProducts = selectedProducts.filter((_, index) => index !== indexToRemove);
    const updatedFinalPrice = updatedProducts.reduce((total, product) => total + product.price, 0);

    const updatedOrderData = { 
      ...orderData, 
      selectedProducts: updatedProducts, 
      finalPrice: updatedFinalPrice 
    };

    setOrderData(updatedOrderData);
    localStorage.setItem('orderData', JSON.stringify(updatedOrderData));
  };


  //ฟังก์ชัน handleShowQRCode ทำหน้าที่แสดง QR Code เพื่อให้ผู้ใช้ชำระเงิน
  const handleShowQRCode = () => {
    setShowQRCode(true);
  };

//ฟังก์ชัน handleImageUpload ทำหน้าที่แนบรูปภาพหลักฐานการชำระเงินและเก็บลิงก์ไปยังรูปนั้นใน uploadedImage
  const handleImageUpload = (event) => {
    setUploadedImage(URL.createObjectURL(event.target.files[0]));
  };


 
  // ฟังก์ชันนี้ใช้ html2canvas เพื่อแปลง productListRef ที่อ้างอิงถึง DOM ของรายการสินค้าเป็นรูปภาพ 
 //และให้ผู้ใช้สามารถดาวน์โหลดสรุปคำสั่งซื้อเป็นไฟล์ PNG ได้
  const handleDownloadSummary = async () => {
    const canvas = await html2canvas(productListRef.current, {
      scrollX: -window.scrollX, 
      scrollY: -window.scrollY, 
      windowWidth: document.documentElement.scrollWidth, 
      windowHeight: document.documentElement.scrollHeight,
    });
    
    const dataUrl = canvas.toDataURL('image/png');

    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = 'order-summary.png';
    link.click();
  };


  //ฟังก์ชันนี้ตรวจสอบว่าผู้ใช้ได้อัปโหลดหลักฐานการชำระเงินหรือไม่ ถ้าอัปโหลดแล้วจะทำการยืนยันการชำระเงิน
  const handleConfirmPayment = () => {
    if (uploadedImage) {
      setIsConfirmed(true);
      alert('การชำระเงินของคุณได้รับการยืนยันแล้ว!');
      sendOrderToFacebook(orderData);
    } else {
      alert('กรุณาแนบหลักฐานการชำระเงิน');
    }
  };



 // selectedProducts.length: ตรวจสอบว่ามีสินค้าในรายการที่ถูกเลือกหรือไม่ ถ้าจำนวนสินค้าเท่ากับ 0 (หรือไม่มีสินค้า) 
 //จะส่งค่ากลับ false ทำให้เงื่อนไขนี้เป็นจริง
//!name: ตรวจสอบว่าชื่อ (name) ไม่ได้ถูกกรอกหรือไม่ ถ้า name เป็นค่าว่างหรือไม่ได้ระบุ เงื่อนไขนี้จะเป็นจริง
//!email: ตรวจสอบว่าอีเมล (email) ไม่ได้ถูกกรอกหรือไม่
//!address: ตรวจสอบว่าที่อยู่ (address) ไม่ได้ถูกกรอกหรือไม่
//finalPrice === undefined: ตรวจสอบว่าราคาสุทธิ (finalPrice) ถูกกำหนดหรือยัง ถ้าเป็น undefined (ยังไม่ได้คำนวณหรือถูกตั้งค่า) เงื่อนไขนี้จะเป็นจริง
//ถ้าข้อใดข้อหนึ่งในเงื่อนไขเหล่านี้เป็นจริง (หมายถึงข้อมูลบางอย่างขาดหายไปหรือไม่ครบถ้วน) ฟังก์ชันจะ ส่งคืน 
//(return) ข้อความ <p>ข้อมูลคำสั่งซื้อไม่ครบถ้วน</p> และจะไม่ดำเนินการส่วนที่เหลือของฟังก์ชัน
//จากนั้นถ้าข้อมูลครบถ้วนแล้ว (ผ่านการตรวจสอบเงื่อนไข) ฟังก์ชันจะไปต่อและแสดงผลส่วนสรุปคำสั่งซื้อ (ส่วนที่เหลือใน JSX)
  if (!selectedProducts.length || !name || !email || !address || finalPrice === undefined) {
    return <p>ข้อมูลคำสั่งซื้อไม่ครบถ้วน</p>;
  }

  return (
    <div style={{ padding: '20px', background: 'linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)' }}>
      <h1>สรุปคำสั่งซื้อ</h1>

      <div style={{ marginBottom: '20px' }}>
        <button
          onClick={() => window.open('https://www.facebook.com/photharambeetle', '_blank')}
          style={{
            padding: '15px 30px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            color: '#fff',
            border: '1px solid rgba(255, 255, 255, 0.18)',
            borderRadius: '20px',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            fontSize: '1rem',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-5px)';
            e.target.style.boxShadow = '0 8px 40px rgba(0, 0, 0, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
          }}
        >
          ติดต่อแอดมิน
        </button>
      </div>

      <div 
        ref={productListRef}
        style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}
      >
        <h2>รายการสินค้า:</h2>
        {selectedProducts.map((product, index) => (
          <div key={product.id || index} style={{ marginBottom: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={product.image} alt={product.name} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
              <div>
                <p>ชื่อสินค้า: {product.name}</p>
                <p>ราคา: {product.price} บาท</p>
              </div>
              <button onClick={() => handleRemoveProduct(index)} style={{ color: 'red', marginLeft: 'auto' }}>
                ลบสินค้า
              </button>
            </div>
          </div>
        ))}
        <p>ชื่อผู้สั่ง: {name}</p>
        <p>อีเมล: {email}</p>
        <p>ที่อยู่: {address}</p>
        <p>ยอดชำระทั้งหมด: {finalPrice} บาท</p>

        <button onClick={handleShowQRCode} style={{ padding: '10px', backgroundColor: '#4CAF50', color: 'white', borderRadius: '5px', marginTop: '20px' }}>
          ชำระเงิน
        </button>

        {showQRCode && (
          <div style={{ marginTop: '20px' }}>
            <h3>สแกนเพื่อชำระเงิน</h3>
            <img src={Image} alt="QR Code" style={{ width: '150px', height: '150px' }} />
            
            <div style={{ marginTop: '20px' }}>
              <label>แนบหลักฐานการชำระเงิน:</label>
              <input type="file" accept="image/*" onChange={handleImageUpload} />
            </div>

            {uploadedImage && (
              <div style={{ marginTop: '20px' }}>
                <h4>หลักฐานการชำระเงิน:</h4>
                <img src={uploadedImage} alt="Uploaded Proof" style={{ width: '200px', height: '200px' }} />
              </div>
            )}

            <button onClick={handleConfirmPayment} style={{ padding: '10px', backgroundColor: '#2196F3', color: 'white', borderRadius: '5px', marginTop: '20px' }}>
              ยืนยันการชำระเงิน
            </button>
          </div>
        )}
      </div>

      <button
        onClick={handleDownloadSummary}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          padding: '15px 30px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          color: '#000',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          borderRadius: '30px',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          fontSize: '1.2rem',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'translateY(-5px)';
          e.target.style.boxShadow = '0 8px 40px rgba(0, 0, 0, 0.2)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
        }}
      >
        ดาวน์โหลดสรุปคำสั่งซื้อ
      </button>
    </div>
  );
};

export default Order;
