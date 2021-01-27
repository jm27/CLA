import Layout from "../Components/Layout";
import Carousel from "../Components/Carousel";
import ContactUs from "../Components/ContactUs";
import Footer from "../Components/Footer";
//Import imgs

function Home() {
  return (
    <div className="Home container-flex">
      <Layout className="container">
        <h2 className="main-text mt-5 mb-5">
          We are a Phoenix local, Family owned and operated business
        </h2>
        <Carousel></Carousel>
      </Layout>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
}

export default Home;
