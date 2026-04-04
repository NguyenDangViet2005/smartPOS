import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LandingHero() {
  return (
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Box: Text Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center text-sm font-semibold text-blue-700 bg-blue-50 px-3 py-1.5 rounded">
                <Zap className="h-4 w-4 mr-2 text-blue-600" />
                Miễn phí khởi tạo và duy trì phần mềm
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.2]">
                Quản lý bán hàng <br className="hidden md:block"/>
                <span className="text-blue-600 block mt-1">Đơn giản - Hiệu quả</span>
              </h1>
              <p className="text-base text-gray-600 leading-relaxed max-w-lg mt-4">
                Giải pháp toàn diện giúp bạn tối ưu quy trình bán hàng, kiểm soát doanh thu tự động. Triển khai nhanh chóng và không yêu cầu thủ tục phức tạp.
              </p>
              
              <ul className="space-y-3 py-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Giao dịch liền mạch, thanh toán 1 chạm</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Giám sát doanh thu và lợi nhuận thời gian thực</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Chỉ 5 phút thiết lập đăng ký</span>
                </li>
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link href="/dang-nhap">
                  <Button size="lg" className="w-full sm:w-auto h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 rounded-md text-base shadow-sm">
                    Trải nghiệm ngay
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="#">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 font-semibold px-8 text-gray-700 border-gray-300 hover:bg-gray-50 rounded-md text-base">
                    Liên hệ tư vấn
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Box: Image Dashboard */}
            <div className="relative">
              <div className="relative">
                <Image
                  src="/images/smartPOS-omnichanel-1-1-1.png"
                  alt="SmartPOS Dashboard"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white border border-gray-200 p-4 shadow-lg rounded-md hidden lg:block transform -rotate-2">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-green-100 flex items-center justify-center rounded">
                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Hoạt động ổn định</p>
                    <p className="text-xs text-gray-500">Uptime 99.9%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
