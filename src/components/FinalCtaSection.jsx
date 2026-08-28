import { ArrowDown, Sparkles } from 'lucide-react';

const FinalCtaSection = ({ onOrderClick }) => {
  return (
    <section className="bg-gradient-to-b from-[#133827] to-[#0E2A1D] text-[#FBF8F3] py-12 sm:py-16 px-4 text-center relative overflow-hidden border-b border-[#23583E]">
      <div className="max-w-3xl mx-auto relative z-10">
        
        {/* Category Badge */}
        <div className="inline-flex items-center gap-1.5 bg-[#1E4D38] text-[#E5A93C] px-3.5 py-1 rounded-full text-xs font-bold mb-4 border border-[#2D664D]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>খাঁটি স্বাদের নিশ্চয়তা</span>
        </div>

        {/* Final CTA Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif-bn text-[#FBF8F3] mb-3 leading-tight">
          “আজ চ্যাপা খাবেন?”
        </h2>

        {/* Sensory Subheadline */}
        <p className="text-base sm:text-xl text-[#F2C14E] font-semibold max-w-xl mx-auto mb-4 leading-relaxed">
          “তাহলে এমন চ্যাপাই নিন, যেটা বক্স খোলার আগেই আপনাকে ঘ্রাণ দিয়ে চিনিয়ে দেবে।”
        </p>

        {/* Product Name Box */}
        <div className="inline-block bg-[#1B4B36] border border-[#2E7857] px-4 py-2 rounded-xl text-base sm:text-lg font-bold text-white mb-8">
         <span className="text-[#E5A93C]">কিশোরগঞ্জের অরিজিনাল দেশি পুঁটির চ্যাপা</span>
        </div>

        {/* Action Button */}
        <div className="mb-6">
          <button
          onClick={onOrderClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#E5A93C] hover:bg-[#F2B647] text-[#133827] font-bold text-lg sm:text-xl px-8 py-3.5 rounded-xl shadow-xl hover:shadow-2xl transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>অর্ডার করতে ক্লিক করুন</span>
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>

        {/* Trust Line */}
        <div className="flex items-center justify-center gap-3 text-xs sm:text-sm text-[#C8DBD1] font-medium">
          <span>ক্যাশ অন ডেলিভারি</span>
          <span className="text-[#E5A93C]">•</span>
          <span>সারা বাংলাদেশে ডেলিভারি</span>
          <span className="text-[#E5A93C]">•</span>
          <span>পণ্য দেখে নেওয়ার সুযোগ</span>
        </div>

      </div>
    </section>
  )
}

export default FinalCtaSection
