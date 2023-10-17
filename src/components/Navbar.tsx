import React from "react";
import Link from "next/link";
import Image from "next/image";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

export default function NavBar() {
  return (
    // <div>
    //   <nav
    //     className="flex space-x-4 my-4 mx-10 w-full items-start"
    //     style={{ zIndex: 1 }}
    //   >
    //     <Link href="/">
    //       <Image src="/homeicon.svg" alt="Home Icon" width={30} height={35} />
    //     </Link>
    //     <Link href="/tournaments">
    //       <button className="font-bold py-2 px-4 rounded">Tournaments</button>
    //     </Link>
    //     <Link href="/teamrankings">
    //       <button className="font-bold py-2 px-4 rounded">Team Rankings</button>
    //     </Link>
    //     <Link href="/globalrankings">
    //       <button className="font-bold py-2 px-4 rounded">
    //         Global Rankings
    //       </button>
    //     </Link>
    //   </nav>
    // </div>
    <div className="navbar absolute z-10 bg-transparent">
      <div className="flex">
        <Link href="/" className="px-2 hover:text-blue-300">
          <HomeRoundedIcon fontSize="large"/>
        </Link>
        <ul className="menu menu-horizontal px-1">
          <li className="uppercase">
            <Link href="/tournaments" className="hover:text-blue-300">
              Tournaments
            </Link>
          </li>
          <li className="uppercase">
            <Link href="/teamrankings" className="hover:text-blue-300">
              Team Rankings
            </Link>
          </li>
          <li className="uppercase">
            <Link href="/globalrankings" className="hover:text-blue-300">
              Global Rankings
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
