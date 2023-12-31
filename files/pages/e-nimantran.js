import SACounter from "../nimantran/Counter";
import Footer from "../nimantran/Footer";
import Header from "../nimantran/Header";
import styles from "../assets/css/page.module.css";
import SAFirstPage from "../nimantran/FirstPage";
import SATopPage from "../nimantran/TopPage";
import Gallery from "../nimantran/Gallery";
import SAGallery from "../nimantran/Gallery";
import SABlogpost from "../nimantran/Blogpost";
import WeddingFooter from "../nimantran/WeddingFooter";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <SATopPage />
      <SAFirstPage />
      <SACounter />
      <Gallery />
      {/* <SATopPage /> */}
      {/* <SAFirstPage /> */}
      {/* <main className={styles.main}>
        <div className={styles.description}></div>
      </main> */}
      {/* <SAGallery /> */}
      <SABlogpost />

      <Footer />
      <WeddingFooter />
    </>
  );
}
