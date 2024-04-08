import {Fragment} from 'react';
import Link from "next/link";
import Image from "next/image";
import MobileNav from "@/components/MobileNav";
import {SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/nextjs";


const Navbar = () => {
    return (
        <Fragment>
            <nav className="flex flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
                <Link href="/" className="flex items-center gap-5">
                    <Image
                        src="/icons/logo.svg"
                        width={32}
                        height={32}
                        alt="Y00M"
                        className="max-sm:size-10"
                    />
                    <p className="text-[26px] max-sm:hidden text-white font-extrabold">YOOM</p>
                </Link>
                <div className="flex-between gap-5">
                    <SignedIn>
                        <UserButton/>
                    </SignedIn>
                    <SignedOut>
                        <SignInButton/>
                    </SignedOut>
                    <MobileNav/>
                </div>
            </nav>
        </Fragment>
    )
}

export default Navbar;