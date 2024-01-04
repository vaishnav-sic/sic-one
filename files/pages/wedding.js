import SACounter from "../SAComponents/SACounter";
import Footer from "../SAComponents/SAFooter";
import Header from "../SAComponents/SAHeader";
import styles from "../assets/css/page.module.css";
import SAFirstPage from "../SAComponents/SAFirstPage";
import SATopPage from "../SAComponents/SATopPage";
import Gallery from "../SAComponents/SAGallery";
import SAGallery from "../SAComponents/SAGallery";
import SABlogpost from "../SAComponents/SABlogpost";
import WeddingFooter from "../SAComponents/WeddingFooter";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <SATopPage />
      <SACounter />
      <SAFirstPage />

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
