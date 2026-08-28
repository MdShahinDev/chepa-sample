import { ShieldCheck,  CheckCircle2, HelpCircle, Eye,Lock, RotateCcw } from 'lucide-react';
import { TRUST_POINTS } from '../data/assets';
const TrustSection = () => {
    const getTrustIcon = (id) => {
    switch (id) {
      case 'cod':
        return <Lock className="w-6 h-6 text-[#133827]" />;
      case 'check':
        return <Eye className="w-6 h-6 text-[#133827]" />;
      case 'return':
        return <RotateCcw className="w-6 h-6 text-[#133827]" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-[#133827]" />;
    }
  };
  return (
    <section className="bg-[#F4EFE6] text-[#1E2922] py-12 sm:py-16 px-4 border-b border-[#E3DAC4]">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 bg-[#E1D7BE] text-[#7C4A27] px-3.5 py-1 rounded-full text-xs font-bold mb-3 border border-[#CDC1A3]">
            <ShieldCheck className="w-4 h-4 text-[#133827]" />
            <span>১০০% ঝুঁকিমুক্ত কেনাকাটা</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif-bn text-[#133827] mb-2">
            “অর্ডার নিয়ে চিন্তা হচ্ছে?”
          </h2>

          <p className="text-lg sm:text-xl text-[#7C4A27] font-semibold">
            “তাই আগে দেখুন, তারপর টাকা দিন।”
          </p>

          <p className="text-xs sm:text-sm text-[#55695D] mt-2">
            অনলাইনে খাবার পণ্য কেনার ক্ষেত্রে ক্রেতার সংশয় থাকা খুব স্বাভাবিক। আমরা আপনার সম্পূর্ণ নিশ্চয়তা দিচ্ছি।
          </p>
        </div>

        {/* 3 Strong Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {TRUST_POINTS.map((card, idx) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl p-6 border-2 border-[#E1D6BD] hover:border-[#1E4D38] shadow-xs hover:shadow-lg transition-all flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FAF4E6] border border-[#E9DEC6] flex items-center justify-center mb-4 shadow-xs">
                  {getTrustIcon(card.id)}
                </div>

                <span className="text-[11px] font-bold text-[#E5A93C] uppercase tracking-wider block mb-1">
                  সুবিধা ০{idx + 1}
                </span>

                <h3 className="text-lg sm:text-xl font-bold text-[#133827] mb-1">
                  {card.title}
                </h3>

                <p className="text-xs font-semibold text-[#7C4A27] mb-3">
                  {card.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-[#576B5F] leading-relaxed">
                  {card.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#F2ECE0] flex items-center gap-1.5 text-xs font-bold text-[#1E4D38]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1E4D38]" />
                <span>নিশ্চিন্ত ও নিরাপদ</span>
              </div>
            </div>
          ))}
        </div>

        {/* Reassuring Banner */}
        <div className="bg-[#E7F0EB] rounded-xl p-5 border border-[#C5DED0] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#133827] text-[#FBF8F3] flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-[#133827] text-sm sm:text-base">
                কোনো প্রশ্ন বা কনফিউশন থাকলে ফোনে কথা বলে নিন
              </h4>
              <p className="text-xs text-[#4F6A5B]">
                আমাদের কাস্টমার কেয়ার প্রতিনিধি আপনাকে সরাসরি সহায়তা করতে প্রস্তুত।
              </p>
            </div>
          </div>
          <a
            href="tel:+8801700000000"
            className="w-full sm:w-auto shrink-0 bg-[#133827] hover:bg-[#1E4D38] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-lg text-center transition cursor-pointer"
          >
            কথা বলুন: 01610-545222
          </a>
        </div>

      </div>
    </section>
  )
}

export default TrustSection
