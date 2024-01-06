import Banner from "../../components/layout/banner.layout.component";
import Footer from "../../components/layout/footer.layout.component";
import Navbar from "../../components/layout/navbar.layout.component";
import PopularItem from "../../components/layout/popular.layout.component";
import Recommended from "../../components/layout/recommended.layout.component";

const Home = () => {
  return (
    <div className="bg-[#EEEFF0]">
      <Navbar />
      <Banner />
      <PopularItem />
      <Recommended />
      <Footer />
    </div>
  );
};

export default Home;
