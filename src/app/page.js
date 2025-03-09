"use client";
import HomePage from "./components/homepage";
import Navbar from "./components/navbar";
import Carousel from "./components/carousel";
import AboutUs from "./components/aboutUs";
import CaraOrder from "./components/caraOrder";
import Prosedur from "./components/prosedur";
import WhyUs from "./components/whyUs";
import ContactUs from "./components/contactUs";
import Ketentuan from "./components/ketentuan";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main 
      className="min-h-screen w-full relative bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('/assets/taobao.png')`
      }}
    >
      <Navbar />
      <div className='flex w-full items-center mx-auto flex-col'>
        <Carousel />
        <AboutUs />
        <CaraOrder />
        <Prosedur />
        <Ketentuan />
        <WhyUs />
        <ContactUs />
        <Footer />
      </div>
    </main>
  );
}
