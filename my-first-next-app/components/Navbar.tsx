import Link from "next/link";

export default function Navbar(){
    return(
        <nav className="border-b">
            <div className="mx-auto max-w-3xl px-4 py-3 flex gap-4">
                <Link href="/" className="font-semibold">
                    Home
                </Link>
                <Link href="/about" className="font-semibold">
                    About
                </Link>
            </div>
        </nav>
    )
}