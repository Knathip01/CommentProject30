import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';// Import i18next สำหรับการจัดการหลายภาษา


//Props ของ Popup:
//orderPopup: ค่าจากภายนอกที่บอกว่าป็อปอัพควรแสดงหรือไม่
//setOrderPopup: ฟังก์ชันที่ใช้ในการปิดหรือเปิดป็อปอัพ
//selectedProducts: รายการสินค้าที่ถูกเลือกโดยผู้ใช้
//setSelectedProducts: ฟังก์ชันที่ใช้ในการอัปเดตรายการสินค้าที่เลือก
//coupon: คูปองส่วนลดที่อาจมีค่าเป็น null หรือเป็นตัวเลขซึ่งแสดงถึงเปอร์เซ็นต์ส่วนลด
//shippingFee: ค่าขนส่งสินค้า
const Popup = ({ orderPopup, setOrderPopup, selectedProducts, setSelectedProducts, coupon, shippingFee }) => {
  const { t } = useTranslation(); //สร้างออบเจ็กต์ที่สามารถใช้ฟังก์ชัน t() เพื่อแปลข้อความได้
  const navigate = useNavigate();//hook สำหรับนำทางผู้ใช้ไปยังหน้าอื่นเมื่อทำการสั่งซื้อ
  const [name, setName] = useState("");//ใช้สร้าง state สำหรับเก็บข้อมูลของผู้ใช้name, email, address: เป็นข้อมูลส่วนตัวของผู้ใช้ที่ต้องกรอกในฟอร์ม
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");



  // ฟังก์ชันจัดการการสั่งซื้อ
  //ฟังก์ชันนี้จะทำการปิดป็อปอัพเมื่อผู้ใช้กดปุ่มสั่งซื้อ
  const handleOrderNow = () => {
    setOrderPopup(false);

   
    //ตรวจสอบว่าผู้ใช้เลือกสินค้าอย่างน้อย 1 ชิ้น (selectedProducts.length > 0) 
    //และกรอกข้อมูล ชื่อ (name), อีเมล (email), และ ที่อยู่ (address) ครบถ้วนหรือไม่
//ถ้าเงื่อนไขเป็นจริง จะเข้าสู่ขั้นตอนการคำนวณราคา
    if (selectedProducts.length > 0 && name && email && address) {


//คำนวณราคารวมของสินค้าที่เลือก (totalPrice) โดยใช้ reduce ในการรวมราคาของสินค้าแต่ละชิ้น
//คำนวณส่วนลด (discount) โดยตรวจสอบว่ามีคูปองหรือไม่ (coupon ? coupon * totalPrice : 0)
//สุดท้ายคำนวณราคาสุดท้าย (finalPrice) โดยนำราคารวมลบด้วยส่วนลดและบวกค่าขนส่ง (shippingFee)
      const totalPrice = selectedProducts.reduce((acc, product) => acc + product.price, 0);
      const discount = coupon ? coupon * totalPrice : 0;
      const finalPrice = totalPrice - discount + shippingFee;



//ใช้ navigate() จาก react-router-dom เพื่อนำทางผู้ใช้ไปยังหน้า /order
//่ส่งข้อมูลสินค้าที่เลือก (selectedProducts), ชื่อ (name), อีเมล (email), ที่อยู่ (address), และราคาสุดท้าย 
//(finalPrice) ไปใน state เพื่อให้หน้า /order ใช้ข้อมูลเหล่านี้ในการแสดงผล
      navigate('/order', {
        state: { 
          selectedProducts,
          name,
          email,
          address,
          finalPrice,
        },
      });
    } else {
      alert(t('errorFillInfo')); // ข้อความแปลถ้าข้อมูลไม่ครบถ้วน เช่น ไม่มีสินค้าในรายการ หรือกรอกข้อมูลไม่ครบ 
                                //จะมีการแสดงข้อความแจ้งเตือน (ใช้ t('errorFillInfo') เพื่อแปลข้อความเป็นภาษาที่ใช้งานอยู่)
    }
  };

  // ฟังก์ชันเพิ่มสินค้า
  //handleAddProduct: เพิ่มสินค้าลงใน selectedProducts
  const handleAddProduct = (product) => {
    setSelectedProducts([...selectedProducts, product]);
  };


  // ฟังก์ชันเอาสินค้าออก
  //handleRemoveProduct: ลบสินค้าจาก selectedProducts ตามตำแหน่งที่ระบุ (index)
  const handleRemoveProduct = (index) => {
    const updatedProducts = selectedProducts.filter((_, i) => i !== index);
    setSelectedProducts(updatedProducts);
  };


  //totalPrice: คำนวณราคารวมของสินค้าที่เลือก
  const totalPrice = selectedProducts.reduce((acc, product) => acc + product.price, 0);
 // discount: ถ้ามีคูปองจะคำนวณส่วนลดจากราคารวม
  const discount = coupon ? coupon * totalPrice : 0;
  //finalPrice: ราคาสุดท้ายหลังหักส่วนลดและบวกค่าขนส่ง
  const finalPrice = totalPrice - discount + shippingFee;


 // ถ้า orderPopup เป็นจริง ป็อปอัพจะถูกแสดง
//แสดงรายการสินค้า, ราคารวม, ส่วนลด, ค่าขนส่ง, ราคาสุดท้าย รวมถึงฟอร์มกรอกข้อมูลผู้ใช้
//มีปุ่มสำหรับสั่งซื้อ (orderNow) ซึ่งจะถูกปิดการใช้งานถ้าข้อมูลยังไม่ครบ
  return (
    <>
      {orderPopup && (
        <div className="popup">
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
              <div className="flex items-center justify-between">
                <h1>{t('orderNow')}</h1> {/* ข้อความแปล */}
                <IoCloseOutline className="text-2xl cursor-pointer" onClick={() => setOrderPopup(false)} />
              </div>
              <div className="mt-4">
                {selectedProducts.map((product, index) => (
                  <div key={index} className="flex justify-between items-center mb-2">
                    <img src={product.image} alt={product.name} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
                    <p>{product.name} - {t('price')}: {product.price} {t('currency')}</p> {/* ข้อความแปล */}
                    <button onClick={() => handleRemoveProduct(index)} className="text-red-500">
                      {t('remove')} {/* ข้อความแปล */}
                    </button>
                  </div>
                ))}
                <p>{t('totalPrice')}: {totalPrice} {t('currency')}</p> {/* ข้อความแปล */}
                {coupon && <p>{t('discount')}: {discount} {t('currency')}</p>} {/* ข้อความแปล */}
                <p>{t('shippingFee')}: {shippingFee} {t('currency')}</p> {/* ข้อความแปล */}
                <p>{t('finalPrice')}: {finalPrice} {t('currency')}</p> {/* ข้อความแปล */}

                <input
                  type="text"
                  placeholder={t('name')} // ข้อความแปล
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-full border px-2 py-1 mb-4"
                />
                <input
                  type="email"
                  placeholder={t('email')} // ข้อความแปล
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-full border px-2 py-1 mb-4"
                />
                <input
                  type="text"
                  placeholder={t('address')} // ข้อความแปล
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full rounded-full border px-2 py-1 mb-4"
                />

                <div className="flex justify-center">
                  <button
                    className="bg-gradient-to-r from-primary to-secondary text-white py-1 px-4 rounded-full"
                    onClick={handleOrderNow}
                    disabled={!name || !email || !address || selectedProducts.length === 0}
                  >
                    {t('orderNow')} {/* ข้อความแปล */}
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
