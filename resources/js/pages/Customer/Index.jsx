import React from "react";
import { Head, router } from "@inertiajs/react";

const Index = () => {
  const handleLogout = () => {
    router.post('/logout');
  };

  return (
    <>
      <Head title="Index" />

      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center transition-colors">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl text-center transition-colors">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Welcome to the Landing Page
          </h1>

          <button
            onClick={handleLogout}
            className="mt-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl shadow transition"
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Index;
