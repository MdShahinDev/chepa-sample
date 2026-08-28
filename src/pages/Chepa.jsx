import { useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ProblemSection from "../components/ProblemSection";
import ProductIntroSection from "../components/ProductIntroSection";
import WhyOurChapaSection from "../components/WhyOurChapaSection";
import TrustSection from "../components/TrustSection";
import UrgencySection from "../components/UrgencySection";
import FinalCtaSection from "../components/FinalCtaSection";
import OrderForm from "../components/OrderForm";
import CookingTipsSection from "../components/CookingTipsSection";
import OrderSuccessModal from "../components/OrderSuccessModal";

const Chepa = () => {
     const [placedOrder, setPlacedOrder] = useState(null);
      const scrollToOrder = () => {
        const orderSection = document.getElementById('order-section');
        if (orderSection) {
          orderSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };
    
    //   useEffect(() => {
    //     const handleScroll = () => {
    //       const scrollPosition = window.scrollY;
    //       const orderSection = document.getElementById('order-section');
          
    //       if (!orderSection) return;
    //       const orderSectionTop = orderSection.getBoundingClientRect().top + window.scrollY;
    
    //       // Show sticky CTA when scrolled 350px down, hide when reached order section
    //       if (scrollPosition > 350 && scrollPosition < orderSectionTop - 250) {
    //         setShowStickyCta(true);
    //       } else {
    //         setShowStickyCta(false);
    //       }
    //     };
    
    //     window.addEventListener('scroll', handleScroll, { passive: true });
    //     return () => window.removeEventListener('scroll', handleScroll);
    //   }, []);
    
    
  return (
    <>
    
      <Navbar onOrderClick={scrollToOrder}/>
      <HeroSection onOrderClick={scrollToOrder}/>
      <ProblemSection onOrderClick={scrollToOrder}/>
      <ProductIntroSection onOrderClick={scrollToOrder}/>
      <WhyOurChapaSection/>
      <TrustSection />
      <UrgencySection onOrderClick={scrollToOrder}/>
      <FinalCtaSection onOrderClick={scrollToOrder}/>
      <OrderForm onOrderSuccess={(order) => setPlacedOrder(order)}/>
      <CookingTipsSection/>

      {placedOrder && (
        <OrderSuccessModal
          order={placedOrder}
          onClose={() => setPlacedOrder(null)}
        />
      )}  
    
    </>
  )
}

export default Chepa
