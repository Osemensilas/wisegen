import Link from "next/link";

const Footer = () => {
    return ( 
        <>
        <footer className="bg-slate-950 px-5 py-14 text-white sm:px-8 lg:px-10">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400 font-black text-slate-950">
                            W
                            </div>

                            <p className="text-xl font-black">WISEGEN</p>
                        </div>

                        <p className="mt-5 max-w-md leading-7 text-slate-400">
                            Raising a generation that loves God, lives wisely, and fulfills
                            purpose.
                        </p>

                        <p className="mt-5 text-sm text-slate-400">
                            wisegen0524@gmail.com
                        </p>
                    </div>

                    <div>
                        <p className="font-bold">Explore</p>

                        <div className="mt-5 space-y-3 text-sm text-slate-400">
                            <Link href="/about" className="block hover:text-white">
                            About
                            </Link>

                            <Link href="/events" className="block hover:text-white">
                            Events
                            </Link>

                            <Link href="/news" className="block hover:text-white">
                            News
                            </Link>

                            <Link href="/contact" className="block hover:text-white">
                            Contact
                            </Link>
                        </div>
                    </div>

                    <div>
                    <p className="font-bold">Get Involved</p>

                    <div className="mt-5 space-y-3 text-sm text-slate-400">
                        <Link href="/join" className="block hover:text-white">
                        Join WiseGen
                        </Link>

                        <Link href="/events" className="block hover:text-white">
                        Upcoming Events
                        </Link>
                    </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-white/10 pt-6 text-sm text-slate-500">
                    © {new Date().getFullYear()} WiseGen. All rights reserved.
                </div>
            </div>
        </footer>
        </>
     );
}
 
export default Footer;