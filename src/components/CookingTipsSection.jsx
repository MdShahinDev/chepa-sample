import { ChefHat } from 'lucide-react';
import { POPULAR_RECIPES } from '../data/assets';
const CookingTipsSection = () => {
  return (
    <section className="bg-[#F4EFE6] text-[#1E2922] py-12 sm:py-14 px-4 border-b border-[#E3DAC4]">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 bg-[#E1D7BF] text-[#7C4A27] px-3.5 py-1 rounded-full text-xs font-bold mb-3 border border-[#CFC1A1]">
            <ChefHat className="w-3.5 h-3.5" />
            <span>রান্না ও সংরক্ষণের সহজ উপায়</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold font-serif-bn text-[#133827] mb-2">
            চ্যাপা রান্নার ঐতিহ্যবাহী রেসিপি টিপস
          </h2>
          <p className="text-xs sm:text-sm text-[#576B5F]">
            আমাদের চ্যাপা এতটাই নরম ও প্রাকৃতিকভাবে জাড়ানো যে অল্প আঁচেই চমৎকার সুবাস ছড়িয়ে রান্না হয়ে যায়।
          </p>
        </div>

        {/* 3 Recipes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {POPULAR_RECIPES.map((recipe, index) => (
            <div
              key={recipe.name}
              className="bg-white rounded-xl p-5 border border-[#E0D5BE] shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-[#133827] text-[#E5A93C] flex items-center justify-center font-bold text-xs">
                  {index + 1}
                </span>
                <h3 className="font-bold text-[#133827] text-base">
                  {recipe.name}
                </h3>
              </div>

              <div className="space-y-1.5 text-xs text-[#52655A]">
                <p className="font-semibold text-[#7C4A27] text-[11px]">প্রয়োজনীয় উপাদান ও প্রণালী:</p>
                <ul className="list-disc pl-4 space-y-1">
                  {recipe.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Storage Instruction Box */}
        <div className="bg-[#FAF3E2] rounded-xl p-4 sm:p-5 border border-[#EADBB8] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-[#5B4F3B]">
          <div className="flex items-center gap-3">
            <span className="text-2xl">❄️</span>
            <div>
              <span className="font-bold text-[#133827] block mb-0.5">
                সংরক্ষণ পদ্ধতি:
              </span>
              <span>
                পার্সেল পাওয়ার পর এয়ারটাইট বক্সে বা জিপলকে সাধারণ ফ্রিজে (নরমালে) রাখলে ৩-৬ মাস এবং ডিপ ফ্রিজে ১ বছর পর্যন্ত স্বাদ-ঘ্রাণ অক্ষুণ্ণ থাকবে।
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default CookingTipsSection
