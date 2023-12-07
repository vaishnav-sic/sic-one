import SACounter from "../SAComponents/SACounter";
import Footer from "../SAComponents/SAFooter";
import Header from "../SAComponents/SAHeader";
import styles from "../assets/css/page.module.css";
import SAFirstPage from "../SAComponents/SAFirstPage";
import SATopPage from "../SAComponents/SATopPage";

export default function Home() {
  return (
    <>
      <Header />
      <SACounter />
      <SATopPage/>
      <SAFirstPage/>
      <main className={styles.main}>
        {/* <div className={styles.description}></div> */}
      </main>
      
      <Footer />
    </>
  );
}
