import React from 'react';
import { Link, Head, useForm } from '@inertiajs/react';

const Login = () => {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post('/login');
  };

  return (
    <>
      <Head title="Login - VillaCation" />
      <section className="min-h-screen flex items-center justify-center bg-[#f9f9f9] px-4">
        <div className="max-w-md flex flex-col w-full bg-white shadow-lg rounded-lg p-8">
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center text-[#FF5820] font-bold text-sm sm:text-base hover:underline"
            >
              ← Kembali ke Beranda
            </Link>
          </div>

          <div className="mb-6 text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#181E4B] mt-2">
              Selamat Datang
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2">
              Masuk ke akun Anda untuk melanjutkan
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-1 text-gray-600 text-sm sm:text-base md:text-lg font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={(e) => setData('email', e.target.value)}
                placeholder="example@mail.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#FF5820]"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block mb-1 text-gray-600 text-sm sm:text-base md:text-lg font-medium">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={data.password}
                onChange={(e) => setData('password', e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#FF5820]"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            <div className="flex justify-between text-xs sm:text-sm md:text-base">
              <Link href="/forgot-password" className="text-[#FF5820] hover:underline">
                Lupa password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={processing}
              className={`bg-[#FF4000] text-white font-bold border border-[#FF4000] w-full py-2 rounded-md text-sm sm:text-base md:text-lg transition duration-200 ${
                processing
                  ? 'opacity-60 cursor-not-allowed'
                  : 'hover:bg-white hover:text-[#FF4000] cursor-pointer'
              }`}
            >
              {processing ? 'Memproses...' : 'Masuk'}
            </button>
          </form>

          <p className="mt-6 text-center text-sm sm:text-base text-gray-600">
            Belum punya akun?{' '}
            <Link href="/register" className="text-[#FF5820] font-medium hover:underline">
              Daftar sekarang
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default Login;
