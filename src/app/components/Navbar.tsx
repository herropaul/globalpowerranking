import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div>
      <nav
        className="flex space-x-4 my-4 mx-10 w-full items-start"
        style={{ zIndex: 1 }}
      >
        <Link href="/">
          <Image src="/homeicon.svg" alt="Home Icon" width={30} height={35} />
        </Link>
        <Link href="/tournaments">
          <button className="font-bold py-2 px-4 rounded">Tournaments</button>
        </Link>
        <Link href="/teamrankings">
          <button className="font-bold py-2 px-4 rounded">Team Rankings</button>
        </Link>
        <Link href="/globalrankings">
          <button className="font-bold py-2 px-4 rounded">
            Global Rankings
          </button>
        </Link>
      </nav>
    </div>
  );
}
