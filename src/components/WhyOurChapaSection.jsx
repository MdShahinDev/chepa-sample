import { Award, CheckCheck, PackageCheck, ShieldCheck } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/assets';
const WhyOurChapaSection = () => {
  return (
    <section className="bg-[#133827] text-[#FBF8F3] py-12 sm:py-16 px-4 border-b border-[#23583E] relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E5A93C]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-[#1E4D38] text-[#E5A93C] px-3.5 py-1 rounded-full text-xs font-bold mb-3 border border-[#2B664B]">
            <Award className="w-3.5 h-3.5" />
            <span>প্রথাগত তৈরি প্রণালী</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif-bn text-[#FBF8F3] mb-3">
            “কেন আমাদের চ্যাপা আলাদা?”
          </h2>
          <p className="text-sm sm:text-base text-[#D0E2D8]">
            আমরা বংশপরম্পরায় তৈরি কিশোরগঞ্জের শতভাগ ঐতিহ্যবাহী পদ্ধতি অনুসরণ করি।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
          
          {/* Left Column: 4 Scannable Benefit Cards */}
          <div className="lg:col-span-7 space-y-4">
            {WHY_CHOOSE_US.map((item) => (
              <div
                key={item.step}
                className="bg-[#18422F] rounded-xl p-4 sm:p-5 border border-[#265B42] hover:border-[#E5A93C]/60 transition-all flex items-start gap-4 cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-[#E5A93C] text-[#133827] flex items-center justify-center font-bold text-sm shrink-0 shadow-sm">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-[#FFFFFF] text-base sm:text-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#C9DCD2] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Traditional Serving Visual Presentation (Image 2) */}
          <div className="lg:col-span-5">
            <div className="bg-[#0F2D1F] p-3 rounded-2xl border-2 border-[#E5A93C]/30 shadow-xl">
              
              <div className="relative aspect-4/3 rounded-xl overflow-hidden bg-[#0A1F15] mb-3">
                <img
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80"
                  alt="চ্যাপা শুঁটকি ভর্তা ও ভুনা পরিবেশন"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover brightness-95 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="inline-block bg-[#E5A93C] text-[#133827] text-[11px] font-bold px-2 py-0.5 rounded mb-1">
                    ঐতিহ্যবাহী পরিবেশন
                  </span>
                  <p className="text-xs font-semibold text-[#F4EFE6]">
                    গরম ভাতে ঝাল ঝাল চ্যাপা ভর্তা ও ভুনার অতুলনীয় তৃপ্তি
                  </p>
                </div>
              </div>

              {/* Artisan Note */}
              <div className="p-3 bg-[#163D2B] rounded-xl border border-[#245C41] text-xs text-[#D5E5DC]">
                <p className="italic leading-relaxed">
                  “মাটির মটকায় জাড়ানো চ্যাপার ঘ্রাণটাই অন্যরকম। যারা শুঁটকি ভালোবাসেন, তারা এক লোকমা মুখেই এর জাত চিনতে পারবেন।”
                </p>
                <div className="mt-2 flex items-center justify-between text-[11px] text-[#E5A93C] font-semibold">
                  <span>— কিশোরগঞ্জের স্থানীয় শুঁটকি কারিগর</span>
                  <span>১০০% খাঁটি</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Quick Trust Bar */}
        <div className="bg-[#1A4B35] rounded-xl p-4 border border-[#28684A] flex flex-wrap items-center justify-around gap-4 text-xs sm:text-sm font-semibold text-[#F4EFE6] text-center">
          <div className="flex items-center gap-2">
            <CheckCheck className="w-4 h-4 text-[#E5A93C]" />
            <span>সরাসরি হাওরের তাজা মাছ</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#E5A93C]" />
            <span>কীটনাশক ও কেমিক্যাল মুক্ত</span>
          </div>
          <div className="flex items-center gap-2">
            <PackageCheck className="w-4 h-4 text-[#E5A93C]" />
            <span>নিরাপদ ফুড-গ্রেড প্যাকেজিং</span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default WhyOurChapaSection
