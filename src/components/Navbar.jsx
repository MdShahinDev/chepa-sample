import { Phone, ShoppingBag } from 'lucide-react';

const Navbar = ({ onOrderClick }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#133827] text-white shadow-md border-b border-[#1E4D38]">
      {/* Top micro announcement */}
      <div className="bg-[#0D261A] py-1.5 px-3 text-center text-xs sm:text-sm text-[#F4EFE6] flex items-center justify-center gap-2 font-medium">
        {/* <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] bg-[#E5A93C] text-[#133827] font-bold">
          খাঁটি উৎস
        </span> */}
        <span>কিশোরগঞ্জের হাওর থেকে সরাসরি সংগৃহীত অরিজিনাল পুঁটির চ্যাপা</span>
        <span className="hidden md:inline">• ক্যাশ অন ডেলিভারি সুবিধা</span>
      </div>

      {/* Main navigation / brand header */}
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
        {/* Brand Logo & Origin Tag */}
        <div className="flex items-center gap-2.5">
          {/* <div className="w-10 h-10 rounded-full bg-[#E5A93C] flex items-center justify-center text-[#133827] font-bold shadow-inner">
            <span className="text-xl">🐟</span>
          </div> */}
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-serif-bn text-lg sm:text-xl font-bold tracking-tight text-[#FBF8F3]">
                পিওর শুটকি
              </span>
              <span className="bg-[#1E4D38] text-[#E5A93C] text-[10px] px-1.5 py-0.5 rounded font-semibold border border-[#2B664B]">
                কিশোরগঞ্জ
              </span>
            </div>
            <p className="text-[11px] text-[#C4D7CE] hidden sm:block">
              অরিজিনাল দেশি পুঁটি মাছের ঐতিহ্যবাহী চ্যাপা
            </p>
          </div>
        </div>

        {/* Quick Contact & Action CTA */}
        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href="tel:+8801610545222"
            className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#F4EFE6]  bg-[#1E4D38] hover:bg-[#286047] py-1.5 px-3 rounded-full border border-[#2C5F47] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-white" />
            <span className="hidden xs:inline">কল করুন:</span>
            <span className="font-bold text-white">01610545222</span>
          </a>

          <button
            onClick={onOrderClick}
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#E5A93C] hover:bg-[#D99A2D] text-[#133827] font-bold text-sm px-4 py-2 rounded-full shadow-sm hover:shadow transition-all active:scale-95 cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>অর্ডার করুন</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
