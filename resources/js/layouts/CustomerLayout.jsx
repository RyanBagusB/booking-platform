import React from 'react';
import { Link } from '@inertiajs/react';

const navItems = ['Home', 'Browse', 'Favorite', 'History'];

const footerSections = [
  {
    title: 'For Beginners',
    links: ['New Account', 'Start Booking a Room', 'Use Payments'],
  },
  {
    title: 'Explore Us',
    links: ['About', 'Privacy Policy', 'Terms & Conditions'],
  },
  {
    title: 'Getting Touch',
    links: ['Support@staycation.id', '081 - 9485 - 9982', 'Staycation Oy, Banten'],
  },
];

const Header = () => {
  return (
    <header className="sticky top-0 left-0 flex items-center justify-between bg-white px-24 py-4 border-b border-[#E5E5E5]">
      <div className="text-2xl font-semibold">
        <h1 className="text-nowrap text-[#152C5B]">
          Villa<span className="text-[#FF4000]">Cation</span>.
        </h1>
      </div>

      <div className="flex gap-6">
        <nav className="text-base">
          <ul className="flex space-x-4 items-center">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href="#"
                  className={`
                    px-2 py-2 flex items-center rounded text-base transition
                    ${item === 'Home' ? 'text-[#FF4000]' : 'text-black hover:text-[#FF4000]'}
                  `}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex space-x-4 items-center">
          <Link
            href="#"
            className="bg-[#FF4000] text-white font-bold border border-[#FF4000] w-28 py-2 rounded-[4px] text-center transition duration-200 hover:bg-white hover:text-[#FF4000]"
          >
            Register
          </Link>
          <Link
            href="#"
            className="bg-white text-[#FF4000] font-bold border border-[#FF4000] w-28 py-2 rounded-[4px] text-center transition duration-200 hover:bg-[#FF4000] hover:text-white"
          >
            Sign In
          </Link>
        </div>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white px-24 py-6 border-t border-[#E5E5E5] flex flex-col space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1 flex flex-col gap-2">
          <h2 className="text-[#152C5B] text-2xl font-semibold">
            Villa<span className="text-[#FF4000]">Cation</span>.
          </h2>
          <p className="text-base text-[#B0B0B0]">
            We kaboom your beauty holiday instantly and memorable
          </p>
        </div>

        {footerSections.map((section, index) => (
          <div key={index} className="flex flex-col gap-2">
            <h3 className="text-[#152C5B] text-lg font-semibold">{section.title}</h3>
            <ul className="text-[#B0B0B0] text-base space-y-1">
              {section.links.map((link, idx) => (
                <li key={idx}><Link href="#">{link}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="text-center text-base text-[#B0B0B0] space-x-4">
        <span>&copy; Copyright {new Date().getFullYear()}</span>
        <span>All rights reserved</span>
        <span>Staycation</span>
      </div>
    </footer>
  );
};


const CustomerLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex flex-col flex-1">{children}</main>

      <Footer />
    </div>
  );
};

export default CustomerLayout;
