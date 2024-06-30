import Layout from "../components/Layout";
import Counter from "../NVComponents/Counter";
import Venue from "../NVComponents/Venue";
import TopPage from "../NVComponents/TopPage";
import Gallery from "../NVComponents/Gallery";
import Shubheccha from "../NVComponents/Shubheccha";
import WeddingFooter from "../NVComponents/WeddingFooter";
import GoldenMoment from "../NVComponents/GoldenMoment";
import BGInfo from "../NVComponents/BGInfo";
import Events from "../NVComponents/Events";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
    <Layout pageTitle="Nikita Weds Vaibhav">
      <TopPage />
      <BGInfo />
      <Counter />
      <Events />
      <Shubheccha />
      <GoldenMoment />
      <Gallery />
      <Venue />
      <WeddingFooter />
    </Layout>
    </>
  );
}
