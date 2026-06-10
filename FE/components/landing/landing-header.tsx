"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function LandingHeader() {
  const [isOpen, setIsOpen] = useState(false);

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
            <Link href="#features" className="hover:text-blue-600 transition-colors">Sản phẩm</Link>
            <Link href="#solutions" className="hover:text-blue-600 transition-colors">Giải pháp</Link>
            <Link href="#customers" className="hover:text-blue-600 transition-colors">Khách hàng</Link>
            <Link href="#pricing" className="hover:text-blue-600 transition-colors">Bảng giá</Link>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/dang-nhap">
              <Button variant="ghost" className="font-semibold text-gray-700 hover:text-blue-600 hidden md:inline-flex rounded-md">
                Đăng nhập
              </Button>
            </Link>
            <Link href="/dang-ky" className="hidden sm:inline-block">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 sm:px-6 rounded-md transition-colors">
                Đăng ký ngay
              </Button>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-6 space-y-4 shadow-lg animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-4">
            <Link
              href="#features"
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold text-gray-700 hover:text-blue-600 py-1 transition-colors"
            >
              Sản phẩm
            </Link>
            <Link
              href="#solutions"
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold text-gray-700 hover:text-blue-600 py-1 transition-colors"
            >
              Giải pháp
            </Link>
            <Link
              href="#customers"
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold text-gray-700 hover:text-blue-600 py-1 transition-colors"
            >
              Khách hàng
            </Link>
            <Link
              href="#pricing"
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold text-gray-700 hover:text-blue-600 py-1 transition-colors"
            >
              Bảng giá
            </Link>
          </nav>
          <hr className="border-gray-100 my-4" />
          <div className="flex flex-col gap-3">
            <Link href="/dang-nhap" onClick={() => setIsOpen(false)}>
              <Button variant="outline" className="w-full font-semibold text-gray-700 hover:text-blue-600 rounded-md py-5">
                Đăng nhập
              </Button>
            </Link>
            <Link href="/dang-ky" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md py-5">
                Đăng ký ngay
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

