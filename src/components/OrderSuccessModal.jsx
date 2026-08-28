import { CheckCircle, Truck, MessageCircle, } from 'lucide-react';

const OrderSuccessModal = ({ order, onClose }) => {
    const { orderId, orderTime, formValues, packageDetails, deliveryCharge, grandTotal } = order;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-[#FAF7F0] text-[#1E2922] w-full max-w-lg rounded-2xl shadow-2xl border-2 border-[#133827] overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="bg-[#133827] text-white p-6 text-center">
          <div className="w-16 h-16 bg-[#E5A93C] text-[#133827] rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
            <CheckCircle className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-bold font-serif-bn text-[#FBF8F3] mb-1">
            আপনার অর্ডারটি সফলভাবে গ্রহণ করা হয়েছে!
          </h3>
          <p className="text-xs sm:text-sm text-[#C2D8CD]">
            কিশোরগঞ্জের খাঁটি চ্যাপা শুঁটকি বেছে নেওয়ার জন্য আপনাকে ধন্যবাদ।
          </p>
        </div>

        {/* Order Details Body */}
        <div className="p-6 space-y-4 text-xs sm:text-sm">
          
          {/* Order ID & Time Badge */}
          <div className="bg-white rounded-xl p-3 border border-[#E3D8BF] flex justify-between items-center">
            <div>
              <span className="text-[11px] text-[#73877C] block font-medium">অর্ডার আইডি</span>
              <span className="font-mono font-bold text-sm text-[#133827]">{orderId}</span>
            </div>
            <div className="text-right">
              <span className="text-[11px] text-[#73877C] block font-medium">অর্ডারের সময়</span>
              <span className="text-xs font-semibold text-[#18392B]">{orderTime}</span>
            </div>
          </div>

          {/* Customer Delivery Info */}
          <div className="bg-white rounded-xl p-4 border border-[#E3D8BF] space-y-2">
            <h4 className="font-bold text-[#133827] text-xs uppercase tracking-wider border-b border-[#F0E6D2] pb-1">
              ডেলিভারি ঠিকানা ও গ্রাহক বিবরণ
            </h4>
            <div className="grid grid-cols-3 gap-1">
              <span className="text-[#6D8075]">নাম:</span>
              <span className="col-span-2 font-bold text-[#18392B]">{formValues.customerName}</span>
            </div>
            <div className="grid grid-cols-3 gap-1">
              <span className="text-[#6D8075]">মোবাইল:</span>
              <span className="col-span-2 font-bold text-[#18392B]">{formValues.phoneNumber}</span>
            </div>
            <div className="grid grid-cols-3 gap-1">
              <span className="text-[#6D8075]">ঠিকানা:</span>
              <span className="col-span-2 text-[#18392B]">{formValues.fullAddress}</span>
            </div>
            {formValues.orderNote && (
              <div className="grid grid-cols-3 gap-1 pt-1 border-t border-[#F5EEDC]">
                <span className="text-[#6D8075]">নোট:</span>
                <span className="col-span-2 italic text-[#635543]">{formValues.orderNote}</span>
              </div>
            )}
          </div>

          {/* Financial Breakdown */}
          <div className="bg-[#FAF2DF] rounded-xl p-4 border border-[#E5D7B7] space-y-1.5">
            <div className="flex justify-between">
              <span>পণ্য ({packageDetails.name} - {packageDetails.weightText}):</span>
              <span className="font-bold text-[#133827]">৳{packageDetails.discountedPrice}</span>
            </div>
            <div className="flex justify-between">
              <span>ডেলিভারি চার্জ:</span>
              <span className="font-bold text-[#133827]">
                {deliveryCharge === 0 ? 'ফ্রি' : `৳${deliveryCharge}`}
              </span>
            </div>
            <div className="border-t border-[#DECFA9] pt-2 flex justify-between items-baseline text-sm sm:text-base font-bold text-[#133827]">
              <span>ক্যাশ অন ডেলিভারি (মোট বিল):</span>
              <span className="text-lg sm:text-xl font-extrabold text-[#133827]">৳{grandTotal}</span>
            </div>
          </div>

          {/* Delivery Note */}
          <div className="bg-[#E7F1EB] rounded-xl p-3.5 border border-[#BDDDCB] flex items-start gap-2.5 text-xs text-[#1E4D38]">
            <Truck className="w-5 h-5 shrink-0 text-[#133827] mt-0.5" />
            <div>
              <p className="font-bold mb-0.5">ডেলিভারি সংক্রান্ত নির্দেশনা:</p>
              <p className="leading-relaxed text-[#355D48]">
                আমাদের প্রতিনিধি শীঘ্রই আপনার নম্বরে কল দিয়ে অর্ডারটি কনফার্ম করে পার্সেল পাঠাবেন। ডেলিভারি রাইডারের সামনে প্যাকেট খুলে চেক করে ৳{grandTotal} পরিশোধ করবেন।
              </p>
            </div>
          </div>

          {/* Support Actions */}
          <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
            <a
              href={`https://wa.me/8801700000000?text=হ্যালো,%20আমি%20কিশোরগঞ্জের%20চ্যাপা%20অর্ডার%20করেছি।%20অর্ডার%20আইডি:%20${orderId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[#1E7E34] hover:bg-[#155D27] text-white font-bold py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 transition text-center"
            >
              <MessageCircle className="w-4 h-4" />
              <span>হোয়াটসঅ্যাপে আপডেট নিন</span>
            </a>

            <button
              onClick={onClose}
              className="bg-[#133827] hover:bg-[#1E4D38] text-white font-bold py-2.5 px-4 rounded-xl transition cursor-pointer"
            >
              ঠিক আছে
            </button>
          </div>

        </div>

      </div>
    </div>
  )
}

export default OrderSuccessModal
