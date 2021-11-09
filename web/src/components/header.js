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
// import Link from '@mui/material/Link';
import * as styles from "./header.module.css";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Link, animateScroll as scroll } from "react-scroll";

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
          activeClass="active"
          to="product"
          spy={true}
          smooth={true}
          duration={1000}
          variant="h5"
          color="white"
          style={{marginRight: 50, fontWeight: 'bold', cursor: 'pointer'}}
        >
          Product
        </Link>
        <Link
          activeClass="active"
          to="reviews"
          spy={true}
          smooth={true}
          duration={1000}
          variant="h5"
          color="white"
          style={{marginRight: 50, fontWeight: 'bold', cursor: 'pointer'}}
        >
          Reviews
        </Link>
        <Link
          activeClass="active"
          to="faqs"
          spy={true}
          smooth={true}
          duration={1000}
          variant="h5"
          color="white"
          style={{marginRight: 50, fontWeight: 'bold', cursor: 'pointer'}}
        >
          FAQ
        </Link>
        <Link
          activeClass="active"
          to="support"
          spy={true}
          smooth={true}
          duration={1000}
          variant="h5"
          color="white"
          style={{marginRight: 50, fontWeight: 'bold', cursor: 'pointer'}}
        >
          Support
        </Link>
        <Link
          activeClass="active"
          to="accessories"
          spy={true}
          smooth={true}
          duration={1000}
          variant="h5"
          color="white"
          style={{marginRight: 50, fontWeight: 'bold', cursor: 'pointer'}}
        >
          Accessories
        </Link>

      <Stack direction="row" spacing={1}>
        <Link 
          to="contact" 
          spy={true} 
          smooth={true} 
          duration={1000} 
          variant="filled" 
          style={{backgroundColor: '#f73378', color: 'white', fontSize: '1rem', width: 200, textAlign: 'center', textTransform: 'uppercase', padding: '10px', borderRadius: 20, fontWeight: 'normal', cursor: 'pointer'}}
        >
          Contact Us
        </Link>
      </Stack>
      </Toolbar>
    </AppBar>
  </Box>
);

export default Header;
