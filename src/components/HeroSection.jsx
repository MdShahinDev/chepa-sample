import { ArrowRight, CheckCircle2, MapPin, ShieldCheck, Sparkles, Truck } from 'lucide-react';

const HeroSection = ({ onOrderClick }) => {
  return (
    <section className="bg-gradient-to-b from-[#133827] via-[#163D2B] to-[#1A4531] text-[#FBF8F3] pt-6 pb-12 sm:py-14 px-4 overflow-hidden relative border-b border-[#23583E]">
      {/* Subtle traditional hawor pattern background effect */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#E5A93C_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-10 lg:items-center">
          
          {/* Mobile Top Image Presentation / Desktop Right Column */}
          <div className="lg:col-span-5 order-1 lg:order-2 mb-6 lg:mb-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Product Visual Card with Traditional Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#E5A93C]/40 bg-[#0D261A] p-2.5">
                
                {/* Visual Image container with high quality dried fish / Bengali culinary presentation */}
                <div className="relative aspect-4/3 rounded-xl overflow-hidden bg-[#0A1F15]">
                  <img
                    src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80"
                    alt="কিশোরগঞ্জের অরিজিনাল দেশি পুঁটির চ্যাপা"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover brightness-95 hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Subtle gradient overlay to enhance text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                  {/* Origin Badge on Image */}
                  <div className="absolute top-3 left-3 bg-[#133827]/90 backdrop-blur-sm text-[#FBF8F3] text-xs font-semibold px-2.5 py-1 rounded-md border border-[#E5A93C]/50 flex items-center gap-1.5 shadow-sm">
                    <MapPin className="w-3.5 h-3.5 text-[#E5A93C]" />
                    <span>কিশোরগঞ্জের হাওর এলাকা</span>
                  </div>

                  {/* 100% Authentic Aroma Badge */}
                  <div className="absolute top-3 right-3 bg-[#E5A93C] text-[#133827] text-xs font-bold px-2.5 py-1 rounded-md shadow-sm flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>খাঁটি ঘ্রাণ</span>
                  </div>

                  {/* Bottom caption on image */}
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-xs">
                    <span className="bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded text-[11px] text-[#F4EFE6]">
                      ঐতিহ্যবাহী মাটির মটকায় তৈরি
                    </span>
                    <span className="bg-[#133827]/80 text-[#E5A93C] font-semibold px-2 py-0.5 rounded text-[11px] border border-[#E5A93C]/30">
                      বড় সাইজের পুঁটি
                    </span>
                  </div>
                </div>

                {/* Micro product specs banner below image */}
                <div className="mt-2.5 grid grid-cols-3 gap-1.5 text-center text-[11px] font-medium text-[#E3EDE7]">
                  <div className="bg-[#1A4531] py-1.5 px-1 rounded border border-[#276347]">
                    <span className="text-[#E5A93C] block font-bold">১০০% কেমিক্যালমুক্ত</span>
                    <span>কোনো বিষাক্ত পাউডার নেই</span>
                  </div>
                  <div className="bg-[#1A4531] py-1.5 px-1 rounded border border-[#276347]">
                    <span className="text-[#E5A93C] block font-bold">নরম ও মোলায়েম</span>
                    <span>তেলেই সুন্দর গলে যায়</span>
                  </div>
                  <div className="bg-[#1A4531] py-1.5 px-1 rounded border border-[#276347]">
                    <span className="text-[#E5A93C] block font-bold">পিত্তমুক্ত পরিচ্ছন্ন</span>
                    <span>একটুও তিতা লাগবে না</span>
                  </div>
                </div>
              </div>

              {/* Floating Quality Assurance Seal */}
              <div className="absolute -bottom-3 -left-2 bg-[#E5A93C] text-[#133827] px-3 py-1.5 rounded-lg shadow-lg border border-[#F5C768] flex items-center gap-1.5 text-xs font-bold">
                <CheckCircle2 className="w-4 h-4 text-[#133827]" />
                <span>আসল স্বাদের গ্যারান্টি</span>
              </div>
            </div>
          </div>

          {/* Copy and Actions Column */}
          <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col justify-center">
            
            {/* Question Headline (Problem Recognition) */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif-bn text-[#FBF8F3] leading-[1.3] mb-2 tracking-tight">
              “বাজারের চ্যাপা খেয়ে সেই আসল স্বাদ-ঘ্রাণটা পাচ্ছেন না?”
            </h1>

            {/* Empathy Subheadline */}
            <p className="text-lg sm:text-xl text-[#F2C14E] font-semibold mb-4">
              “হয়তো আপনি এখনও আসল চ্যাপা খাননি।”
            </p>

            {/* Product Name Title Badge */}
            <div className="inline-block self-start mb-3 bg-[#24573F] border border-[#3C8261] px-3.5 py-1.5 rounded-lg">
              <span className="text-sm sm:text-base font-bold text-[#FFFFFF]">
                <span className="text-[#F5C768]">কিশোরগঞ্জের অরিজিনাল দেশি পুঁটির চ্যাপা</span>
              </span>
            </div>

            {/* Supporting Sensory Copy */}
            <p className="text-base sm:text-lg text-[#E0EBE4] leading-relaxed mb-6 font-normal">
              কিশোরগঞ্জের হাওরের বড় সাইজের দেশি পুঁটি দিয়ে তৈরি—ঘ্রাণে ভরপুর, নরম ও মোলায়েম। কোনো কেমিক্যাল বা অতিরিক্ত লবণ নেই, বক্স খুললেই সেই পুরনো দিনের খাঁটি সুবাস।
            </p>

            {/* Primary Action Button */}
            <div className="space-y-3.5">
              <button
              onClick={onOrderClick}
                id="hero-order-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#E5A93C] hover:bg-[#F2B647] active:bg-[#D49526] text-[#133827] font-bold text-lg sm:text-xl px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>এখনই অর্ডার করুন</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              {/* Trust Microcopy */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-[#C8DBD1] font-medium pt-1">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#E5A93C]" />
                  <span>ক্যাশ অন ডেলিভারি</span>
                </div>
                <span className="text-[#3A7558]">•</span>
                <div className="flex items-center gap-1.5">
                  <Truck className="w-4 h-4 text-[#E5A93C]" />
                  <span>সারা বাংলাদেশে ডেলিভারি</span>
                </div>
                <span className="text-[#3A7558]">•</span>
                <div className="flex items-center gap-1.5 text-[#F5C768]">
                  <span>আগে দেখে তারপর পেমেন্ট</span>
                </div>
              </div>
            </div>

            {/* Quick 3 Key Highlights */}
            <div className="mt-8 pt-6 border-t border-[#23583E] grid grid-cols-3 gap-2 text-xs sm:text-sm text-[#D7E6DE]">
              <div className="flex items-center gap-1.5">
                <span className="text-[#E5A93C]">✔</span>
                <span>কোনো তিতা স্বাদ নেই</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[#E5A93C]">✔</span>
                <span>বক্স খুললেই আসল ঘ্রাণ</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[#E5A93C]">✔</span>
                <span>পছন্দ না হলে ফেরত</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default HeroSection
