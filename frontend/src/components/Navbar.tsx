"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full h-20 flex justify-between items-center px-5 fixed top-0">
      <div>
        <Link
          href="/"
          className="bg-white text-black py-2 px-5 mx-5 rounded-lg"
        >
          Home - Link
        </Link>
        <Link
          href="/account"
          as={"/account"}
          className="bg-white text-black py-2 px-5 mx-5 rounded-lg"
          onClick={(e) => {
            console.log("Account link clicked, href:", e.currentTarget.href);
          }}
        >
          Account - Link
        </Link>
      </div>
    </div>
  );
}
