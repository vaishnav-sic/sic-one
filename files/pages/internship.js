import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import InternBanner from "../components/InternBanner";
import InternServices from "../components/InternServices";
import InternVideoOne from "../components/InternVideoOne";
import InternSyllabus from "../components/InternSyllabus";
import Footer from "../components/Footer";

const internship = () => {
    return(
        <div>
            <Layout pageTitle="SIC | Internship Page">
            <Header
                btnClass="main-nav__btn"
                extraClassName="site-header-one__fixed-top"
            />
            <InternBanner />
            <InternServices />
            <InternVideoOne />
            <InternSyllabus />
            <Footer />
            </Layout>
        </div>
    );
};
export default internship;