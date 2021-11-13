import React from "react";
import Header from "./header";
import Hero from "./hero";
import Product from "./product";
import Accessories from "./accessories";
import Contact from "./contact";
import Review from "./reviews";
import "../styles/layout.css";
import * as styles from "./layout.module.css";

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <Hero/>
    <Product/>
    <Review/>
    <Accessories/>
    <Contact/>
  </>
);

export default Layout;
