// import { Link } from "gatsby";
import React from "react";
import Icon from "./icon";
import { cn } from "../lib/helpers";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';
import * as styles from "./header.module.css";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const handleClick = () => {
  console.info('You clicked the Chip.');
};

const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => (

  <Box sx={{ flexGrow: 1, width: '50%', margin: 'auto', fontWeight: 'bold' }}>
    <AppBar position="static" style={{padding: 20, backgroundColor: '#002984'}}>
      <Toolbar>
        <Typography variant="h3" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          BLUE - J
        </Typography>
        <Link
          href="#"
          variant="h5"
          underline="none"
          color="white"
          style={{marginRight: 50, fontWeight: 'bold'}}
          onClick={() => {console.info("I'm a button.");}}
        >
          Product
        </Link>
        <Link
          href="#"
          variant="h5"
          underline="none"
          color="white"
          style={{marginRight: 50, fontWeight: 'bold'}}
          onClick={() => {console.info("I'm a button.");}}
        >
          Reviews
        </Link>
        <Link
          href="#"
          variant="h5"
          underline="none"
          color="white"
          style={{marginRight: 50, fontWeight: 'bold'}}
          onClick={() => {console.info("I'm a button.");}}
        >
          FAQ
        </Link>
        <Link
          href="#"
          variant="h5"
          underline="none"
          color="white"
          style={{marginRight: 50, fontWeight: 'bold'}}
          onClick={() => {console.info("I'm a button.");}}
        >
          Support
        </Link>
        <Link
          href="#"
          variant="h5"
          underline="none"
          color="white"
          style={{marginRight: 50, fontWeight: 'bold'}}
          onClick={() => {console.info("I'm a button.");}}
        >
          Accessories
        </Link>

      <Stack direction="row" spacing={1}>
        <Chip label="CONTACT US" variant="filled" onClick={handleClick} style={{backgroundColor: '#f73378', color: 'white', fontSize: '1.5rem', padding: '25px', fontWeight: 'normal'}}/>
      </Stack>
      </Toolbar>
    </AppBar>
  </Box>
  // <div className={styles.root}>
  //   <div className={styles.wrapper}>
  //     <div className={styles.branding}>
  //       <Link to="/">{siteTitle}</Link>
  //     </div>

  //     <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
  //       <Icon symbol="hamburger" />
  //     </button>

  //     <nav className={cn(styles.nav, showNav && styles.showNav)}>
  //       <ul>
  //         <li>
  //           <Link to="/archive/">Archive</Link>
  //         </li>
  //       </ul>
  //     </nav>
  //   </div>
  // </div>
);

export default Header;
