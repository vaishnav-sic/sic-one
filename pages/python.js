import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import MobileMenu from "../components/MobileMenu";
import PythonProject from "../components/PythonProject";
import PythonBanner from "../components/PythonBanner";
import PythonServices from "../components/PythonServices";
import PythonVideoOne from "../components/PythonVideoOne";
import PythonSyllabus from "../components/PythonSyllabus";
import Footer from "../components/Footer";
import Schedule from "../components/Schedule";

const internship = () => {
  return (
    <div>
      <Layout pageTitle="SIC | Internship Page">
        <Header
          btnClass="main-nav__btn"
          extraClassName="site-header-one__fixed-top"
        />
        <MobileMenu />  
        <PythonBanner />
        <PythonServices />
        <PythonProject />
        <PythonSyllabus />
        <PythonVideoOne />
        <Schedule />
        <Footer />
      </Layout>
    </div>
  );
};
export default internship;
