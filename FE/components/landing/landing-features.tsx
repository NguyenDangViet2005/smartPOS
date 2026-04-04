import {
  Store,
  BarChart3,
  Users,
  Package,
  CreditCard,
  Smartphone,
} from "lucide-react";

export function LandingFeatures() {
  return (
      <section id="features" className="py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="text-left mb-12 max-w-2xl border-l-4 border-blue-600 pl-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tại sao khách hàng <br/> an tâm lựa chọn SmartPOS?
            </h2>
            <p className="text-gray-600 text-lg">
              Giải pháp được phát triển với sứ mệnh thúc đẩy quy trình quản lý tinh gọn, tối ưu chi phí và tăng trưởng bền vững cho kinh doanh tại Việt Nam.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
             <div className="bg-white border border-gray-200 p-5 md:p-6 rounded-md hover:border-blue-500 hover:shadow-md transition-all duration-200 flex gap-4 items-start">
               <div className="w-12 h-12 bg-blue-50 flex-shrink-0 flex items-center justify-center rounded">
                 <Store className="h-6 w-6 text-blue-600" />
               </div>
               <div>
                 <h3 className="text-base font-bold text-gray-900 mb-1.5">Quản lý bán hàng</h3>
                 <p className="text-gray-600 text-sm leading-relaxed">
                   Quản lý toàn diện quy trình bán hàng từ tạo đơn, thu tiền đến in hóa đơn.
                 </p>
               </div>
             </div>

             <div className="bg-white border border-gray-200 p-5 md:p-6 rounded-md hover:border-blue-500 hover:shadow-md transition-all duration-200 flex gap-4 items-start">
               <div className="w-12 h-12 bg-blue-50 flex-shrink-0 flex items-center justify-center rounded">
                 <Package className="h-6 w-6 text-blue-600" />
               </div>
               <div>
                 <h3 className="text-base font-bold text-gray-900 mb-1.5">Kiểm soát kho hàng</h3>
                 <p className="text-gray-600 text-sm leading-relaxed">
                   Tự động gạch nợ và khấu trừ kho khi có giao dịch. Báo cáo dòng chảy hàng hóa.
                 </p>
               </div>
             </div>

             <div className="bg-white border border-gray-200 p-5 md:p-6 rounded-md hover:border-blue-500 hover:shadow-md transition-all duration-200 flex gap-4 items-start">
               <div className="w-12 h-12 bg-blue-50 flex-shrink-0 flex items-center justify-center rounded">
                 <CreditCard className="h-6 w-6 text-blue-600" />
               </div>
               <div>
                 <h3 className="text-base font-bold text-gray-900 mb-1.5">Thanh toán liền mạch</h3>
                 <p className="text-gray-600 text-sm leading-relaxed">
                   Đáp ứng không tiền mặt qua thẻ ATM, mã QR và kết nối ví điện tử tiện lợi.
                 </p>
               </div>
             </div>

             <div className="bg-white border border-gray-200 p-5 md:p-6 rounded-md hover:border-blue-500 hover:shadow-md transition-all duration-200 flex gap-4 items-start">
               <div className="w-12 h-12 bg-blue-50 flex-shrink-0 flex items-center justify-center rounded">
                 <BarChart3 className="h-6 w-6 text-blue-600" />
               </div>
               <div>
                 <h3 className="text-base font-bold text-gray-900 mb-1.5">Báo cáo doanh thu</h3>
                 <p className="text-gray-600 text-sm leading-relaxed">
                   Tự động tổng hợp dữ liệu, cung cấp các biểu đồ đánh giá thực tế chi phí.
                 </p>
               </div>
             </div>

             <div className="bg-white border border-gray-200 p-5 md:p-6 rounded-md hover:border-blue-500 hover:shadow-md transition-all duration-200 flex gap-4 items-start">
               <div className="w-12 h-12 bg-blue-50 flex-shrink-0 flex items-center justify-center rounded">
                 <Users className="h-6 w-6 text-blue-600" />
               </div>
               <div>
                 <h3 className="text-base font-bold text-gray-900 mb-1.5">Quản trị nhân sự</h3>
                 <p className="text-gray-600 text-sm leading-relaxed">
                   Bảo mật quyền hạn truy xuất dữ liệu kế toán và phân ca làm việc chi tiết.
                 </p>
               </div>
             </div>

             <div className="bg-white border border-gray-200 p-5 md:p-6 rounded-md hover:border-blue-500 hover:shadow-md transition-all duration-200 flex gap-4 items-start">
               <div className="w-12 h-12 bg-blue-50 flex-shrink-0 flex items-center justify-center rounded">
                 <Smartphone className="h-6 w-6 text-blue-600" />
               </div>
               <div>
                 <h3 className="text-base font-bold text-gray-900 mb-1.5">Hạ tầng đám mây</h3>
                 <p className="text-gray-600 text-sm leading-relaxed">
                   Mọi dữ liệu luôn an toàn, bảo mật xuyên nền tảng với chuẩn quốc tế.
                 </p>
               </div>
             </div>
          </div>
        </div>
      </section>
  );
}
