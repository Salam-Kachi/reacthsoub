import React, { useState, useEffect } from "react";
import "./App.css";
import ClickCount from "./ClickCount";

function Online() {
  return <h1>هذا المستخدم نشط الان</h1>;
}
function Offline() {
  return <h1>هذا المستخدم غير نشط الان</h1>;
}
function Mobile() {
  return <h1>انت تستخدم جهاز محمول</h1>;
}
function Tablet() {
  return <h1>انت تستخدم جهاز لوحي</h1>;
}
function Laptop() {
  return <h1>انت تستخدم جهاز محمول بحجم أكبر أو لابتوب</h1>;
}
function Desktop() {
  return <h1>انت تستخدم جهاز سطح مكتب</h1>;
}

function getScreenType() {
  if (typeof window === "undefined") return "desktop";
  const width = window.innerWidth;
  if (width < 500) return "mobile";
  if (width < 900) return "tablet";
  if (width < 1200) return "laptop";
  return "desktop";
}

function App() {
  const [online, setOnline] = useState(true);
  const [screenType, setScreenType] = useState(getScreenType());
  const hsoubproducts = [
    "صور",
    "مستقل",
    "خمسات",
    "أكاديمية حسوب",
    "بعيد",
    "إعلاانات حسوب",
  ];
  const products = hsoubproducts.map((product) => <li key={product}>{product}</li>);

  useEffect(() => {
    const handleResize = () => setScreenType(getScreenType());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="App">
      <ClickCount />
      {online ? <Online /> : <Offline />}
      <button onClick={() => setOnline(!online)}>غير الحالة</button>
      {screenType === "mobile" && <Mobile />}
      {screenType === "tablet" && <Tablet />}
      {screenType === "laptop" && <Laptop />}
      {screenType === "desktop" && <Desktop />}
      <ul className="products">{products}</ul>
    </div>
  );
}

export default App;
