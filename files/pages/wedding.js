import SACounter from "../SAComponents/SACounter";
import Footer from "../SAComponents/SAFooter";
import Header from "../SAComponents/SAHeader";
import styles from "../assets/css/page.module.css";
import SAFirstPage from "../SAComponents/SAFirstPage";
import SATopPage from "../SAComponents/SATopPage";
import Gallery from "../SAComponents/SAGallery";
import Blogpost from "../SAComponents/SABlogpost";

export default function Home() {
  return (
    <>
      <Header />
      <SACounter />
      <SATopPage/>
      <SAFirstPage/>
      <Blogpost/>
      <Gallery/>
      <main className={styles.main}>
        {/* <div className={styles.description}></div> */}
      </main>
      
      <Footer />
    </>
  );
}
