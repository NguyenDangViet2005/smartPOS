import { LoginForm } from "@/components/forms/login.form";
import Image from "next/image";
import Link from "next/link";
import { PublicRoute } from "@/components/common/PublicRoute";
import { ArrowLeft } from "lucide-react";

export default function LoginPage() {
  return (
    <PublicRoute>
      <div className="min-h-screen bg-white flex flex-col font-sans relative">
        <div className="absolute top-6 left-6 sm:top-8 sm:left-8 flex flex-col items-start z-10">
          <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Quay về trang chủ
          </Link>
          <Image
            src="/logo/smartpos-logo.png"
            alt="SmartPOS"
            width={200}
            height={60}
            className="h-10 w-auto object-contain"
            priority
          />
        </div>

        <div className="flex-1 flex flex-col items-center justify-center p-4">
          <div className="w-full max-w-[400px] mt-24 sm:mt-0">
            <div className="flex flex-col items-center mb-8">
              <h2 className="text-2xl font-bold tracking-tight text-center text-gray-900 mb-2">Đăng nhập tài khoản</h2>
              <p className="text-sm text-gray-500 text-center">
                Nhập thông tin xác thực để bắt đầu phiên truy cập của bạn
              </p>
            </div>

            <div className="w-full">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </PublicRoute>
  );
}
