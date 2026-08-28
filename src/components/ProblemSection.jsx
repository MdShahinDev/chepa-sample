import { AlertCircle, XCircle } from 'lucide-react';
import { PAIN_POINTS } from '../data/assets';

const ProblemSection = ({ onOrderClick }) => {
  return (
    <section className="bg-[#F4EFE6] text-[#1E2922] py-12 sm:py-16 px-4 border-b border-[#E5DEC9]">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 bg-[#E8DFC8] text-[#7C4A27] px-3 py-1 rounded-full text-xs font-bold mb-3 border border-[#D5C7A5]">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>বাজারের সাধারণ চ্যাপার অভিজ্ঞতা</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif-bn text-[#133827] mb-3">
            “চ্যাপা কিনে বারবার হতাশ হচ্ছেন?”
          </h2>
          <p className="text-sm sm:text-base text-[#52635A]">
            শহরের সুপারশপ বা খোলা বাজার থেকে শুঁটকি কিনে অনেকেই আসল চ্যাপার সেই শৈশবের স্বাদ আর খুঁজে পান না।
          </p>
        </div>

        {/* 6 Pain Points Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {PAIN_POINTS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-5 border border-[#E3DAC4] shadow-xs hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between"
            >
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#D97706]/40"></div>

              <div>
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#FEF2F2] text-[#DC2626] flex items-center justify-center font-bold text-xs shrink-0">
                    <XCircle className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-[#18392B] text-base">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#5C6E64] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Empathy Closing Transition Box */}
        <div className="bg-[#18392B] text-[#FBF8F3] rounded-2xl p-6 sm:p-8 text-center border-2 border-[#E5A93C]/30 shadow-md">
          <p className="text-base sm:text-xl font-medium text-[#F4EFE6] mb-4 max-w-2xl mx-auto leading-relaxed">
            “আপনারও যদি এমন অভিজ্ঞতা হয়ে থাকে, তাহলে এবার একটু অন্যরকম চ্যাপা ট্রাই করুন।”
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onOrderClick}
              className="w-full sm:w-auto bg-[#E5A93C] hover:bg-[#F2B647] text-[#133827] font-bold text-base px-6 py-2.5 rounded-xl shadow-sm hover:shadow transition cursor-pointer"
            >
              আসল চ্যাপা ট্রাই করুন →
            </button>
            <span className="text-xs text-[#BED4C8]">
              (প্যাকেট খুলে কোয়ালিটি চেক করে টাকা দেওয়ার সুযোগ)
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ProblemSection
