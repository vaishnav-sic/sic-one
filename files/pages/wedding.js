import SACounter from "../SAComponents/SACounter";
import Footer from "../SAComponents/SAFooter";
import Header from "../SAComponents/SAHeader";
import styles from "../assets/css/page.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <SACounter />
      <main className={styles.main}>
        {/* <div className={styles.description}></div> */}
      </main>
      <Footer />
    </>
  );
}
