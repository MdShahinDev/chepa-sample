import { ShoppingBag, CheckCircle, ShieldCheck, MapPin, Phone, User,  AlertCircle } from 'lucide-react';
import { PACKAGES } from '../data/assets';
import { useState } from 'react';
const OrderForm = ({ onOrderSuccess }) => {
  const [selectedPackageId, setSelectedPackageId] = useState('500g');

const [deliveryZone, setDeliveryZone] = useState('inside_dhaka');

const [customerName, setCustomerName] = useState('');

const [phoneNumber, setPhoneNumber] = useState('');

const [fullAddress, setFullAddress] = useState('');

const [orderNote, setOrderNote] = useState('');

const [errors, setErrors] = useState({});

const [isSubmitting, setIsSubmitting] = useState(false);

// Selected package details
const selectedPackage =
  PACKAGES.find((pkg) => pkg.id === selectedPackageId) || PACKAGES[1];

// Delivery charge calculation (1kg gets free delivery offer)
// const deliveryCharge =
//   selectedPackageId === '1kg' ? 0 : deliveryZone === 'inside_dhaka'? 70 : 130;

const deliveryCharge = deliveryZone === 'inside_dhaka' ? 100 : 130;

const grandTotal = selectedPackage.discountedPrice + deliveryCharge;

// Validation
const validateForm = () => {
  const newErrors = {};

  // Customer name validation
  if (!customerName.trim()) {
    newErrors.customerName = 'অনুগ্রহ করে আপনার পুরো নাম লিখুন';
  }

  // Phone number validation
  const cleanPhone = phoneNumber.replace(/[^0-9]/g, '');

  if (!cleanPhone) {
    newErrors.phoneNumber = 'মোবাইল নম্বর দেওয়া আবশ্যক';
  } else if (
    cleanPhone.length !== 11 ||
    !cleanPhone.startsWith('01')
  ) {
    newErrors.phoneNumber =
      'সঠিক ১১ ডিজিটের মোবাইল নম্বর দিন (যেমন: 017XXXXXXXX)';
  }

  // Address validation
  if (!fullAddress.trim()) {
    newErrors.fullAddress =
      'সম্পূর্ণ ঠিকানা লিখুন (বাসা/রোড, থানা ও জেলা)';
  } else if (fullAddress.trim().length < 10) {
    newErrors.fullAddress =
      'ডেলিভারির সুবিধার্থে এলাকা, থানা ও জেলা সহ বিস্তারিত লিখুন';
  }

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};

// Order submit
const handleOrderSubmit = (e) => {
  e.preventDefault();

  if (!validateForm()) return;

  setIsSubmitting(true);

  // Simulate order placement process
  setTimeout(() => {
    const orderId = `CHP-${Math.floor(100000 + Math.random() * 900000)}`;

    const now = new Date();

    const orderTime = now.toLocaleDateString('bn-BD', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

    const orderData = {
      orderId,
      orderTime,

      formValues: {
        customerName,
        phoneNumber,
        fullAddress,
        selectedPackage: selectedPackageId,
        deliveryZone,
        orderNote,
      },

      packageDetails: selectedPackage,

      deliveryCharge,

      grandTotal,
    };

    setIsSubmitting(false);

    onOrderSuccess(orderData);
  }, 600);
};

  return (
   <section id="order-section" className="bg-[#FAF6EE] text-[#1E2922] py-12 sm:py-16 px-4 scroll-mt-14">
      <div className="max-w-4xl mx-auto">
        
        {/* Form Header */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 bg-[#E8DEC7] text-[#133827] px-3.5 py-1 rounded-full text-xs font-bold mb-3 border border-[#D8CAA9]">
            <ShoppingBag className="w-3.5 h-3.5 text-[#133827]" />
            <span>সহজ ও দ্রুত ক্যাশ অন ডেলিভারি</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif-bn text-[#133827] mb-2">
            অর্ডার ফর্ম পূরণ করুন
          </h2>
          <p className="text-xs sm:text-sm text-[#5C6E64]">
            নিচের ফর্মটিতে আপনার নাম, ঠিকানা ও প্যাকেজ নির্বাচন করে “অর্ডার কনফার্ম করুন” বাটনে ক্লিক করুন।
          </p>
        </div>

        {/* Main Order Card */}
        <form
          onSubmit={handleOrderSubmit}
          className="bg-white rounded-2xl shadow-xl border-2 border-[#E1D6BA] overflow-hidden"
        >
          {/* Top Green Accent Ribbon */}
          <div className="bg-[#133827] px-6 py-4 text-[#FBF8F3] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xl">📦</span>
              <span className="font-bold text-sm sm:text-base">
                কিশোরগঞ্জের অরিজিনাল দেশি পুঁটির চ্যাপা
              </span>
            </div>
            <div className="flex items-center gap-1.5 bg-[#E5A93C] text-[#133827] text-xs font-bold px-2.5 py-1 rounded-md">
              <ShieldCheck className="w-4 h-4" />
              <span>ক্যাশ অন ডেলিভারি</span>
            </div>
          </div>

          <div className="p-5 sm:p-8 space-y-7">
            
            {/* 1. Package Selection */}
            <div>
              <label className="block text-sm sm:text-base font-bold text-[#133827] mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#133827] text-white flex items-center justify-center text-xs">১</span>
                <span>প্যাকেজ / পরিমাণ নির্বাচন করুন:</span>
              </label>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                {PACKAGES.map((pkg) => {
                  const isSelected = selectedPackageId === pkg.id;
                  return (
                    <div
                      key={pkg.id}
                      onClick={() => setSelectedPackageId(pkg.id)}
                      className={`relative rounded-xl p-4 border-2 transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'border-[#133827] bg-[#F1F8F4] shadow-md ring-2 ring-[#133827]/10'
                          : 'border-[#E2D8C3] bg-white hover:border-[#8EAA9B]'
                      }`}
                    >
                      {/* Top Badge */}
                      {pkg.badge && (
                        <span className={`absolute -top-2.5 right-3 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs ${
                          pkg.isPopular
                            ? 'bg-[#EA580C] text-white'
                            : pkg.id === '1kg'
                            ? 'bg-[#133827] text-[#E5A93C]'
                            : 'bg-[#E5A93C] text-[#133827]'
                        }`}>
                          {pkg.badge}
                        </span>
                      )}

                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bold text-base text-[#133827]">
                            {pkg.name}
                          </span>
                          <input
                            type="radio"
                            name="package"
                            checked={isSelected}
                            onChange={() => setSelectedPackageId(pkg.id)}
                            className="w-4 h-4 accent-[#133827] cursor-pointer"
                          />
                        </div>

                        <div className="text-xs text-[#55695D] font-medium mb-2">
                          {pkg.weightText} ({pkg.piecesApprox})
                        </div>
                      </div>

                      <div className="pt-2 border-t border-[#E5DEC9] flex items-baseline justify-between">
                        <div>
                          <span className="text-lg font-bold text-[#133827]">
                            ৳{pkg.discountedPrice}
                          </span>
                          <span className="text-xs text-[#909E96] line-through ml-1.5">
                            ৳{pkg.originalPrice}
                          </span>
                        </div>
                        <span className="text-[11px] font-semibold text-[#2E7D32] bg-[#E8F5E9] px-1.5 py-0.5 rounded">
                          {pkg.savingsText}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 2. Customer Contact & Delivery Info */}
            <div className="space-y-4 pt-2">
              <label className="block text-sm sm:text-base font-bold text-[#133827] flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#133827] text-white flex items-center justify-center text-xs">২</span>
                <span>আপনার তথ্য দিন:</span>
              </label>

              {/* Name field */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-[#374940] mb-1">
                  আপনার নাম <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#86968E]">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="যেমন: মোঃ কামরুল হাসান"
                    value={customerName}
                    onChange={(e) => {
                      setCustomerName(e.target.value);
                      if (errors.customerName) setErrors({ ...errors, customerName: undefined });
                    }}
                    className={`w-full pl-9 pr-3 py-2.5 bg-[#FAF8F4] border rounded-xl text-sm text-[#18392B] placeholder-[#9EAFA6] focus:bg-white focus:outline-none focus:ring-2 ${
                      errors.customerName
                        ? 'border-red-500 focus:ring-red-200'
                        : 'border-[#D9CDAF] focus:border-[#133827] focus:ring-[#133827]/10'
                    }`}
                  />
                </div>
                {errors.customerName && (
                  <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.customerName}</span>
                  </p>
                )}
              </div>

              {/* Mobile Number field */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-[#374940] mb-1">
                  মোবাইল নম্বর <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#86968E]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    required
                    placeholder="যেমন: 017XXXXXXXX"
                    value={phoneNumber}
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                      if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: undefined });
                    }}
                    className={`w-full pl-9 pr-3 py-2.5 bg-[#FAF8F4] border rounded-xl text-sm text-[#18392B] placeholder-[#9EAFA6] focus:bg-white focus:outline-none focus:ring-2 ${
                      errors.phoneNumber
                        ? 'border-red-500 focus:ring-red-200'
                        : 'border-[#D9CDAF] focus:border-[#133827] focus:ring-[#133827]/10'
                    }`}
                  />
                </div>
                {errors.phoneNumber ? (
                  <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.phoneNumber}</span>
                  </p>
                ) : (
                  <p className="text-[11px] text-[#6A7F74] mt-1">
                    ডেলিভারি সংক্রান্ত তথ্যের জন্য এই নম্বরে কল বা মেসেজ দেওয়া হবে।
                  </p>
                )}
              </div>

              {/* Full Address field */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-[#374940] mb-1">
                  সম্পূর্ণ ঠিকানা (বাসা/রোড, থানা ও জেলা) <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute top-2.5 left-3 pointer-events-none text-[#86968E]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <textarea
                    required
                    rows={2}
                    placeholder="যেমন: বাসা নং ১২, রোড নং ৫, ধানমন্ডি, ঢাকা"
                    value={fullAddress}
                    onChange={(e) => {
                      setFullAddress(e.target.value);
                      if (errors.fullAddress) setErrors({ ...errors, fullAddress: undefined });
                    }}
                    className={`w-full pl-9 pr-3 py-2.5 bg-[#FAF8F4] border rounded-xl text-sm text-[#18392B] placeholder-[#9EAFA6] focus:bg-white focus:outline-none focus:ring-2 ${
                      errors.fullAddress
                        ? 'border-red-500 focus:ring-red-200'
                        : 'border-[#D9CDAF] focus:border-[#133827] focus:ring-[#133827]/10'
                    }`}
                  />
                </div>
                {errors.fullAddress && (
                  <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.fullAddress}</span>
                  </p>
                )}
              </div>

              {/* Delivery Zone Selector */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-[#374940] mb-1.5">
                  ডেলিভারি :
                </label>
                <div className="grid grid-cols-1 gap-3">
                  <div
                    onClick={() => setDeliveryZone('inside_dhaka')}
                    className={`p-3 rounded-xl border-2 transition-all cursor-pointer flex items-center justify-between ${
                      deliveryZone === 'inside_dhaka'
                        ? 'border-[#133827] bg-[#F1F8F4] text-[#133827]'
                        : 'border-[#DED5C0] bg-white text-[#4A5D53]'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="delivery_zone"
                        checked={deliveryZone === 'inside_dhaka'}
                        onChange={() => setDeliveryZone('inside_dhaka')}
                        className="w-4 h-4 accent-[#133827]"
                      />
                      <span className="text-xs sm:text-sm font-bold">ডেলিভারি চার্জ</span>
                    </div>
                    <span className="text-xs font-bold text-[#133827]">
                      {selectedPackageId === '1kg' ? 'ফ্রি' : '৳১০০'}
                    </span>
                  </div>

                  {/* <div
                    onClick={() => setDeliveryZone('outside_dhaka')}
                    className={`p-3 rounded-xl border-2 transition-all cursor-pointer flex items-center justify-between ${
                      deliveryZone === 'outside_dhaka'
                        ? 'border-[#133827] bg-[#F1F8F4] text-[#133827]'
                        : 'border-[#DED5C0] bg-white text-[#4A5D53]'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="delivery_zone"
                        checked={deliveryZone === 'outside_dhaka'}
                        onChange={() => setDeliveryZone('outside_dhaka')}
                        className="w-4 h-4 accent-[#133827]"
                      />
                      <span className="text-xs sm:text-sm font-bold">ঢাকার বাইরে</span>
                    </div>
                    <span className="text-xs font-bold text-[#133827]">
                      {selectedPackageId === '1kg' ? 'ফ্রি' : '৳১৩০'}
                    </span>
                  </div> */}
                </div>
              </div>

              {/* Special Note (Optional) */}
              <div>
                <label className="block text-xs font-medium text-[#576B5F] mb-1">
                  বিশেষ কোনো নির্দেশনা থাকলে লিখুন (ঐচ্ছিক)
                </label>
                <input
                  type="text"
                  placeholder="যেমন: সন্ধ্যার পর ডেলিভারি দিন"
                  value={orderNote}
                  onChange={(e) => setOrderNote(e.target.value)}
                  className="w-full px-3 py-2 bg-[#FAF8F4] border border-[#D9CDAF] rounded-lg text-xs text-[#18392B] placeholder-[#A0B0A7] focus:bg-white focus:outline-none focus:border-[#133827]"
                />
              </div>

            </div>

            {/* 3. Order Summary & Price Calculation */}
            <div className="bg-[#FAF5E8] rounded-xl p-4 sm:p-5 border border-[#E5DAC0] space-y-2.5">
              <h4 className="text-sm font-bold text-[#133827] border-b border-[#E1D4B6] pb-1.5 flex items-center justify-between">
                <span>অর্ডার সামারি</span>
                <span className="text-xs text-[#7C4A27] font-semibold">ক্যাশ অন ডেলিভারি</span>
              </h4>

              <div className="flex justify-between text-xs sm:text-sm text-[#4E6157]">
                <span>প্যাকেজ: {selectedPackage.name} ({selectedPackage.weightText})</span>
                <span className="font-semibold text-[#133827]">৳{selectedPackage.discountedPrice}</span>
              </div>

              <div className="flex justify-between text-xs sm:text-sm text-[#4E6157]">
                <span>ডেলিভারি চার্জ</span>
                <span className="font-semibold text-[#133827]">
                  {deliveryCharge === 0 ? (
                    <span className="text-[#2E7D32] font-bold">ফ্রি (০ টাকা)</span>
                  ) : (
                    `৳${deliveryCharge}`
                  )}
                </span>
              </div>

              <div className="border-t border-[#E1D4B6] pt-2 flex justify-between items-baseline">
                <span className="text-base sm:text-lg font-bold text-[#133827]">
                  সর্বমোট টাকা:
                </span>
                <span className="text-xl sm:text-2xl font-bold text-[#133827]">
                  ৳{grandTotal}
                </span>
              </div>

              <p className="text-[11px] text-[#697E72] pt-1">
                * পণ্য হাতে পাওয়ার পর ডেলিভারি ম্যানকে ৳{grandTotal} পরিশোধ করবেন।
              </p>
            </div>

            {/* Submit Action Button */}
            <div className="space-y-3 pt-1">
              <button
                type="submit"
                disabled={isSubmitting}
                id="confirm-order-btn"
                className="w-full bg-[#E5A93C] hover:bg-[#F2B647] active:bg-[#D49526] text-[#133827] font-bold text-lg sm:text-xl py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2 transform active:scale-[0.99]"
              >
                {isSubmitting ? (
                  <span>অর্ডার প্রসেস হচ্ছে...</span>
                ) : (
                  <>
                    <CheckCircle className="w-6 h-6 text-[#133827]" />
                    <span>অর্ডার কনফার্ম করুন</span>
                  </>
                )}
              </button>

              {/* Reassuring micro-copy below button */}
              <div className="text-center space-y-1">
                <p className="text-xs text-[#52685C] font-semibold flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#133827]" />
                  <span>আগে দেখে নিন, তারপর পেমেন্ট করুন। অগ্রিম টাকা দেওয়ার ঝামেলা নেই।</span>
                </p>
                <p className="text-[11px] text-[#7A8E83]">
                  অর্ডার কনফার্ম করার পর আমাদের প্রতিনিধি আপনাকে কল করে ডেলিভারির তারিখ জানিয়ে দেবে।
                </p>
              </div>
            </div>

          </div>
        </form>

        {/* WhatsApp & Call backup order channel */}
        <div className="mt-6 text-center text-xs text-[#55695D] flex flex-wrap items-center justify-center gap-4">
          <span>ফর্ম পূরণে সমস্যা হলে সরাসরি যোগাযোগ করুন:</span>
          <a
            href="https://wa.me/8801700000000?text=আমি%20কিশোরগঞ্জের%20দেশি%20পুঁটির%20চ্যাপা%20অর্ডার%20করতে%20চাই"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-bold text-[#1E7E34] hover:underline"
          >
            <span>💬 হোয়াটসঅ্যাপে অর্ডার দিন</span>
          </a>
          <span>বা</span>
          <a
            href="tel:+8801610545222"
            className="inline-flex items-center gap-1 font-bold text-[#133827] hover:underline"
          >
            <span>📞 কল করুন: 01610545222</span>
          </a>
        </div>

      </div>
    </section>
  )
}

export default OrderForm
