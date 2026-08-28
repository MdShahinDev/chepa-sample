import { Clock } from 'lucide-react';

const UrgencySection = ({ onOrderClick }) => {
  return (
    <section className="bg-[#FFF8F0] text-[#1E2922] py-8 sm:py-10 px-4 border-b border-[#F0DFCD]">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl p-5 sm:p-7 border-2 border-[#EA580C]/30 shadow-sm flex flex-col md:flex-row items-center justify-between gap-5">
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#FEF2F2] border border-[#FCA5A5] text-[#EA580C] flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6 animate-soft-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
               
                <h3 className="text-lg sm:text-xl font-bold font-serif-bn text-[#9A3412]">
                  “আজকের স্টক সীমিত”
                </h3>
              </div>
              <p className="text-sm text-[#431407] font-medium leading-relaxed">
                “স্টক থাকা অবস্থায় অর্ডার করে রাখুন।”
              </p>
              <p className="text-xs text-[#7C2D12] mt-1">
                হাওরের বাছাইকৃত বড় দেশি পুঁটি মাছ প্রতিদিন বেশি পরিমাণে পাওয়া যায় না। তাই প্রতিটি ব্যাচে নির্দিষ্ট পরিমাণ চ্যাপা প্রস্তুত করা হয়।
              </p>
            </div>
          </div>

          <button
          onClick={onOrderClick}
            className="w-full md:w-auto shrink-0 bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-sm sm:text-base px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
          >
            পছন্দের প্যাকেজ নির্বাচন করুন →
          </button>

        </div>
      </div>
    </section>
  )
}

export default UrgencySection
