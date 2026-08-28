import { Sparkles, CheckCircle2, Wind, ShieldOff, Feather, Fish, Droplets, MapPin } from 'lucide-react';
import { PRODUCT_BENEFITS } from '../data/assets';
const ProductIntroSection = ({ onOrderClick }) => {
    const getIcon = (id) => {
    switch (id) {
      case 'aroma':
        return <Wind className="w-5 h-5 text-[#133827]" />;
      case 'no_bitter':
        return <ShieldOff className="w-5 h-5 text-[#133827]" />;
      case 'soft':
        return <Feather className="w-5 h-5 text-[#133827]" />;
      case 'big_puti':
        return <Fish className="w-5 h-5 text-[#133827]" />;
      case 'hygienic':
        return <Droplets className="w-5 h-5 text-[#133827]" />;
      case 'source':
        return <MapPin className="w-5 h-5 text-[#133827]" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-[#133827]" />;
    }
  };
  return (
    <section className="bg-[#FBF8F3] text-[#1E2922] py-12 sm:py-16 px-4 border-b border-[#E8DFC8]">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 bg-[#E2EFE7] text-[#133827] px-3 py-1 rounded-full text-xs font-bold mb-3 border border-[#BDDEC8]">
            <Sparkles className="w-3.5 h-3.5 text-[#E5A93C]" />
            <span>প্রাকৃতিক ফারমেন্টেশনের বিশেষত্ব</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif-bn text-[#133827] mb-2">
            “একবার টেস্ট করেই পার্থক্যটা বুঝুন”
          </h2>

          <div className="inline-block bg-[#1E4D38] text-[#FBF8F3] px-3.5 py-1 rounded-lg text-sm sm:text-base font-bold my-2">
            <span className="text-[#ffaf1b]">কিশোরগঞ্জের অরিজিনাল দেশি পুঁটির চ্যাপা</span>
          </div>

          <p className="text-base sm:text-lg text-[#7C4A27] font-semibold mt-2">
            “বক্স খুললেই যে ঘ্রাণটা আপনাকে থামিয়ে দেবে।”
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-10">
          {PRODUCT_BENEFITS.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-white rounded-xl p-5 border border-[#E8DFC8] shadow-xs hover:border-[#286047] hover:shadow-md transition-all group cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-2.5">
                <div className="w-10 h-10 rounded-lg bg-[#F5EEDC] group-hover:bg-[#E5A93C] transition-colors flex items-center justify-center shrink-0">
                  {getIcon(benefit.id)}
                </div>
                <h3 className="font-bold text-[#133827] text-base sm:text-lg">
                  {benefit.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#55685E] leading-relaxed pl-0.5">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Sensory highlight box */}
        <div className="bg-[#FAF3E0] rounded-xl p-5 sm:p-6 border border-[#E9D9B5] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <span className="text-3xl">🍲</span>
            <div>
              <h4 className="font-bold text-[#133827] text-base sm:text-lg">
                রান্না করলেই ঘরে ছড়িয়ে পড়বে চ্যাপার খাঁটি সুবাস
              </h4>
              <p className="text-xs sm:text-sm text-[#675B47]">
                গরম ভাতে চ্যাপা ভুনা কিংবা মরিচ-রসুন দিয়ে ভর্তায় প্রতি লোকমায় পাবেন আসল স্বাদ ও তৃপ্তি।
              </p>
            </div>
          </div>
          <button
          onClick={onOrderClick}
            className="w-full sm:w-auto shrink-0 bg-[#133827] hover:bg-[#1E4D38] text-[#FBF8F3] font-bold text-sm px-5 py-2.5 rounded-lg transition-colors cursor-pointer"
          >
            অর্ডার করুন →
          </button>
        </div>

      </div>
    </section>
  )
}

export default ProductIntroSection
