
"use client";

import Link from "next/link";
import { useState } from "react";
// import { useSession, signIn, signOut } from "next-auth/react"


const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className=" navbar sticky top-0 z-50 bg-white md:px-16 shadow-sm ">
      <div className="max-w-7xl mx-auto px-4 text-black">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold">
            Shop
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-gray-800">
              Home
            </Link>
            <Link href="/products" className="hover:text-gray-800">
              Products
            </Link>
          </div>

          {/* <button
            onClick={() => signIn()}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
          >
            Login
          </button> */}

          {/* Mobile Button */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gray-700 px-4 py-2 space-y-2">
          <Link href="/" className="block hover:text-gray-800">
            Home
          </Link>
          <Link href="/products" className="block hover:text-gray-800">
            Products
          </Link>
          </div>
      )}
    </nav>
  );
};
export default Navbar;
