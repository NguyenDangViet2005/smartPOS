export function LandingStats() {
  return (
      <section className="py-12 bg-gray-50 border-y border-gray-200">
         <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center border-r md:border-gray-200">
                <p className="text-3xl font-bold text-blue-600 mb-1">100 Tr+</p>
                <p className="text-sm text-gray-600 font-medium">Tài khoản Ngân hàng</p>
              </div>
              <div className="text-center border-r-0 md:border-r md:border-gray-200">
                <p className="text-3xl font-bold text-blue-600 mb-1">47 Tr+</p>
                <p className="text-sm text-gray-600 font-medium">Ví điện tử</p>
              </div>
              <div className="text-center border-r md:border-gray-200">
                <p className="text-3xl font-bold text-blue-600 mb-1">10K+</p>
                <p className="text-sm text-gray-600 font-medium">Đối tác Cửa hàng</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600 mb-1">24/7</p>
                <p className="text-sm text-gray-600 font-medium">Hỗ trợ Dịch vụ</p>
              </div>
            </div>
         </div>
      </section>
  );
}
