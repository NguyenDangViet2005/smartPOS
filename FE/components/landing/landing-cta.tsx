import Link from "next/link";
import { Button } from "@/components/ui/button";

export function LandingCTA() {
  return (
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
           <div className="bg-blue-600 rounded-md p-10 md:p-14 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
             <div className="text-left text-white max-w-2xl">
               <h2 className="text-3xl md:text-4xl font-bold mb-4">Bạn đã sẵn sàng đồng hành cùng SmartPOS?</h2>
               <p className="text-blue-100 text-lg mb-0 text-left">
                 Đăng ký và quản lý ngay hôm nay, hệ thống thanh toán và cấu hình doanh nghiệp trọn bộ không phát sinh chi phí ban đầu.
               </p>
             </div>
             <div className="flex-shrink-0 w-full md:w-auto">
                <Link href="/dang-ky" className="block w-full sm:w-auto">
                  <Button size="lg" className="w-full bg-white text-blue-700 hover:bg-gray-100 font-bold px-10 h-14 rounded-md shadow-md text-base border-none">
                    Bắt đầu hoàn toàn miễn phí
                  </Button>
                </Link>
             </div>
           </div>
        </div>
      </section>
  );
}
