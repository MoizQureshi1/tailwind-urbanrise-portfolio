import Link from "next/link";
import { RiMenuFoldFill } from "react-icons/ri";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"

export default function Header() {
    return (
        <header className="bg-stone-800 text-white max-w-screen-2xl mx-auto">
            <div className="flex justify-around pt-3">
                <div className="text-3xl font-bold">
                    <h2 className="text-left pt-8 pr-8 hidden md:block lg:block xl:block">Urban<span className="text-yellow-500">Rise</span></h2>
                </div>
                <div className=" flex ">
                    <ul className="hidden md:block lg:block xl:block">
                        <li className="flex px-12 pt-10 pl-10 gap-4 font-semibold">
                            <Link href="/" className="hover:underline">Home</Link>
                            <Link href="/about" className="hover:underline">About Us</Link>
                            <Link href="/project" className="hover:underline">Projects</Link>
                            <Link href="/services" className="hover:underline">Services</Link>
                            <Link href="/member" className="hover:underline">Our Team</Link>
                        </li>
                    </ul>
                    <div className="hidden md:block lg:block xl:block mt-10">
                    <Link href="/signup" className="p-2 px-4 text-sm font-semibold bg-yellow-500 hover:bg-yellow-600 text-black rounded-sm">
                        Sign Up
                    </Link>
                    </div>
                </div>
            </div>
            <Sheet>
                <div className="flex justify-around py-6">
                <div>
                    <h2 className="text-left pr-14 text-3xl font-bold md:hidden lg:hidden xl:hidden">Urban<span className="text-yellow-500">Rise</span></h2>
                </div>
                <SheetTrigger className=" text-3xl pl-14 md:hidden lg:hidden xl:hidden"><RiMenuFoldFill /></SheetTrigger>
                <SheetContent>
                <div>
                    <h2 className="text-left py-8 pr-16 text-3xl font-bold">Urban<span className="text-yellow-500">Rise</span></h2>
                </div>
                    <ul>
                        <li className="flex flex-col px-4 pb-8 gap-4 font-semibold">
                            <Link href="/" className="hover:underline">Home</Link>
                            <Link href="/about" className="hover:underline">About Us</Link>
                            <Link href="/project" className="hover:underline">Projects</Link>
                            <Link href="/services" className="hover:underline">Services</Link>
                            <Link href="/member" className="hover:underline">Our Team</Link>
                        </li>
                    </ul>
                    <Link href="/signup" className="p-2 px-5 text-sm font-semibold bg-yellow-500 hover:bg-yellow-600 text-black rounded-sm">
                        Sign Up
                    </Link>
                </SheetContent>
                </div>
            </Sheet>
        </header>
    );
}