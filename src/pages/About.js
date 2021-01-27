import Layout from "../Components/Layout";
import Footer from "../Components/Footer";
import Image from "../Components/Image";
// Import images
import comSoon from "../utilities/imgs/coming-soon.png";

function About() {
  return (
    <div className="About container-flex">
      <Layout className="container">
        <Image
          imgClassName='img-about-soon'
          imgSrc={comSoon}
          imgAlt="Coming soon CLA Plumbing about us page"
        ></Image>
      </Layout>
      <Footer></Footer>
    </div>
  );
}

export default About;
