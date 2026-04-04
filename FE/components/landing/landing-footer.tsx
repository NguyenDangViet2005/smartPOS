import Image from "next/image";
import Link from "next/link";

export function LandingFooter() {
  return (
      <footer className="bg-white border-t border-gray-200 pt-16 pb-12">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12 mb-12">
            <div className="md:col-span-1">
              <Image
                src="/logo/smartpos-logo.png"
                alt="SmartPOS"
                width={150}
                height={50}
                className="h-10 w-auto object-contain mb-6"
                priority
              />
              <p className="text-gray-500 text-sm leading-relaxed">
                Nền tảng vận hành tối ưu nhất để quản lý bán hàng cho các tổ chức cá nhân, doanh nghiệp bán lẻ tại Việt Nam.
              </p>
              <div className="mt-6">
                <p className="text-sm font-semibold text-gray-900 mb-2">Tổng đài hỗ trợ: 1900 8888</p>
                <p className="text-xs text-gray-500">Giờ hành chính: Thứ Hai – Thứ Bảy</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-5 text-sm uppercase tracking-wider">Về chúng tôi</h4>
              <ul className="space-y-3">
                <li><Link href="#" className="font-medium text-gray-600 hover:text-blue-600 text-sm">Về SmartPOS</Link></li>
                <li><Link href="#" className="font-medium text-gray-600 hover:text-blue-600 text-sm">Tin tức & Sự kiện</Link></li>
                <li><Link href="#" className="font-medium text-gray-600 hover:text-blue-600 text-sm">Đội ngũ kỹ thuật</Link></li>
                <li><Link href="#" className="font-medium text-gray-600 hover:text-blue-600 text-sm">Liên hệ</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-5 text-sm uppercase tracking-wider">Giải pháp thực tiễn</h4>
              <ul className="space-y-3">
                <li><Link href="#" className="font-medium text-gray-600 hover:text-blue-600 text-sm">Cho chuỗi Cửa hàng bán lẻ</Link></li>
                <li><Link href="#" className="font-medium text-gray-600 hover:text-blue-600 text-sm">Cho chuỗi Nhà hàng (F&B)</Link></li>
                <li><Link href="#" className="font-medium text-gray-600 hover:text-blue-600 text-sm">Cho Siêu thị tiện lợi</Link></li>
                <li><Link href="#" className="font-medium text-gray-600 hover:text-blue-600 text-sm">Dành cho Nhà phát triển (Developer)</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-5 text-sm uppercase tracking-wider">Tài nguyên quản trị</h4>
              <ul className="space-y-3">
                <li><Link href="#" className="font-medium text-gray-600 hover:text-blue-600 text-sm">Chứng chỉ bảo mật quốc tế</Link></li>
                <li><Link href="#" className="font-medium text-gray-600 hover:text-blue-600 text-sm">Chính sách bảo mật dữ liệu</Link></li>
                <li><Link href="#" className="font-medium text-gray-600 hover:text-blue-600 text-sm">Thỏa thuận sử dụng</Link></li>
                <li><Link href="#" className="font-medium text-gray-600 hover:text-blue-600 text-sm">Tài liệu API</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-6 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-gray-500 text-xs mt-2 leading-relaxed max-w-3xl">
              Công ty Cổ phần Công nghệ SmartPOS. MST: 0102030405. <br/>
              Địa chỉ: Số 1 Đường Sáng Tạo, Khu Công nghệ cao, TP Thủ Đức, Hồ Chí Minh, Việt Nam.
            </p>
            <div className="flex gap-3">
             <div className="w-8 h-8 flex items-center justify-center rounded bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600 cursor-pointer transition-colors text-xs font-bold">
               fb
             </div>
             <div className="w-8 h-8 flex items-center justify-center rounded bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600 cursor-pointer transition-colors text-xs font-bold">
               in
             </div>
            </div>
          </div>
        </div>
      </footer>
  );
}
