//อุปกรณ์เลี้ยงด้วง
import { useState, useEffect } from 'react';

// ข้อมูลสินค้า
// ข้อมูลสินค้า
//1. ข้อมูลสินค้า (products)
//สร้าง array products ที่เก็บข้อมูลสินค้าแต่ละชิ้น ประกอบด้วย:
//id: รหัสสินค้า
//name: ชื่อสินค้า
//price: ราคา (ในหน่วยบาท)
//image: URL ของรูปภาพ
const products = [
  { id: 1, name: '《Jelly เยลลี่พรีเมี่ยมด้วง》', price: 750, image: 'https://down-th.img.susercontent.com/file/th-11134207-7qukz-lin9d8hpszqg03.webp' },
  { id: 2, name: '《Moss mat 》', price: 100, image: 'https://down-th.img.susercontent.com/file/3401181e0ce833bad5433c6403704f23.webp' },
  { id: 3, name: '《ฐานรองเยลลี่แบบไม้ 》', price: 50, image: 'https://down-th.img.susercontent.com/file/1e4974605894b1a9644c33b3cc52498f.webp' },
  { id: 4, name: '《วัสดุปูพื้นเบลเยี่ยม Belgium》', price: 160, image: 'https://down-th.img.susercontent.com/file/8fc2a17e1e1fb0ac9d3d19748437bb34.webp' },
  { id: 5, name: '《เปลือกไม้ Pine USA》', price: 100, image: 'https://down-th.img.susercontent.com/file/1739b58c2ea50a25a1b037917bddf71b@resize_w450_nl.webp' },
  { id: 6, name: '《กิ่งไม้ Apple stick wood》', price: 80, image: 'https://down-th.img.susercontent.com/file/bffdd252082905117eb1ed5946d4271f.webp' },
  { id: 7, name: '《 Pin for insect beetles》', price: 120, image: 'https://down-th.img.susercontent.com/file/th-11134207-7r992-lv4bjt70w99v65.webp' },
  { id: 8, name: '《Jelly-Splitters》', price: 400, image: 'https://down-th.img.susercontent.com/file/5abd583c1ab7c3beea23f1fe76c03212.webp' },
  { id: 9, name: 'Filter sheet for insect beetles', price: 120, image: 'https://down-th.img.susercontent.com/file/th-11134207-7r98u-lw5hb8j7bi6n03.webp' },
  { id: 10, name: 'Cork bark wood', price: 200, image: 'https://down-th.img.susercontent.com/file/th-11134207-7r98s-lvvez66o2qq768.webp' },
  { id: 11, name: 'Japan filter Box ', price: 680, image: 'https://down-th.img.susercontent.com/file/7d7f7663882cdc77ae8d191f91af597b.webp' },
  { id: 12, name: ' ฐานรองเยลลี่แบบไม้ ', price: 200, image: 'https://down-th.img.susercontent.com/file/472926d17d6f782a0f70a10800b3235d.webp' },
];


//ProductList เป็น component หลักที่ใช้แสดงรายการสินค้า, จัดการตะกร้าสินค้า, 
//และฟังก์ชันคูปองส่วนลด มีการใช้งาน useState และ useEffect เพื่อควบคุมสถานะต่างๆ
export default function ProductList() {
  const [cart, setCart] = useState([]);
  const [colorIndex, setColorIndex] = useState(0);
  const [coupon, setCoupon] = useState(null);
  const [shippingFee] = useState(100);

  const couponColors = ['red', 'green', 'black', 'blue', 'cyan'];


   //addToCart: เพิ่มสินค้าลงในตะกร้า หรืออัปเดตจำนวนถ้าสินค้านั้นมีอยู่แล้ว
  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  //removeFromCart: ลบสินค้าจากตะกร้า
  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };


  //updateQuantity: เปลี่ยนจำนวนสินค้าที่ต้องการในตะกร้า
  const updateQuantity = (product, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(product);
    } else {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  //generateRandomCoupon: สุ่มคูปองส่วนลดให้ผู้ใช้ 
  const generateRandomCoupon = () => {
    // กำหนดให้มีตัวเลือก 0 (ไม่ได้รับคูปอง) และ 0.5 (50% ส่วนลด)
    const discountOptions = [0, 0.5]; 
    const randomIndex = Math.floor(Math.random() * discountOptions.length);
    const randomDiscount = discountOptions[randomIndex];
    setCoupon(randomDiscount);
  };


  //การคำนวณราคา:totalPrice: คำนวณยอดรวมของสินค้าทั้งหมดในตะกร้า
  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);


  //discount: คำนวณส่วนลดจากคูปอง (ถ้ามี)ยอดชำระทั้งหมด: คำนวณจากยอดรวมสินค้าลบด้วยส่วนลด และบวกค่าจัดส่ง
  const discount = coupon ? coupon * totalPrice : 0;


   //useEffect: ใช้เพื่อเปลี่ยนสีของข้อความ/ปุ่มทุกๆ 500 มิลลิวินาที
  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % couponColors.length);
    }, 500);
    return () => clearInterval(interval);
  }, []);


  //การคำนวณราคา:totalPrice: คำนวณยอดรวมของสินค้าทั้งหมดในตะกร้า
  const totalItemsInCart = cart.reduce((total, item) => total + item.quantity, 0);



  //การแสดงผลแสดงชื่อร้าน (Photharam Beetle Shop) พร้อมจำนวนสินค้าที่อยู่ในตะกร้ามีปุ่มสำหรับสุ่มรับคูปองส่วนลด และแสดงข้อความผลลัพธ์การสุ่ม
  //แสดงรายการสินค้าแต่ละชิ้นผ่าน ProductCardแสดงตะกร้าสินค้า, รายการสินค้าในตะกร้า, ยอดรวม, ส่วนลด, ค่าจัดส่ง, และยอดชำระทั้งหมด
  return (
    <div style={{ 
      backgroundImage: 'linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)', 
      minHeight: '100vh', 
      padding: '20px' 
    }}>
      <h1 style={{ 
        textAlign: 'center', 
        color: couponColors[colorIndex], 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center' 
      }}>
        Photharam Beetle Shop
        <div style={{ marginLeft: '10px', display: 'inline-block' }}>
          🛒 ({totalItemsInCart})
        </div>
      </h1>

      <button onClick={generateRandomCoupon} style={{ display: 'block', margin: '0 auto' }}>
        🎁 สุ่มคูปองส่วนลด
      </button>

      {coupon !== null && (
        <p style={{ textAlign: 'center', color: coupon > 0 ? 'green' : 'red', fontSize: '16px' }}>
          {coupon > 0 ? 'ยินดีด้วย! คุณได้รับคูปองส่วนลด 50%!' : 'เสียใจด้วย! คุณไม่ได้รับคูปองส่วนลด'}
        </p>
      )}

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '20px', 
        justifyItems: 'center', 
        marginTop: '20px'
      }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '20px', backgroundColor: '#f0fff0', borderRadius: '10px', textAlign: 'center' }}>
            <img src={product.image} alt={product.name} style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '10px' }} />
            <h3 style={{ color: 'black', marginTop: '10px' }}>{product.name}</h3>
            <p style={{ color: 'black' }}>ราคา: {product.price} บาท</p>
            <button onClick={() => addToCart(product)} style={{ color: couponColors[colorIndex], padding: '10px', borderRadius: '5px', marginTop: '10px' }}>
              🛒 เพิ่มลงตะกร้า
            </button>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '40px', textAlign: 'center', border: '2px solid #000', padding: '20px', backgroundColor: '#e0f7e0', borderRadius: '10px' }}>
        <h2 style={{ color: couponColors[colorIndex] }}>🛍️ ตะกร้าสินค้า</h2>
        {cart.length === 0 ? (
          <p style={{ color: 'black' }}>ไม่มีสินค้าในตะกร้า</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {cart.map((product) => (
              <li key={product.id} style={{ marginBottom: '10px', color: 'black' }}>
                {product.name} - {product.price} บาท x {product.quantity}
                <div style={{ marginTop: '5px' }}>
                  <button onClick={() => updateQuantity(product, product.quantity - 1)} style={{ marginRight: '5px' }}>➖</button>
                  <button onClick={() => updateQuantity(product, product.quantity + 1)} style={{ marginRight: '5px' }}>➕</button>
                  <button onClick={() => removeFromCart(product)}>❌ ลบ</button>
                </div>
              </li>
            ))}
          </ul>
        )}
        <p style={{ color: 'black' }}>ยอดรวม: {totalPrice} บาท</p>
        {coupon && <p style={{ color: 'black' }}>ส่วนลด: {discount} บาท</p>}
        <p style={{ color: 'black' }}>ค่าจัดส่ง: {shippingFee} บาท</p>
        <p style={{ color: 'black' }}>ยอดชำระทั้งหมด: {totalPrice - discount + shippingFee} บาท</p>
      </div>
    </div>
  );
}
