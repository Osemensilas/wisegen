'use client';

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
    const pathname = usePathname();

    console.log(pathname);

    const [mobileMenu, setMobileMenu] = useState(false);

    return ( 
        <>
        <header className="fixed left-0 top-0 z-50 w-full border-b border-white/20 bg-[#fffdf8]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400 font-black text-slate-950">
              W
            </div>

            <div>
              <p className="text-xl font-black tracking-tight">WISEGEN</p>
              <p className="hidden text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-500 sm:block">
                Faith • Wisdom • Purpose
              </p>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-8 lg:flex">
            <Link
              href="/"
              className="text-sm font-semibold text-slate-900 transition hover:text-amber-600"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-sm font-semibold text-slate-600 transition hover:text-amber-600"
            >
              About
            </Link>

            <Link
              href="/events"
              className="text-sm font-semibold text-slate-600 transition hover:text-amber-600"
            >
              Events
            </Link>

            <Link
              href="/contact"
              className="text-sm font-semibold text-slate-600 transition hover:text-amber-600"
            >
              Contact
            </Link>
          </nav>

          <div className="hidden lg:block">
            <Link
              href="/join"
              className="rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white transition hover:bg-amber-500 hover:text-slate-950"
            >
              Join Us
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-950 text-white lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenu ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileMenu && (
          <div className="border-t border-slate-200 bg-[#fffdf8] px-5 py-6 lg:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col gap-5">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Events", "/events"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setMobileMenu(false)}
                  className="text-base font-semibold"
                >
                  {label}
                </Link>
              ))}

              <Link
                href="/join"
                onClick={() => setMobileMenu(false)}
                className="mt-2 rounded-full bg-amber-400 px-6 py-3 text-center text-sm font-bold text-slate-950"
              >
                Join WiseGen
              </Link>
            </nav>
          </div>
        )}
      </header>
        </>
     );
}
 
export default Header;