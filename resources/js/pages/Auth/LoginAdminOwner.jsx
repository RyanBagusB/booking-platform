import React from 'react';
import { Head, useForm } from '@inertiajs/react';

export default function LoginAdminOwner() {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post('/admin/login');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <Head title="Login Admin/Owner" />

        <h2 className="text-2xl font-bold text-center mb-4">Login Admin / Owner</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={(e) => setData('email', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={(e) => setData('password', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
            {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
          </div>

          <button
            type="submit"
            disabled={processing}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            {processing ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}
