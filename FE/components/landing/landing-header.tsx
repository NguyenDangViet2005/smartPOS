import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function LandingHeader() {
  return (
    <header className="sticky top-0 inset-x-0 z-50 bg-white border-b border-gray-100">
      <div className="mx-auto max-w-6xl px-4 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/logo/smartpos-logo.png"
            alt="SmartPOS"
            width={160}
            height={50}
            className="h-10 w-auto object-contain"
            priority
          />
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-700">
            <Link href="#features" className="hover:text-blue-600">Sản phẩm</Link>
            <Link href="#solutions" className="hover:text-blue-600">Giải pháp</Link>
            <Link href="#customers" className="hover:text-blue-600">Khách hàng</Link>
            <Link href="#pricing" className="hover:text-blue-600">Bảng giá</Link>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/dang-nhap">
              <Button variant="ghost" className="font-semibold text-gray-700 hover:text-blue-600 hidden sm:inline-flex rounded-md">
                Đăng nhập
              </Button>
            </Link>
            <Link href="/dang-ky">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 sm:px-6 rounded-md">
                Đăng ký ngay
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
