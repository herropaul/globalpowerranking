// import React from "react";
// import Link from "next/link";
// import Image from "next/image";

// export default function Navbar() {
//   return (
//     <div>
//       <nav
//         className="flex space-x-4 my-4 mx-10 w-full items-start"
//         style={{ zIndex: 1 }}
//       >
//         <Link href="/">
//           <Image src="/homeicon.svg" alt="Home Icon" width={30} height={35} />
//         </Link>
//         <Link href="/tournaments">
//           <button className="font-bold py-2 px-4 rounded">Tournaments</button>
//         </Link>
//         <Link href="/teamrankings">
//           <button className="font-bold py-2 px-4 rounded">Team Rankings</button>
//         </Link>
//         <Link href="/globalrankings">
//           <button className="font-bold py-2 px-4 rounded">
//             Global Rankings
//           </button>
//         </Link>
//       </nav>
//     </div>
//   );
// }

import React from 'react'
import AppBar from '@mui/material/AppBar';
import { Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import Link from 'next/link';
const Navbar = () => {
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="fixed" sx={{background: 'transparent', boxShadow: 'none'}}>
        <Toolbar>
          <Link href="/">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{mr: 2}}
            >
              <HomeIcon />
            </IconButton>
          </Link>
          {/* <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
            <Link href="/tournaments" >
              Tournaments
            </Link>
          </Typography> */}
          <Box sx={{ flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
            <Link href="/tournaments">
              <Button sx={{my: 2, color: 'white', display: 'block'}}>
                Tournaments
              </Button>
            </Link>
            <Link href="/">
              <Button sx={{my: 2, color: 'white', display: 'block'}}>
                Global Rankings
              </Button>
            </Link>
            <Link href="/">
              <Button sx={{my: 2, color: 'white', display: 'block'}}>
                Team Rankings
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
