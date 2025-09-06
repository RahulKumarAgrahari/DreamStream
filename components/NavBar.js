// import React from 'react'

// const NavBar = () => {
//   return (
//     <nav>
//       <h1>My Application</h1>
//     </nav>
//   )
// }

// export default NavBar
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-zinc-100 shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="DreamStream Logo" width={36} height={36} />
          <span className="font-bold text-xl text-indigo-600">DreamStream</span>
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/upload" className="text-black hover:text-indigo-600 font-medium">Upload</Link>
          <Link href="/anime" className="text-black hover:text-indigo-600 font-medium">Anime</Link>
          <Link href="/movies" className="text-black hover:text-indigo-600 font-medium">Movies</Link>
          <Link href="/popular" className="text-black hover:text-indigo-600 font-medium">Popular</Link>
          <Link href="/new" className="text-black hover:text-indigo-600 font-medium">New</Link>
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search anime..."
              className="pl-3 pr-10 py-1 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <span className="absolute right-2 top-1.5 text-gray-400">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </span>
          </div>
          {/* Profile/Avatar */}
          <Link href="/profile" className="ml-4">
            <Image src="/avatar.png" alt="Profile" width={32} height={32} className="rounded-full border" />
          </Link>
        </div>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          <svg width="28" height="28" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24">
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 right-4 w-64 bg-zinc-100 shadow-lg rounded-lg border">
          <Link href="/upload" className="text-black block px-6 py-3 border-b hover:bg-indigo-50">Upload</Link>
          <Link href="/anime" className="text-black block px-6 py-3 border-b hover:bg-indigo-50">Anime</Link>
          <Link href="/movies" className="text-black block px-6 py-3 border-b hover:bg-indigo-50">Movies</Link>
          <Link href="/popular" className="text-black block px-6 py-3 border-b hover:bg-indigo-50">Popular</Link>
          <Link href="/new" className="text-black block px-6 py-3 border-b hover:bg-indigo-50">New</Link>
          <div className="px-6 py-3 border-b">
            <input
              type="text"
              placeholder="Search anime..."
              className="w-full pl-3 pr-10 py-1 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <Link href="/profile" className="block px-6 py-3">
            <Image src="/avatar.png" alt="Profile" width={32} height={32} className="rounded-full border inline" />
            <span className="ml-2">Profile</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;