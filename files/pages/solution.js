import Layout from "../components/Layout";
import Preloader from "../components/Preloader";
import MobileMenu from "../components/MobileMenu";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SolutionBanner from "../components/SolutionBanner";
import Footer from "../components/Footer";
import BlogHome from "../components/BlogHome";
import CTAThree from "../components/CTAThree";
import Contact from "../components/Contact";
import Services from "../components/Services";
import SolutionServices from "../components/SolutionServices";
import CTAOne from "../components/CTAOne";
import SolutionCTAOne from "../components/SolutionCTAOne";
import FunFact from "../components/FunFact";
import CTATwo from "../components/CTATwo";
import Team from "../components/Team";
import Pricing from "../components/Pricing";
import VideoOne from "../components/VideoOne";
import AppScreen from "../components/AppScreen";
import FAQ from "../components/FAQ";
import Clients from "../components/Clients";
import Testimonials from "../components/Testimonials";
import FullStackSyllabus from "../components/FullStackSyllabus";

const Solution = () => (
  <div>
    <Preloader />

    <Layout pageTitle="SIC | Service Page">
      <Header
        btnClass="main-nav__btn"
        extraClassName="site-header-one__fixed-top"
      />
      <MobileMenu />
      {/* <Banner /> */}
      <SolutionBanner />

      {/* <Services /> */}
      <SolutionServices />
      {/* <CTAOne /> */}
      <SolutionCTAOne />
      {/* <FunFact /> */}
      {/* <CTATwo />
      <Pricing />
      <Testimonials />
      <Clients />
      <Team />
      <VideoOne />
      <AppScreen /> */}
      {/* <FAQ /> */}
      {/* <FullStackSyllabus />
      <BlogHome />
      <Contact />
      <CTAThree /> */}
      <Footer />
    </Layout>
  </div>
);

export default Solution;
