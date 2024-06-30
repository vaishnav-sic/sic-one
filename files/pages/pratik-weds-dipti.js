import Layout from "../components/Layout";
import Counter from "../PDComponents/Counter";
import Venue from "../PDComponents/Venue";
import Header from "../PDComponents/Header";
import styles from "../assets/css/page.module.css";
import SAFirstPage from "../PDComponents/FirstPage";
import TopPage from "../PDComponents/TopPage";
import Gallery from "../PDComponents/Gallery";
import Blogpost from "../PDComponents/Blogpost";
import Shubheccha from "../PDComponents/Shubheccha";
import WeddingFooter from "../PDComponents/WeddingFooter";
import YTVideo1 from "../PDComponents/YTVideo1";
import YTVideo2 from "../PDComponents/YTVideo2";
import GoldenMoment from "../PDComponents/GoldenMoment";
import BGInfo from "../PDComponents/BGInfo";
import Events from "../PDComponents/Events";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
    <Layout pageTitle="Pratik Weds Dipti">
      <TopPage />
      <YTVideo1 />
      <BGInfo />
      {/* <SAFirstPage /> */}
      <Counter />
      <Events />
      <Shubheccha />
      <GoldenMoment />
      <Gallery />
      {/* <main className={styles.main}>
        <div className={styles.description}></div>
      </main> */}
      <YTVideo2 />
      <Venue />
      <WeddingFooter />
    </Layout>
    </>
  );
}
