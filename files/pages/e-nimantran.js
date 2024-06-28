import Layout from "../components/Layout";
import SACounter from "../nimantran/Counter";
import Footer from "../nimantran/Footer";
import Header from "../nimantran/Header";
import styles from "../assets/css/page.module.css";
import SAFirstPage from "../nimantran/FirstPage";
import SATopPage from "../nimantran/TopPage";
import Gallery from "../nimantran/Gallery";
import SAGallery from "../nimantran/Gallery";
import SABlogpost from "../nimantran/Blogpost";
import Shubheccha from "../nimantran/Shubheccha";
import WeddingFooter from "../nimantran/WeddingFooter";
import YTVideo from "../nimantran/YTVideo";
import GoldenMoment from "../nimantran/GoldenMoment";
import BGInfo from "../nimantran/BGInfo";
import Events from "../nimantran/Events";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
    <Layout pageTitle="Groom Weds Bride">
      <SATopPage />
      <BGInfo />
      {/* <SAFirstPage /> */}
      <SACounter />
      <GoldenMoment />
      <Events />
      <YTVideo />
      <SABlogpost />
      <Shubheccha />
      <Gallery />
      {/* <SATopPage /> */}
      {/* <SAFirstPage /> */}
      {/* <main className={styles.main}>
        <div className={styles.description}></div>
      </main> */}
      {/* <SAGallery /> */}
      <SACounter />
      <Footer />
      <WeddingFooter />
    </Layout>
    </>
  );
}
