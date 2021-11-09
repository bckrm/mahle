import React from "react";
import Header from "./header";
import Hero from "./hero";
import Product from "./product";
import Accessories from "./accessories";
import Contact from "./contact";
import FAQs from "./faqs";
import EducationalResources from "./educational_resources";
import Support from "./support";
import "../styles/layout.css";
import * as styles from "./layout.module.css";

    // <div className={styles.content}>{children}</div>
const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <Hero/>
    <Product/>
    <FAQs/>
    <EducationalResources/>
    <Support/>
    <Accessories/>
    <Contact/>
  </>
);

export default Layout;
