import React from "react";
import Link from "next/link";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

export default function NavBar() {
  return (
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
            <Link href="/team-rankings" className="hover:text-blue-300">
              Team Rankings
            </Link>
          </li>
          <li className="uppercase">
            <Link href="/global-rankings" className="hover:text-blue-300">
              Global Rankings
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
